<?php

namespace App\Entity;

use App\Repository\MeaningRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MeaningRepository::class)
 */
class Meaning
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $examples = [];

    /**
     * @ORM\ManyToOne(targetEntity=Word::class, inversedBy="meanings")
     * @ORM\JoinColumn(onDelete="CASCADE")
     */
    private $word;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $partOfSpeech;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $orderValue;

    /**
     * @ORM\ManyToMany(targetEntity=MeaningName::class, mappedBy="meaning")
     */
    private $meaningNames;

    public function __construct()
    {
        $this->meaningNames = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getExamples(): ?array
    {
        return $this->examples;
    }

    public function setExamples(?array $examples): self
    {
        $this->examples = $examples;

        return $this;
    }

    public function getWord(): ?Word
    {
        return $this->word;
    }

    public function setWord(?Word $word): self
    {
        $this->word = $word;

        return $this;
    }

    public function getPartOfSpeech(): ?string
    {
        return $this->partOfSpeech;
    }

    public function setPartOfSpeech(?string $partOfSpeech): self
    {
        $this->partOfSpeech = $partOfSpeech;

        return $this;
    }

    public function getOrderValue(): ?int
    {
        return $this->orderValue;
    }

    public function setOrderValue(?int $orderValue): self
    {
        $this->orderValue = $orderValue;

        return $this;
    }

    /**
     * @return Collection|MeaningName[]
     */
    public function getMeaningNames(): Collection
    {
        return $this->meaningNames;
    }

    public function addMeaningName(MeaningName $meaningName): self
    {
        if (!$this->meaningNames->contains($meaningName)) {
            $this->meaningNames[] = $meaningName;
            $meaningName->addMeaning($this);
        }

        return $this;
    }

    public function removeMeaningName(MeaningName $meaningName): self
    {
        if ($this->meaningNames->removeElement($meaningName)) {
            $meaningName->removeMeaning($this);
        }

        return $this;
    }
}
