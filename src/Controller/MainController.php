<?php

namespace App\Controller;

use App\Elasticsearch\Search;
use App\Elasticsearch\Suggestions;
use App\Service\Dictionary;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;

class MainController extends AbstractController
{
    private $twig;
    private $search;
    private $dictionary;

    public function __construct(Environment $twig, Search $search, Dictionary $dictionary)
    {
        $this->twig = $twig;
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
        $q = $request->query->get('q', '');
        $meanings = $this->search->findMeanings($q);
        $words = $this->search->findWords($q);
        $nativeData = $this->dictionary->getNativeData($meanings);
        $foreignData = $this->dictionary->getForeignData($words);
        $fuzzyResults = [];
        if (count($nativeData) <= 0 && count($foreignData) <= 0) {
            $fuzzyResults = $this->search->findFuzzy($q, 0);
        }


        $session->set('q', $q);
        return new Response($this->twig->render('dictionary/search_result.html.twig', [
            'foreign' => $foreignData['wordsSections'],
            'native' => $nativeData,
            'rootWord' => $foreignData['rootWord']
        ]));
    }
}
