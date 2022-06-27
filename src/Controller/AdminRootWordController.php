<?php

namespace App\Controller;

use App\Entity\RootWord;
use App\Form\RootWordType;
use App\Repository\RootWordRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;

#[Route('/admin/rootword')]
class AdminRootWordController extends AbstractController
{
    private $twig;
    private $em;

    public function __construct(Environment $twig, EntityManagerInterface $em)
    {
        $this->twig = $twig;
        $this->em = $em;
    }

    #[Route('/', name: 'admin_root_word_show')]
    public function show(RootWordRepository $rootWordRepository): Response
    {
        return new Response(
            $this->twig->render('admin_root_word/show.html.twig', [
                                                                    'rootWords' => $rootWordRepository->findAllOrderBy(
                                                                        'name',
                                                                        'asc'
                                                                    )
                                                                ]
            )
        );
    }

    #[Route('/add', name: 'admin_root_word_add', options: ['expose' => true])]
    public function add(Request $request)
    {
        $rootWord = new RootWord();
        if ($name = $request->query->get('name')) {
            $rootWord->setName($name);
            $this->em->persist($rootWord);
            $this->em->flush();
            $this->addFlash(
                'success',
                'Pomyślnie dodano podstawę słowotwórczą'
            );
            return $this->json('true');
        } else {
            $form = $this->createForm(RootWordType::class, $rootWord);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->em->persist($rootWord);
                $this->em->flush();
                $this->addFlash(
                    'success',
                    'Pomyślnie dodano podstawę słowotwórczą'
                );
                return $this->redirectToRoute('admin_root_word_show');
            }
            return new Response(
                $this->twig->render('admin_root_word/add.html.twig', [
                    'form' => $form->createView()
                ])
            );
        }
    }

    #[Route('/edit/{name}', name: 'admin_root_word_edit', options: ['expose' => true])]
    public function edit(Request $request, RootWord $rootWord)
    {
        $form = $this->createForm(RootWordType::class, $rootWord);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($rootWord);
            $this->em->flush();
            $this->addFlash(
                'success',
                'Pomyślnie zmieniono podstawę słowotwórczą'
            );
            return $this->redirectToRoute('admin_root_word_show');
        }
        return new Response(
            $this->twig->render('admin_root_word/add.html.twig', [
                'form' => $form->createView()
            ])
        );
    }

    #[Route('/delete/{name}', name: 'admin_root_word_delete', options: ['expose' => true])]
    public function delete(RootWord $rootWord)
    {
        $words = $rootWord->getWords();
        foreach ($words as $word) {
            $word->setRootWord(null);
        }

        $this->em->remove($rootWord);
        $this->em->flush();
        $this->addFlash('success', 'Pomyślnie usunięto podstawę słowotwórczą');

        return $this->redirectToRoute('admin_root_word_show');
    }

    #[Route('/checkexist', name: 'root_word_checkexist', options: ['expose' => true])]
    public function checkexist(RootWordRepository $rootWordRepository)
    {
        $rootWordName = $_GET['name'];
        $rootWord = $rootWordRepository->findOneBy(['name' => $rootWordName]) ??
            null;
        $rootWordExists = $rootWord ? true : false;
        return $this->json($rootWordExists);
    }


}
