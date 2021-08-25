<?php

namespace App\Entity;

use App\Repository\MeaningNameRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MeaningNameRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class MeaningName
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
     * @ORM\ManyToMany(targetEntity=Meaning::class, inversedBy="meaningNames")
     * * @ORM\JoinColumn(onDelete="CASCADE")
     */
    private $meaning;

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
        $this->meaning = new ArrayCollection();
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
    public function getMeaning(): Collection
    {
        return $this->meaning;
    }

    public function addMeaning(Meaning $meaning): self
    {
        if (!$this->meaning->contains($meaning)) {
            $this->meaning[] = $meaning;
        }

        return $this;
    }

    public function removeMeaning(Meaning $meaning): self
    {
        $this->meaning->removeElement($meaning);

        return $this;
    }

    public function getModifiedAt(): ?\DateTimeImmutable
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
        $this->modifiedAt = new \DateTimeImmutable();

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
