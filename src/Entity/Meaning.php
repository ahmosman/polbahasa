<?php

namespace App\Entity;

use App\Repository\MeaningsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MeaningsRepository::class)
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
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $examples = [];

    /**
     * @ORM\ManyToOne(targetEntity=Word::class, inversedBy="meanings")
     */
    private $word;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $partOfSpeech;

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
}
