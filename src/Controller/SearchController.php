<?php

namespace App\Controller;

use App\Elasticsearch\Suggestions;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SearchController extends AbstractController
{
    private $suggestions;

    public function __construct(Suggestions $suggestions)
    {
        $this->suggestions = $suggestions;
    }

    #[Route('/autocomplete', name: 'autocomplete', options: ['expose'=>true])]
    public function autocomplete(Request $request): Response
    {
        $q = $request->query->get('q','');

        $all = $request->query->get('all') ?? null;

        if(isset($all))
            $suggestions = $this->suggestions->getAllSuggestions($q);
        else
            $suggestions = $this->suggestions->getNativeSuggestions($q);

        dump(isset($all));
        dump($suggestions);die;
        return $this->json($suggestions);
    }
    //TODO: #[Route('/checkexist', name: 'checkexist', options: ['expose'=>true])]
    //przy wprowadzaniu nowego słowa
}
