<?php

namespace App\Elasticsearch\Suggestions;

class RootWordsSuggestions extends CompletionSuggestions
{
    protected function getWordIndex(): string
    {
        return 'completion_rootwords_suggest_index';
    }
}