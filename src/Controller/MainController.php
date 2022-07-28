<?php

namespace App\Controller;

use App\Elasticsearch\Search;
use App\Elasticsearch\Suggestions\PhraseSuggestions;
use App\Repository\WordRepository;
use App\Service\Dictionary;
use Pagerfanta\Doctrine\ORM\QueryAdapter;
use Pagerfanta\Pagerfanta;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;

class MainController extends AbstractController
{
    private Environment $twig;
    private Search $search;
    private Dictionary $dictionary;
    private PhraseSuggestions $phraseSuggestions;

    public function __construct(
        Environment       $twig,
        Search            $search,
        PhraseSuggestions $phraseSuggestions,
        Dictionary        $dictionary
    ) {
        $this->twig = $twig;
        $this->search = $search;
        $this->dictionary = $dictionary;
        $this->phraseSuggestions = $phraseSuggestions;
    }

    #[Route('/')]
    public function indexNoLocale(): Response
    {
        return $this->redirectToRoute('main', ['_locale' => 'pl']);
    }

    #[Route('/{_locale<%app.supported_locales%>}/', name: 'main')]
    public function index(): Response
    {
        return $this->render('index.html.twig');
    }

    #[Route('/{_locale<%app.supported_locales%>}/dictionary', name: 'dictionary')]
    public function dictionary(): Response {
        $meanings = $this->search->findFilteredMeanings();
        $words = $this->search->findWords();

        $nativeData = $this->dictionary->getNativeData($meanings);
        $foreignData = $this->dictionary->getForeignData($words);

        $phraseSuggestions = [];

        if (count($nativeData) <= 0
            && count($foreignData['wordsSections']) <= 0
        ) {
            $phraseSuggestions = $this->phraseSuggestions->getAllSuggestions();
        }

        return new Response(
            $this->twig->render('dictionary/search_result.html.twig', [
                'foreign'     => $foreignData['wordsSections'],
                'native'      => $nativeData,
                'rootWord'    => $foreignData['rootWord'],
                'suggestions' => $phraseSuggestions
            ])
        );
    }

    #[Route('/{_locale<%app.supported_locales%>}/list/{page<\d+>}', name: 'list_words')]
    public function listWords(WordRepository $wordRepository, int $page = 1): Response {
        $queryBuilder = $wordRepository->createWordListQueryBuilder();
        $pager = new Pagerfanta(new QueryAdapter($queryBuilder));
        $pager->setMaxPerPage(15);
        $pager->setCurrentPage($page);
        $wordsCount = $pager->count();
        return new Response(
            $this->twig->render('dictionary/list_words.html.twig', [
                'pager'      => $pager,
                'wordsCount' => $wordsCount
            ])
        );
    }
}
