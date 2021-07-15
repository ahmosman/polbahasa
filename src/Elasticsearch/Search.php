<?php


namespace App\Elasticsearch;


use Elastica\Query\MultiMatch;
use FOS\ElasticaBundle\Finder\TransformedFinder;

class Search
{
    private TransformedFinder $wordsFinder;
    private TransformedFinder $meaningsFinder;

    public function __construct(TransformedFinder $wordsFinder, TransformedFinder $meaningsFinder)
    {
        $this->wordsFinder = $wordsFinder;
        $this->meaningsFinder = $meaningsFinder;

    }

    public function findWords(string $q)
    {
        $multiMatch = new MultiMatch();
        $multiMatch->setQuery($q);
        $multiMatch->setFuzziness(0.5);

        return !empty($q) ? $this->wordsFinder->find($multiMatch) : [];
    }

    public function findMeanings(string $q)
    {
        $multiMatch = new MultiMatch();
        $multiMatch->setQuery($q);
        $multiMatch->setFuzziness(0.5);

        return !empty($q) ? $this->meaningsFinder->find($multiMatch) : [];
    }

}