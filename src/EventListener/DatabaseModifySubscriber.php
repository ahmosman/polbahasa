<?php

namespace App\EventListener;

use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Events;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Symfony\Component\Security\Core\Security;

class DatabaseModifySubscriber implements EventSubscriber
{

    private Security $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    public function getSubscribedEvents()
    {
        return [
          Events::preUpdate,
          Events::prePersist
        ];
    }

    public function preUpdate(LifecycleEventArgs $args)
    {
        $this->setModifiedByAction($args);
    }

    public function prePersist(LifecycleEventArgs $args)
    {
        $this->setModifiedByAction($args);
    }

    private function setModifiedByAction(LifecycleEventArgs $args)
    {
        $entity = $args->getObject();

        if(method_exists($entity, 'setModifiedBy'))
        {
            $entity->setModifiedBy($this->security->getUser()->getUserIdentifier());
        }
    }

}