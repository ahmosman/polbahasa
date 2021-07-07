<?php

namespace App\Service;

use App\Entity\Meaning;
use App\Entity\Word;
use Doctrine\Common\Collections\Criteria;
use Doctrine\ORM\EntityManagerInterface;

class SpeechSections
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function getPartsOfSpeech(): array
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
        $partsOfSpeech =  $this->getPartsOfSpeech();
        $speechSections = [];

        foreach ($partsOfSpeech as $pos)
        {
            $criteria = Criteria::create()
                ->andWhere(Criteria::expr()->eq('partOfSpeech',$pos))
                ->orderBy(['orderValue'=>'ASC'])
            ;
            array_push($speechSections, $word->getMeanings()->matching($criteria));
        }

        arsort($speechSections);

        return $speechSections;
    }
}