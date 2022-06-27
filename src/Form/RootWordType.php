<?php

namespace App\Form;

use App\Entity\RootWord;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RootWordType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'label' => ' ',
                'attr'  => ['class' => 'admin-root-word-input']
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Zapisz',
                'attr'  => ['class' => 'admin-root-word-submit-btn btn btn-mediumpurple']
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
                                   'data_class' => RootWord::class,
                               ]);
    }
}
