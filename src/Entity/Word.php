<?php

namespace App\Entity;

use App\Repository\WordRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=WordRepository::class)
 */
class Word
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity=Meaning::class, mappedBy="Word")
     */
    private $meanings;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $meaningsJson = [];

    public function __construct()
    {
        $this->meanings = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Meaning[]
     */
    public function getMeanings(): Collection
    {
        return $this->meanings;
    }

    public function addMeaning(Meaning $meaning): self
    {
        if (!$this->meanings->contains($meaning)) {
            $this->meanings[] = $meaning;
            $meaning->setWord($this);
        }

        return $this;
    }

    public function removeMeaning(Meaning $meaning): self
    {
        if ($this->meanings->removeElement($meaning)) {
            // set the owning side to null (unless already changed)
            if ($meaning->getWord() === $this) {
                $meaning->setWord(null);
            }
        }

        return $this;
    }


    public function getMeaningsJson(): ?array
    {
        return $this->meaningsJson;
    }

    public function setMeaningsJson(?array $meaningsJson): self
    {
        $this->meaningsJson = $meaningsJson;

        return $this;
    }

}
