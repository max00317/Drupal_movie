<?php

namespace Drupal\parid\Controller;

class ParidController
{
  public function paridhello()
  {
    $title = array('#title' => 'this is parid title', '#markup' => 'this is parid title head');
    return $title;
  }
}