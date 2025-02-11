<?php
class Compartidos extends Controller
{
    private $id_usuario;
    public function __construct()
    {
        parent::__construct();
        session_start();
        $this->id_usuario = $_SESSION['id'];
    }
    public function index()
    {
        $data['title'] = 'Archivos compartidos';
        $data['script'] = 'compartidos.js';
        $data['archivos'] = $this->model->getArchivosCompartidos($this->id_usuario);
        $this->views->getView('admin', 'compartidos', $data);
    }

    public function verDetalle($id_detalle) {
        $data = $this->model->getDetalle($id_detalle);
        echo json_encode($data);
        die();
    }
}
