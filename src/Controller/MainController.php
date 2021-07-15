<?php

namespace App\Controller;

use App\Elasticsearch\Search;
use App\Elasticsearch\Suggestions;
use App\Service\Dictionary;
use Elastica\Query\Fuzzy;
use Elastica\Query\MultiMatch;
use Elastica\Util;
use FOS\ElasticaBundle\Finder\TransformedFinder;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;

class MainController extends AbstractController
{
    private $twig;
    private $suggestions;
    private $search;
    private $dictionary;

    public function __construct(Environment $twig, Suggestions $suggestions, Search $search, Dictionary $dictionary)
    {
        $this->twig = $twig;
        $this->suggestions = $suggestions;
        $this->search = $search;
        $this->dictionary = $dictionary;
    }

    #[Route('/', name: 'main')]
    public function index(): Response
    {
        return $this->render('index.html.twig');
    }

    #[Route('/dictionary', name: 'dictionary')]
    public function dictionary(Request $request, SessionInterface $session): Response
    {
        $q =  $request->query->get('q','');

        $meanings = $this->search->findMeanings($q);
        $words = $this->search->findWords($q);
        $nativeData = $this->dictionary->getNativeData($meanings);
        $foreignData = $this->dictionary->getForeignData($words);
//        dump($nativeData);
//        dump($foreignData);
        $suggestions = $this->suggestions->getForeignSuggestions($q);
        $session->set('q', $q);
        return new Response($this->twig->render('dictionary/search_result.html.twig',[
            'foreign' => $foreignData,
            'native' => $nativeData
        ]));
    }
}
