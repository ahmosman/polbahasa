<?php


namespace App\Elasticsearch;


use Elastica\Query\MultiMatch;
use FOS\ElasticaBundle\Finder\TransformedFinder;

class Search
{
    private TransformedFinder $wordsFinder;
    private TransformedFinder $meaningNamesFinder;

    public function __construct(TransformedFinder $wordsFinder, TransformedFinder $meaningNamesFinder)
    {
        $this->wordsFinder = $wordsFinder;
        $this->meaningNamesFinder = $meaningNamesFinder;

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
        $meaningNames = $this->meaningNamesFinder->find($multiMatch);
        $meaningsFinal = [];
        foreach ($meaningNames as $mName)
        {
            $meanings = $mName->getMeaning();
            foreach ($meanings as $meaning)
            {
                if(!in_array($meaning, $meaningsFinal))
                    array_push($meaningsFinal, $meaning);
            }
        }
        return $meaningsFinal;
    }

}