<?php


namespace App\Elasticsearch;


use Elastica\Query;
use Elastica\Suggest;
use Elastica\Suggest\Completion;
use Elastica\Util;
use FOS\ElasticaBundle\Elastica\Client;

class Suggestions
{

    public const WORD = [
        'INDEX' =>  'words_suggest_index',
        'SUGGEST_NAME' => 'completion',
        'SUGGEST_FIELD' => 'name'
    ];

    public const MEANING = [
        'INDEX' =>  'meanings_suggest_index',
        'SUGGEST_NAME' => 'completion',
        'SUGGEST_FIELD' => 'name'
    ];

    public const ROOTWORD = [
        'INDEX' =>  'rootwords_suggest_index',
        'SUGGEST_NAME' => 'completion',
        'SUGGEST_FIELD' => 'name'
    ];

    private Client $client;

    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    private function getSuggestions(string $q, $indexData)
    {
        $suggestIndex = $this->client->getIndex($indexData['INDEX']);
        $completionSuggest = (new Completion($indexData['SUGGEST_NAME'], $indexData['SUGGEST_FIELD']))
            ->setPrefix(Util::escapeTerm($q));
        $suggest = new Suggest($completionSuggest);
        $query = (new Query())->setSuggest($suggest);
        $suggests = $suggestIndex->search($query)->getSuggests();
        $results = [];
        foreach ($suggests[$indexData['SUGGEST_NAME']][0]['options'] as $result)
        {
            array_push($results, $result['text']);
        }
        return $results;
    }

    public function getAllSuggestions(string $q)
    {
        $foreign = $this->getForeignSuggestions($q);
        $native = $this->getNativeSuggestions($q);
        $merged = array_merge($foreign,$native);
        $results = [];
        foreach ($merged as $result)
        {
            $bracketPosition = strpos($result," (");
            $result = $bracketPosition ? substr($result,0,$bracketPosition) : $result;
            if(!in_array($result,$results,true))
                array_push($results,$result);
        }
        return $results;
    }

    public function getForeignSuggestions(string $q)
    {
        return $this->getSuggestions($q, self::WORD);
    }

    public function getNativeSuggestions(string $q)
    {
        return $this->getSuggestions($q,self::MEANING);
    }

    public function getRootWordsSuggestions(string $q)
    {
        return $this->getSuggestions($q,self::ROOTWORD);
    }


}