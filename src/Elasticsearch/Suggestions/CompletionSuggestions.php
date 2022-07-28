<?php

namespace App\Elasticsearch\Suggestions;

use Elastica\Suggest\Completion;
use Elastica\Util;

class CompletionSuggestions extends AbstractSuggestions
{

    protected function getWordIndex(): string
    {
        return 'completion_words_suggest_index';
    }

    protected function getMeaningsIndex(): string
    {
        return 'completion_meanings_suggest_index';
    }

    protected function getSuggest(): Completion
    {
        return (new Completion($this->getSuggestName(), self::SUGGEST_FIELD))
            ->setPrefix(Util::escapeTerm($this->query));
    }

    protected function getSuggestName(): string
    {
        return 'completion';
    }
}