<?php include_once 'Views/template/header.php'; ?>

<div class="card">
    <div class="card-body">
        <input type="text" id="id_carpeta" value="<?php echo $data['id_carpeta']; ?>">
        <div class="table-responsive">
            <table class="table table-striped table-hover display nowrap" style="width:100%" id="tblDetalle">
                <thead>
                    <tr>
                        <th></th>
                        <th>Usuario</th>
                        <th>Archivo</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
</div>

<?php include_once 'Views/template/footer.php'; ?>