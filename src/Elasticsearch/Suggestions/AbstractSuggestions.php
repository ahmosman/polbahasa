<?php


namespace App\Elasticsearch\Suggestions;

use Elastica\Query;
use Elastica\Suggest;
use Elastica\Suggest\AbstractSuggest;
use FOS\ElasticaBundle\Elastica\Client;
use Symfony\Component\HttpFoundation\RequestStack;

abstract class AbstractSuggestions
{

    protected const SUGGEST_FIELD = 'name';
    protected string $query;
    private Client $client;

    public function __construct(Client $client, RequestStack $request)
    {
        $this->client = $client;
        $this->query = $request->getCurrentRequest()->query->get('q', '');
    }

    public function getAllSuggestions(): array
    {
        $merged = array_merge($this->getForeignSuggestions(), $this->getNativeSuggestions());
        $results = [];
        foreach ($merged as $result) {
            $bracketPosition = strpos($result, " (");
            $result = $bracketPosition ? trim(substr($result, 0, $bracketPosition)) : trim($result);
            if (!in_array($result, $results, true)) {
                array_push($results, $result);
            }
        }
        return $results;
    }

    public function getForeignSuggestions(): array
    {
        $suggestIndex = $this->client->getIndex($this->getWordIndex());

        return $this->getSuggestions($suggestIndex);
    }

    abstract protected function getWordIndex(): string;

    protected function getSuggestions($suggestIndex): array
    {
        $suggest = new Suggest($this->getSuggest());
        $query = (new Query())->setSuggest($suggest);
        $suggests = $suggestIndex->search($query)->getSuggests();
        $results = [];
        foreach ($suggests[$this->getSuggestName()][0]['options'] as $result) {
            array_push($results, $result['text']);
        }
        return $results;
    }

    abstract protected function getSuggest(): AbstractSuggest;

    abstract protected function getSuggestName(): string;

    public function getNativeSuggestions(): array
    {
        $suggestIndex = $this->client->getIndex($this->getMeaningsIndex());
        return $this->getSuggestions($suggestIndex);
    }

    abstract protected function getMeaningsIndex(): string;

}