<?php


namespace App\Elasticsearch;


use App\Service\DataFileReader;
use Elastica\Query\MultiMatch;
use FOS\ElasticaBundle\Finder\TransformedFinder;

class Search
{
    private TransformedFinder $wordsFinder;
    private TransformedFinder $meaningNamesFinder;
    private DataFileReader $pronPrepToFilter;

    public function __construct(TransformedFinder $wordsFinder, TransformedFinder $meaningNamesFinder, DataFileReader $data)
    {
        $this->wordsFinder = $wordsFinder;
        $this->meaningNamesFinder = $meaningNamesFinder;
        $this->pronPrepToFilter = explode(',',$data->readData('pron_prep_to_filter.csv'));

    }

    public function findWords(string $q)
    {
        $multiMatch = new MultiMatch();
        $multiMatch->setQuery($q);
        $multiMatch->setFuzziness(1);

        return !empty($q) ? $this->wordsFinder->find($multiMatch) : [];
    }

    public function findMeanings(string $q)
    {
        $multiMatch = new MultiMatch();
        $multiMatch->setQuery($q);
        $multiMatch->setFuzziness(1);
        $allMeaningNames = $this->meaningNamesFinder->find($multiMatch);
        $filteredMeaningNames = [];
        $meaningsFinal = [];
        $isPronOrPrep = in_array($q, $this->pronPrepToFilter);

        //filter out meanings which contains $q only inside parenthesise
        foreach ($allMeaningNames as $mName)
        {
            $nameStr = $mName->getName();

            $splitByParenthesis = explode('(', rtrim($nameStr, ')'));
            $beforeParenthesis = $splitByParenthesis[0];

            //check if $q is pronoun or preposition out of the parenthesis
            if(!$isPronOrPrep || ($q === trim($beforeParenthesis)))
            {
                $inParenthesis = $splitByParenthesis[1] ?? null;
                if (preg_match('/\b' . $q . '\b/u', $beforeParenthesis) && !preg_match('/\b' . $q . '\b/u', $inParenthesis))
                    array_push($filteredMeaningNames, $mName);
            }
        }

        foreach ($filteredMeaningNames as $mName)
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