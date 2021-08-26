<?php

namespace App\Controller;

use App\Entity\Meaning;
use App\Entity\MeaningName;
use App\Entity\Word;
use App\Form\WordType;
use App\Repository\MeaningNameRepository;
use App\Repository\MeaningRepository;
use App\Repository\RootWordRepository;
use App\Repository\WordRepository;
use App\Service\DataFileReader;
use App\Service\Dictionary;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;

#[Route('/admin')]
#[IsGranted('ROLE_ADMIN')]
class AdminController extends AbstractController
{
    private $em;
    private $twig;
    private $dictionary;
    private $data;

    public function __construct(Environment $twig, EntityManagerInterface $em, Dictionary $dictionary, DataFileReader $data)
    {
        $this->twig = $twig;
        $this->em = $em;
        $this->dictionary = $dictionary;
        $this->data = $data;
    }

    #[Route('/', name: 'admin')]
    public function index(): Response
    {
        return $this->render('admin/index.html.twig', [
            'controller_name' => 'AdminController',
        ]);
    }

    #[Route('/show', name: 'admin_show_words')]
    public function show(WordRepository $wordRepository): Response
    {

        return new Response($this->twig->render('admin/show.html.twig',
            ['words' => $wordRepository->findAllOrderBy('name', 'asc')]
        ));
    }

    #[Route('/addword', name: 'addword')]
    public function addWord(Request $request, MeaningNameRepository $meaningNameRepository, RootWordRepository $rootWordRepository): Response
    {
        $word = new Word();
        $form = $this->createForm(WordType::class, $word);
        $form->handleRequest($request);
        $partsOfSpeechCsv = $this->data->readData('parts_of_speech.csv');

        if ($form->isSubmitted() && $form->isValid())
        {
            $wordJson = json_decode($form['json']->getData(), true);
            $speechSections = $wordJson['speechSection'];
            $jsonPartsOfSpeechCsv = $wordJson['partsOfSpeechCsv'];
            $rootWordJson = $wordJson['rootWord'];
            $rootWord = $rootWordRepository->findOneBy(['name' => $rootWordJson]) ?? null;
            $word->setRootWord($rootWord);
            $word->setJson(null);
            $word->setPartsOfSpeechOrder($wordJson['partsOfSpeechOrder']);
            $newMeaningNames = [];
            if($jsonPartsOfSpeechCsv !== $partsOfSpeechCsv)
                $this->data->saveData('parts_of_speech.csv', $jsonPartsOfSpeechCsv);
            foreach ($speechSections as $sp) {
                $partOfSpeech = $sp['partOfSpeech'];
                $meanings = $sp['meanings'];
                foreach ($meanings as $m) {
                    $meaning = new Meaning();
                    $meaning->setWord($word);
                    $meaningNames = preg_split("/,(?![^(]+\))/", $m['meaningName']);
                    foreach ($meaningNames as $mName) {
                        $mName = trim($mName);
                        if ($meaningName = $meaningNameRepository->findOneBy(['name' => $mName]))
                        {
                            $meaningName->setName($mName);
                            $meaning->addMeaningName($meaningName);
                        } elseif ($meaningName = $this->dictionary->getNotFlushedMeaningName($newMeaningNames, $mName))
                            $meaning->addMeaningName($meaningName);
                        else
                        {
                            $meaningName = new MeaningName();
                            $meaningName->setName($mName);
                            $meaning->addMeaningName($meaningName);
                            array_push($newMeaningNames, $meaningName);
                        }
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
            $this->addFlash('success', 'Pomyślnie dodano wyrażenie');
            return $this->redirectToRoute('admin_show_words');
        }

        return $this->render('admin/addword.html.twig', [
            'form' => $form->createView(),
            'partsOfSpeechCsv' => $partsOfSpeechCsv
        ]);

    }

    #[Route('/editword/{name}', name: 'edit_word', options: ['expose' => true])]
    public function editword(Request $request, Word $word, MeaningRepository $meaningRepository, MeaningNameRepository $meaningNameRepository, RootWordRepository $rootWordRepository): Response
    {

        $partsOfSpeechCsv = $this->data->readData('parts_of_speech.csv');

        $form = $this->createForm(WordType::class, $word);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid())
        {
            $wordJson = json_decode($form['json']->getData(), true);
            $speechSections = $wordJson['speechSection'];
            $meaningsToDeleteId = $wordJson['toDeleteMeaningsId'];
            $rootWordJson = $wordJson['rootWord'];
            $rootWord = $rootWordRepository->findOneBy(['name' => $rootWordJson]) ?? null;

            $word->setRootWord($rootWord);
            $word->setJson(null);
            $word->setPartsOfSpeechOrder($wordJson['partsOfSpeechOrder']);

            $meaningNamesToDelete = [];
            $newMeaningNames = [];
            $jsonPartsOfSpeechCsv = $wordJson['partsOfSpeechCsv'];
            if($jsonPartsOfSpeechCsv !== $partsOfSpeechCsv)
                $this->data->saveData('parts_of_speech.csv', $jsonPartsOfSpeechCsv);
            foreach ($meaningsToDeleteId as $mDelId)
            {
                $meaning = $meaningRepository->find($mDelId);
                if($meaning)
                {
                    $meaningNamesToDelete = array_merge($meaningNamesToDelete, $meaning->getMeaningNames()->getValues());
                    $this->em->remove($meaning);
                }
            }

            foreach ($speechSections as $sp)
            {
                $partOfSpeech = $sp['partOfSpeech'];
                $meanings = $sp['meanings'];
                foreach ($meanings as $m)
                {
                    $updatedMeaningNames = [];
                    $meaning = $meaningRepository->find($m['id']) ?? new Meaning();
                    $meaning->setWord($word);
                    $meaningNames = preg_split("/,(?![^(]+\))/", $m['meaningName']);
                    $oldMeaningNames = $meaning->getMeaningNames()->getValues();
                    foreach ($meaningNames as $mName)
                    {
                        $mName = trim($mName);
                        if ($meaningName = $meaningNameRepository->findOneBy(['name' => $mName]))
                        {
                            $meaningName->setName($mName);
                            $meaning->addMeaningName($meaningName);
                            array_push($updatedMeaningNames, $meaningName);
                        } elseif ($meaningName = $this->dictionary->getNotFlushedMeaningName($newMeaningNames, $mName))
                            $meaning->addMeaningName($meaningName);
                        else
                        {
                            $meaningName = new MeaningName();
                            $meaningName->setName($mName);
                            $meaning->addMeaningName($meaningName);
                            array_push($newMeaningNames, $meaningName);
                        }
                        $this->em->persist($meaningName);
                    }

                    foreach ($oldMeaningNames as $oldMName)
                    {
                        if (!in_array($oldMName, $updatedMeaningNames))
                        {
                            $meaning->removeMeaningName($oldMName);
                            if (empty($oldMName->getMeaning()->getValues()))
                                $this->em->remove($oldMName);
                        }
                    }
                    $meaning->setPartOfSpeech($partOfSpeech);
                    $meaning->setExamples($m['examples']);
                    $meaning->setOrderValue(intval($m['order']));
                    $this->em->persist($meaning);
                }
            }
            $this->em->persist($word);
            $this->em->flush();

            foreach ($meaningNamesToDelete as $mnDel)
            {
                if (empty($mnDel->getMeaning()->getValues()))
                    $this->em->remove($mnDel);
            }
            $this->em->flush();
            $this->addFlash('success', 'Pomyślnie edytowano wyrażenie');
            return $this->redirectToRoute('admin_show_words');
        }

        return $this->render('admin/editword.html.twig', [
            'form' => $form->createView(),
            'word' => $word,
            'speechSections' => $this->dictionary->getSpeechSections($word),
            'partsOfSpeechCsv' => $partsOfSpeechCsv
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
        return new Response( $this->twig->render('admin/preview.html.twig', [
            'word' => $word,
            'speechSections' => $this->dictionary->getSpeechSections($word)
        ]));
    }

    #[Route('/pos', name: 'admin_pos')]
    public function managePartsOfSpeech()
    {
        $partsOfSpeechCsv = $this->data->readData('parts_of_speech.csv');
        $newPartsOfSpeechCsv = $_GET['data'] ?? null;
        if($newPartsOfSpeechCsv)
        {
            if($newPartsOfSpeechCsv !== $partsOfSpeechCsv)
                $this->data->saveData('parts_of_speech.csv', $newPartsOfSpeechCsv);
            return $this->redirectToRoute('admin');
        }
        return new Response($this->twig->render('admin/pos_manage.html.twig',[
            'partsOfSpeechCsv' => $partsOfSpeechCsv
        ]));
    }

    #[Route('/filters', name: 'admin_filters')]
    public function managePronPrepFilter()
    {
        $pronPrepToFilterCsv = $this->data->readData('pron_prep_to_filter.csv');
        $newPronPrepToFilterCsv = $_GET['data'] ?? null;
        if($newPronPrepToFilterCsv)
        {
            if($newPronPrepToFilterCsv !== $pronPrepToFilterCsv)
                $this->data->saveData('pron_prep_to_filter.csv', $newPronPrepToFilterCsv);
            return $this->redirectToRoute('admin');
        }
        return new Response($this->twig->render('admin/filter_manage.html.twig',[
            'pronPrepToFilterCsv' => $pronPrepToFilterCsv
        ]));
    }

    #[Route('/checkexist', name: 'checkexist', options: ['expose'=>true])]
    public function wordCheckexist(WordRepository $wordRepository)
    {
        $wordName = $_GET['wordName'];
        $word = $wordRepository->findOneBy(['name' => $wordName]) ?? null;
        $wordExists = $word ? true : false;
        return $this->json($wordExists);
    }
}
