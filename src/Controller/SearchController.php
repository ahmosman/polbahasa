<?php

namespace App\Controller;

use App\Elasticsearch\Suggestions\CompletionSuggestions;
use App\Elasticsearch\Suggestions\RootWordsSuggestions;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SearchController extends AbstractController
{
    private CompletionSuggestions $completionSuggestions;
    private RootWordsSuggestions $rootWordsSuggestions;

    public function __construct(CompletionSuggestions $completionSuggestions, RootWordsSuggestions $rootWordsSuggestions)
    {
        $this->completionSuggestions = $completionSuggestions;
        $this->rootWordsSuggestions = $rootWordsSuggestions;
    }

    #[Route('/autocomplete', name: 'autocomplete', options: ['expose' => true])]
    public function autocomplete(Request $request): Response
    {

        $all = $request->query->get('all') ?? null;

        if (isset($all)) {
            $suggestions = $this->completionSuggestions->getAllSuggestions();
        } else {
            $suggestions = $this->completionSuggestions->getForeignSuggestions();
        }

        return $this->json($suggestions);
    }

    #[Route('/autocomplete_rootwords', name: 'autocomplete_rootwords', options: ['expose' => true])]
    public function autocompleteRootWords(): Response
    {
        $suggestions = $this->rootWordsSuggestions->getForeignSuggestions();
        return $this->json($suggestions);
    }
}
