<?php

namespace App\Controller;

use App\Entity\Meaning;
use App\Entity\MeaningName;
use App\Entity\Word;
use App\Form\WordType;
use App\Repository\MeaningNameRepository;
use App\Repository\MeaningRepository;
use App\Repository\WordRepository;
use App\Service\Dictionary;
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
    private $speechSections;

    public function __construct(Environment $twig, EntityManagerInterface $em, Dictionary $speechSections)
    {
        $this->twig = $twig;
        $this->em = $em;
        $this->speechSections = $speechSections;
    }

    #[Route('/', name: 'admin')]
    public function index(): Response
    {
        return $this->render('admin/index.html.twig', [
            'controller_name' => 'AdminController',
        ]);
    }

    #[Route('/show', name: 'admin_show_words')]
    public function show(WordRepository $wordRepository): Response{

        return new Response( $this->twig->render('admin/show.html.twig',
            ['words' => $wordRepository->findAllOrderBy('name','asc')]
        ));
    }

    #[Route('/addword', name: 'addword')]
    public function addWord(Request $request, MeaningNameRepository $meaningNameRepository): Response
    {
        $word = new Word();
        $form = $this->createForm(WordType::class, $word);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid())
        {
            $wordJson = json_decode($form['json']->getData(),true);
            $word->setJson("");
            $speechSections = $wordJson['speechSection'];
            foreach ($speechSections as $sp){
                $partOfSpeech = $sp['partOfSpeech'];
                $meanings = $sp['meanings'];
                foreach ($meanings as $m){
                    $meaning = new Meaning();
                    $meaning->setWord($word);
                    $meaningNames = explode(', ',$m['meaningName']);
                    $meaning->setName($m['meaningName']);
                    foreach($meaningNames as $mName)
                    {
                        $meaningName = $meaningNameRepository->findOneBy(['name'=>$mName]) ?? new MeaningName();
                        $meaningName->setName($mName);
                        $meaning->addMeaningName($meaningName);
                        $this->em->persist($meaningName);
                    }
                    $meaning->setPartOfSpeech($partOfSpeech);
                    $meaning->setExamples($m['examples']);
                    $meaning->setOrderValue(intval($m['order']));
                    $this->em->persist($meaning);
                }
            }
            $this->em->persist($word);
            $this->em->flush();
            $this->addFlash('success','Pomyślnie dodano wyrażenie');
            return $this->redirectToRoute('admin_show_words');
        }

        return $this->render('admin/addword.html.twig', [
            'form' => $form->createView(),
        ]);

    }
    #[Route('/editword/{name}', name: 'edit_word', options: ['expose'=>true])]
    public function editword(Request $request, Word $word, MeaningRepository $meaningRepository, MeaningNameRepository $meaningNameRepository): Response
    {

        $speechSections = $this->speechSections->getSpeechSections($word);

        $form = $this->createForm(WordType::class, $word);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid())
        {
            $wordJson = json_decode($form['json']->getData(),true);
            $word->setJson("");
            $speechSections = $wordJson['speechSection'];
            foreach ($speechSections as $sp){
                $partOfSpeech = $sp['partOfSpeech'];
                $meanings = $sp['meanings'];
                foreach ($meanings as $m){
                    $meaning = $meaningRepository->find($m['id']) ?? new Meaning();
                    $meaning->setWord($word);
                    $meaningNames = explode(', ',$m['meaningName']);
                    $meaning->setName($m['meaningName']);
                    $updatedMeaningNames = [];
                    foreach($meaningNames as $mName)
                    {
                        $meaningName = $meaningNameRepository->findOneBy(['name'=>$mName]) ?? new MeaningName();
                        $meaningName->setName($mName);
                        $meaning->addMeaningName($meaningName);
                        array_push($updatedMeaningNames, $meaningName);
                        $this->em->persist($meaningName);
                    }
                    $oldMeaningNames = $meaning->getMeaningNames()->getValues();
                    foreach ($oldMeaningNames as $oldMName)
                    {
                        if(!in_array($oldMName, $updatedMeaningNames))
                        {
                            $meaning->removeMeaningName($oldMName);
                            if(empty($oldMName->getMeaning()->getValues()))
                                $this->em->remove($oldMName);
                        }
                    }
                    $meaning->setPartOfSpeech($partOfSpeech);
                    $meaning->setExamples($m['examples']);
                    $meaning->setOrderValue(intval($m['order']));
                    $this->em->persist($meaning);
                }
            }
            $meaningsToDeleteId = $wordJson['toDeleteMeaningsId'];
            foreach ($meaningsToDeleteId as $mDelId){
                $meaning = $meaningRepository->find($mDelId);
                $this->em->remove($meaning);
            }
            $this->em->persist($word);
            $this->em->flush();
            $this->addFlash('success','Pomyślnie edytowano wyrażenie');
            return $this->redirectToRoute('admin_show_words');
        }

        return $this->render('admin/editword.html.twig', [
            'form' => $form->createView(),
            'word' => $word,
            'speechSections' => $speechSections
        ]);
    }
    #[Route('/delete/{name}', name: 'delete_word', options: ['expose'=>true])]
    public function delete(Word $word): Response{
        $meanings = $word->getMeanings();
        foreach($meanings as $meaning)
        {
            $meaningNames =  $meaning->getMeaningNames();
            foreach ($meaningNames as $mName)
            {
                $meaning->removeMeaningName($mName);
                dump($mName->getMeaning()->getValues());
                if(empty($mName->getMeaning()->getValues()))
                    $this->em->remove($mName);
            }
        }
        $word->getMeanings()->clear();

        $this->em->remove($word);
        $this->em->flush();
        $this->addFlash('success','Pomyślnie usunięto wyrażenie');

        return $this->redirectToRoute('admin_show_words');

    }
    #[Route('/preview/{name}', name: 'preview_word', options: ['expose'=>true])]
    public function preview(Word $word): Response
    {
        $speechSections = $this->speechSections->getSpeechSections($word);
        dump($speechSections);

        return new Response( $this->twig->render('admin/preview.html.twig', [
            'word' => $word,
            'speechSections' => $speechSections
        ]));
    }
}
