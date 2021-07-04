<?php

namespace App\Controller;

use App\Entity\Meaning;
use App\Entity\Word;
use App\Form\MeaningType;
use App\Form\WordType;
use App\Repository\WordRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;

#[Route('/admin')]
class AdminController extends AbstractController
{
    private $em;
    private $twig;

    public function __construct(Environment $twig, EntityManagerInterface $em){
        $this->twig = $twig;
        $this->em = $em;
    }

    #[Route('/', name: 'admin')]
    public function index(): Response
    {
        return $this->render('admin/index.html.twig', [
            'controller_name' => 'AdminController',
        ]);
    }

    #[Route('/show', name: 'admin_show')]
    public function show(WordRepository $wordRepository): Response{

        return new Response( $this->twig->render('admin/show.html.twig',
            ['words' => $wordRepository->findAllOrderBy('name','asc')]
        ));
    }

    #[Route('/addword', name: 'addword')]
    public function addWord(Request $request): Response
    {
        $em = $this->getDoctrine()->getManager();
        $word = new Word();
        $form = $this->createForm(WordType::class, $word);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid())
        {
            $wordJson = json_decode($form['json']->getData(),true);
            dump($word);
            dump($wordJson);
            dump($wordJson['speechSection'][0]);
            $word->setJson("");
            $speechSections = $wordJson['speechSection'];
            foreach ($speechSections as $sp){
                $partOfSpeech = $sp['partOfSpeech'];
                $meanings = $sp['meanings'];
                foreach ($meanings as $m){
                    $meaning = new Meaning();
                    $meaning->setWord($word);
                    $meaning->setName($m['meaningName']);
                    $meaning->setPartOfSpeech($partOfSpeech);
                    $meaning->setExamples($m['examples']);
                    dump($meaning);
                    $em->persist($meaning);
                }
            }
            $em->persist($word);
            $em->flush();
            return $this->redirectToRoute('admin');
        }

        return $this->render('admin/addword.html.twig', [
            'form' => $form->createView(),
        ]);

    }
    #[Route('/editword/{name}', name: 'editword')]
    public function editword(Request $request, Word $word): Response
    {

        $speechSections = $word->getSpeechSections();
        dump($speechSections);

        $form = $this->createForm(WordType::class, $word);
        $form->handleRequest($request);
        $em = $this->getDoctrine()->getManager();
//        if($form->isSubmitted() && $form->isValid())
//        {
//
//        }

        return $this->render('admin/editword.html.twig', [
            'form' => $form->createView(),
            'word' => $word,
            'speechSections' => $speechSections
        ]);
    }

    #[Route('/preview/{name}', name: 'preview')]
    public function preview(Word $word): Response
    {
        $speechSections = $word->getSpeechSections();


        return new Response( $this->twig->render('admin/preview.html.twig', [
            'word' => $word,
            'speechSections' => $speechSections
        ]));
    }
}
