<?php

namespace  Drupal\hello_world\Controller;

class HelloWorldController
{
  public function hello()
  {
    return array(
      '#title' => 'hello world', '#markup' => 'this is hello'
    );
  }
}