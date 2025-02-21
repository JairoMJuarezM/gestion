document.addEventListener('DOMContentLoaded', function(){
    $('#tblDetalle').DataTable({
        ajax: {
            url: base_url + 'archivos/verDetalle/' + id_carpeta,
            dataSrc: ''
        },
        columns: [
            { data: 'acciones' },
            { data: 'correo' },
            { data: 'nombre' }
            
        ],
        language: {
            url: 'https://cdn.datatables.net/plug-ins/2.2.1/i18n/es-ES.json',
        },
        responsive: true, 
        "scrollY": "200px",
        destroy: true,
        order: [[1, 'desc']]
    });
})