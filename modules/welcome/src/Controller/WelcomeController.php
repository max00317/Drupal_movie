<?php

namespace Drupal\welcome\Controller;

class WelcomeController
{
  public function Welcome()
  {
    $element = array('#markup' => 'Welcome tutorial page content');
    return $element;
  }
}