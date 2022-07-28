<?php


namespace App\Elasticsearch;


use App\Service\DataFileReader;
use Elastica\Query\MultiMatch;
use FOS\ElasticaBundle\Finder\TransformedFinder;
use Symfony\Component\HttpFoundation\RequestStack;

class Search
{
    private TransformedFinder $wordsFinder;
    private TransformedFinder $meaningNamesFinder;
    private DataFileReader $data;
    private string $query;

    public function __construct(
        TransformedFinder $wordsFinder,
        TransformedFinder $meaningNamesFinder,
        DataFileReader    $data,
        RequestStack      $request
    )
    {
        $this->wordsFinder = $wordsFinder;
        $this->meaningNamesFinder = $meaningNamesFinder;
        $this->data = $data;
        $this->query = $request->getCurrentRequest()->query->get('q', '');
    }

    public function findWords(): array
    {
        $multiMatch = new MultiMatch();
        $multiMatch->setQuery($this->query);

        return !empty($this->query) ? $this->wordsFinder->find($multiMatch) : [];
    }

    public function findFilteredMeanings(): array
    {
        $filteredMeanings = [];
        $filteredMeaningNames = $this->getMeaningNamesBeyondParenthesise();

        foreach ($filteredMeaningNames as $mName) {
            $meanings = $mName->getMeaning();
            foreach ($meanings as $meaning) {
                if (!in_array($meaning, $filteredMeanings)) {
                    array_push($filteredMeanings, $meaning);
                }
            }
        }
        return $filteredMeanings;
    }

    private function getMeaningNamesBeyondParenthesise(): array
    {
        $multiMatch = new MultiMatch();
        $multiMatch->setQuery($this->query);

        $allMeaningNames = $this->meaningNamesFinder->find($multiMatch);
        $filteredMeaningNames = [];
        foreach ($allMeaningNames as $mName) {

            $splitByParenthesis = explode('(', rtrim($mName->getName(), ')'));

            if ($this->isQueryPronounOrPrepositionBeforeParenthesis($splitByParenthesis[0])) {
                if (!$this->isQueryInMeaningParenthesise($splitByParenthesis[1] ?? null)) {
                    array_push($filteredMeaningNames, $mName);
                }
            }
        }
        return $filteredMeaningNames;
    }

    private function isQueryPronounOrPrepositionBeforeParenthesis(string $beforeParenthesis): bool
    {
        return !$this->isQueryPronPrepToFilter() || $this->query === trim($beforeParenthesis);
    }

    private function isQueryPronPrepToFilter(): bool
    {
        return in_array($this->query, $this->getPronPrepToFilterArray());
    }

    private function getPronPrepToFilterArray(): array
    {
        return explode(',', $this->data->readData('pron_prep_to_filter.csv'));
    }

    public function isQueryInMeaningParenthesise($parenthesis): bool
    {
        return preg_match('/\b' . $this->query . '\b/ui', $parenthesis);
    }

}