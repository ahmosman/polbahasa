<?php

namespace App\Repository;

use App\Entity\RootWord;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RootWord|null find($id, $lockMode = null, $lockVersion = null)
 * @method RootWord|null findOneBy(array $criteria, array $orderBy = null)
 * @method RootWord[]    findAll()
 * @method RootWord[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RootWordRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RootWord::class);
    }

    public function findAllOrderBy( string $orderByWhat, string $ascOrDesc){
        return $this->findBy([],[$orderByWhat => $ascOrDesc]);
    }
}
