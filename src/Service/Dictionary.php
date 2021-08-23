<?php

namespace App\Service;

use App\Entity\Meaning;
use App\Entity\Word;
use Doctrine\Common\Collections\Criteria;
use Doctrine\ORM\EntityManagerInterface;

class Dictionary
{
    private $em;
    private $partsOfSpeech;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
        $this->partsOfSpeech = $this->getPartsOfSpeech();
    }

    private function getPartsOfSpeech(): array
    {
        $qb = $this->em->createQueryBuilder();

        $qb->select('m.partOfSpeech')
            ->distinct()
            ->from(Meaning::class, 'm')
            ;

        $result = $qb->getQuery()->getResult();

        $partsOfSpeech = [];
        foreach ($result as $r)
            array_push($partsOfSpeech,$r['partOfSpeech']);

        return $partsOfSpeech;
    }

    public function getSpeechSections(Word $word): array
    {
        $speechSections = [];

        foreach ($this->partsOfSpeech as $pos)
        {
            $criteria = Criteria::create()
                ->andWhere(Criteria::expr()->eq('partOfSpeech',$pos))
                ->orderBy(['orderValue'=>'ASC'])
            ;
            $meanings = $word->getMeanings()->matching($criteria);

            if(!empty($meanings[0]))
                array_push($speechSections, $meanings);
        }

        //sorting speechSections by partOfSpeech order
        $posOrder = explode(',', $word->getPartsOfSpeechOrder());
        $sortedSpeechSections = [];
        while(!empty($posOrder))
        {
            for($i = 0; $i < count($speechSections); $i++)
            {
                if($speechSections[$i][0]->getPartOfSpeech() == $posOrder[0])
                {
                    array_push($sortedSpeechSections, $speechSections[$i]);
                    //delete first value from posOrder array
                    array_shift($posOrder);
                    //delete value from speechSections array
                    unset($speechSections[$i]);
                    //re-index speechSections array
                    $speechSections = array_values($speechSections);
                    break;
                }
            }
        }
        return $sortedSpeechSections;
    }

    public function getForeignData(array $words): array
    {
        $foreignData = [
          'wordsSections' => [],
          'rootWord' => null
        ];
        if(!empty($words))
        {
            foreach ($words as $word)
            {
                if($word->getRootWord() !== null)
                {
                    $rootWord = $word->getRootWord();
                    $words = $rootWord->getWords();
                    $foreignData['rootWord'] = $rootWord->getName();
                    break;
                }
            }
            foreach ($words as $word)
                array_push($foreignData['wordsSections'], $this->getSpeechSections($word));
        }
        return $foreignData;
    }

    public function getNativeData(array $meanings) :array
    {

        $speechSections = [];
        if(!empty($meanings))
        {
            foreach ($meanings as $meaning)
            {
                $word = $meaning->getWord()->getName();
                $partOfSpeech = $meaning->getPartOfSpeech();
                $speech_index = array_search($partOfSpeech,array_column($speechSections,'partOfSpeech'));

                if($speech_index === false)
                {
                    array_push($speechSections, ['partOfSpeech' => $partOfSpeech]);
                    $speech_index = array_search($partOfSpeech,array_column($speechSections,'partOfSpeech'));
                    $speechSections[$speech_index]['words'] = [];
                }

                $word_index = array_search($word, array_column($speechSections[$speech_index]['words'], 'name'));

                if($word_index === false)
                {
                    array_push($speechSections[$speech_index]['words'], ['name' => $word]);
                    $word_index = array_search($word, array_column($speechSections[$speech_index]['words'], 'name'));
                    $speechSections[$speech_index]['words'][$word_index]['meanings'] = [];
                }
                array_push($speechSections[$speech_index]['words'][$word_index]['meanings'],$meaning);
            }
        }
        return $speechSections;
    }

    public function getNotFlushedMeaningName(array $newMeaningNames, string $name)
    {
        if(!empty($newMeaningNames))
        {
            foreach ($newMeaningNames as $nMName)
            {
                if($nMName->getName() == $name)
                    return $nMName;
            }
        }
        return null;
    }
}