<?php

namespace App\Controller;

use App\Elasticsearch\Suggestions;
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

    public function __construct(Environment $twig, Suggestions $suggestions)
    {
        $this->twig = $twig;
        $this->suggestions = $suggestions;
    }

    #[Route('/', name: 'main')]
    public function index(): Response
    {
        return $this->render('index.html.twig');
    }

    #[Route('/dictionary', name: 'dictionary')]
    public function findWord(Request $request, SessionInterface $session, TransformedFinder $wordsFinder): Response
    {
        $q = $request->query->get('q','');
        $results = !empty($q) ? $wordsFinder->findHybrid(Util::escapeTerm($q)) : [];
        //dump($results);
        $suggestions = $this->suggestions->getNativeSuggestions($q);
        dump($suggestions);
        $session->set('q', $q);
        return $this->json($suggestions);
        //return new Response($this->twig->render('dictionary/foreign_to_native.html.twig'));
    }
}
