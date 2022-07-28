<?php

namespace App\Elasticsearch\Suggestions;


use Elastica\Suggest\Phrase;
use Elastica\Util;

class PhraseSuggestions extends AbstractSuggestions
{

    protected function getWordIndex(): string
    {
        return 'phrase_words_suggest_index';
    }

    protected function getMeaningsIndex(): string
    {
        return 'phrase_meanings_suggest_index';
    }

    protected function getSuggest(): Phrase
    {
        return (new Phrase($this->getSuggestName(), self::SUGGEST_FIELD))
            ->setText(Util::escapeTerm($this->query))
            ->setRealWordErrorLikelihood(0.5)
            ->setStupidBackoffSmoothing(0.4);
    }

    protected function getSuggestName(): string
    {
        return 'text';
    }
}