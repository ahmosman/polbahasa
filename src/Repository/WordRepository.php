<?php

namespace App\Repository;

use App\Entity\Word;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Word|null find($id, $lockMode = null, $lockVersion = null)
 * @method Word|null findOneBy(array $criteria, array $orderBy = null)
 * @method Word[]    findAll()
 * @method Word[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class WordRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Word::class);
    }

    public function findAllOrderBy(string $orderByWhat, string $ascOrDesc)
    {
        return $this->findBy([], [$orderByWhat => $ascOrDesc]);
    }

    public function createWordListQueryBuilder(): QueryBuilder
    {
        return $this->createQueryBuilder('w')
            ->orderBy('w.name', 'ASC');
    }
}
