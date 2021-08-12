<?php

namespace App\Service;

use Symfony\Component\DependencyInjection\ParameterBag\ContainerBagInterface;

class DataFileReader
{
    private $params;

    public function __construct(ContainerBagInterface $params)
    {
        $this->params = $params;
    }

    public function saveData(string $filename, $data)
    {
        file_put_contents($this->params->get('data_dir').$filename, $data);
    }

    public function readData(string $filename)
    {
        return file_get_contents($this->params->get('data_dir').$filename);
    }
}