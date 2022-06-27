<?php

namespace App\Entity;

use App\Repository\MeaningRepository;
use App\Repository\WordRepository;
use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\Criteria;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=WordRepository::class)
 * @ORM\HasLifecycleCallbacks()
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
     * @ORM\OneToMany(targetEntity=Meaning::class, mappedBy="word")
     */
    private $meanings;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $json;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $partsOfSpeechOrder;

    /**
     * @ORM\ManyToOne(targetEntity=RootWord::class, inversedBy="words")
     */
    private $rootWord;

    /**
     * @ORM\Column(type="datetime_immutable", nullable=true)
     */
    private $modifiedAt;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $modifiedBy;

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

    public function getJson(): ?string
    {
        return $this->json;
    }

    public function setJson(?string $json): self
    {
        $this->json = $json;

        return $this;
    }

    public function getPartsOfSpeechOrder(): ?string
    {
        return $this->partsOfSpeechOrder;
    }

    public function setPartsOfSpeechOrder(?string $partsOfSpeechOrder): self
    {
        $this->partsOfSpeechOrder = $partsOfSpeechOrder;

        return $this;
    }

    public function getRootWord(): ?RootWord
    {
        return $this->rootWord;
    }

    public function setRootWord(?RootWord $rootWord): self
    {
        $this->rootWord = $rootWord;

        return $this;
    }

    public function getModifiedAt(): ?DateTimeImmutable
    {
        return $this->modifiedAt;
    }

    /**
     * @ORM\PrePersist
     * @ORM\PreUpdate
     * @return $this
     */
    public function setModifiedAt(): self
    {
        $this->modifiedAt = new DateTimeImmutable();

        return $this;
    }

    public function getModifiedBy(): ?string
    {
        return $this->modifiedBy;
    }

    public function setModifiedBy(?string $modifiedBy): self
    {
        $this->modifiedBy = $modifiedBy;

        return $this;
    }
}
