<?php
class Admin extends Controller
{
    public function __construct()
    {
        parent::__construct();
        session_start();
    }
    public function index()
    {
        $data ['title'] = 'Panel de administración';
        $data ['script'] = 'files.js';
        $this->views->getView('admin', 'home', $data);
    }

   public function crearcarpeta() 
   {
    print_r($_POST);
    exit;
    $nombre = $_POST['nombre'];
   }
}
