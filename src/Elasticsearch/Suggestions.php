<?php


namespace App\Elasticsearch;


use Elastica\Query;
use Elastica\Suggest;
use Elastica\Suggest\Completion;
use Elastica\Suggest\Phrase;
use Elastica\Util;
use FOS\ElasticaBundle\Elastica\Client;

class Suggestions
{

    public const COMPLETION_WORD = [
        'INDEX' => 'completion_words_suggest_index',
        'SUGGEST_NAME' => 'completion',
        'SUGGEST_FIELD' => 'name'
    ];

    public const COMPLETION_MEANING = [
        'INDEX' => 'completion_meanings_suggest_index',
        'SUGGEST_NAME' => 'completion',
        'SUGGEST_FIELD' => 'name'
    ];

    public const COMPLETION_ROOTWORD = [
        'INDEX' => 'completion_rootwords_suggest_index',
        'SUGGEST_NAME' => 'completion',
        'SUGGEST_FIELD' => 'name'
    ];

    public const PHRASE_WORD = [
        'INDEX' => 'phrase_words_suggest_index',
        'SUGGEST_NAME' => 'text',
        'SUGGEST_FIELD' => 'name'
    ];

    public const PHRASE_MEANING = [
        'INDEX' => 'phrase_meanings_suggest_index',
        'SUGGEST_NAME' => 'text',
        'SUGGEST_FIELD' => 'name'
    ];

    private Client $client;

    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    public function getAllSuggestions(string $q, string $type)
    {
        $foreign = [];
        $native = [];
        if ($type == 'completion') {
            $foreign = $this->getForeignCompletionSuggestions($q);
            $native = $this->getNativeCompletionSuggestions($q);
        } elseif ($type == 'phrase') {
            $foreign = $this->getForeignPhraseSuggestions($q);
            $native = $this->getNativePhraseSuggestions($q);
        }

        $merged = array_merge($foreign, $native);
        $results = [];
        foreach ($merged as $result) {
            $bracketPosition = strpos($result, " (");
            $result = $bracketPosition ? substr($result, 0, $bracketPosition) : $result;
            if (!in_array($result, $results, true))
                array_push($results, $result);
        }
        return $results;
    }

    public function getForeignCompletionSuggestions(string $q)
    {
        return $this->getSuggestions($q, 'completion', self::COMPLETION_WORD);
    }

    private function getSuggestions(string $q, string $type, array $indexData)
    {
        $suggestIndex = $this->client->getIndex($indexData['INDEX']);
        $suggestion = match ($type) {
            'phrase' => (new Phrase($indexData['SUGGEST_NAME'], $indexData['SUGGEST_FIELD']))
                ->setText(Util::escapeTerm($q))
                ->setRealWordErrorLikelihood(0.5)
                ->setStupidBackoffSmoothing(0.4)
        ,
            'completion' => (new Completion($indexData['SUGGEST_NAME'], $indexData['SUGGEST_FIELD']))
                ->setPrefix(Util::escapeTerm($q))
        };
        $suggest = new Suggest($suggestion);
        $query = (new Query())->setSuggest($suggest);
        $suggests = $suggestIndex->search($query)->getSuggests();
        $results = [];
        foreach ($suggests[$indexData['SUGGEST_NAME']][0]['options'] as $result) {
            array_push($results, $result['text']);
        }
        return $results;
    }

    public function getNativeCompletionSuggestions(string $q)
    {
        return $this->getSuggestions($q, 'completion', self::COMPLETION_MEANING);
    }

    public function getForeignPhraseSuggestions(string $q)
    {
        return $this->getSuggestions($q, 'phrase', self::PHRASE_WORD);
    }

    public function getNativePhraseSuggestions(string $q)
    {
        return $this->getSuggestions($q, 'phrase', self::PHRASE_MEANING);
    }

    public function getRootWordsCompletionSuggestions(string $q)
    {
        return $this->getSuggestions($q, 'completion', self::COMPLETION_ROOTWORD);
    }


}