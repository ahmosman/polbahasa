<?php

namespace App\Controller;

use App\Entity\Word;
use App\Form\WordType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
#[Route('/admin')]
class AdminController extends AbstractController
{

    #[Route('/', name: 'admin')]
    public function index(): Response
    {
        return $this->render('admin/index.html.twig', [
            'controller_name' => 'AdminController',
        ]);
    }
    #[Route('/addword', name: 'addword')]
    public function addWord(Request $request): Response
    {
        $word = new Word();
        $form = $this->createForm(WordType::class, $word);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid())
        {
            dump($form);die;
            return $this->redirectToRoute('admin');
        }
        return $this->render('admin/addword.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
