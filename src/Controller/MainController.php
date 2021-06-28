<?php

namespace App\Controller;

use App\Entity\PartOfSpeech;
use App\Entity\Word;
use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    #[Route('/', name: 'main')]
    public function index(): Response
    {
        $content = [
            0=>[
            'name' => 'lock',
            'partOfSpeech' => 'rzeczownik',
            'meanings' => [
                0 => [
                    'name'=>'zamykać',
                    'sentences'=>[
                        0 => 'Did you lock the door?',
                        1 => 'Shall I lock up after you?'
                    ]
                ],
                1 => [
                    'name'=>'zamykać się',
                    'sentences'=>[
                        0 => "He locked himself in a hotel room and wouldn't let anybody in."
                    ]
                ],
                2 => [
                    'name'=>'chować (w bezpiecznym miejscu)',
                    'sentences'=>[
                        0 => "He locked the dog in his room.",
                        1 => "I locked my diary in a drawer.",
                        2 => "I have to lock my jewellery in my boxes."
                    ]
                ]

            ]
                ]
        ];
//        $json = json_encode($content);
//        file_put_contents("json_word.txt",$json);
        $em = $this->getDoctrine()->getManager();
        $word = $this->getDoctrine()->getRepository(Word::class)->findOneBy(['name'=>$content[0]['name']]) ?? new Word();

        dump($content);
//        $word->setName($content[0]['name']);
//        $word->setJson($content);
//        $em->persist($word);
//        $em->flush();


        return $this->render('index.html.twig',['content' => $content]);
    }
}
