const btnUpload = document.querySelector('#btnUpload');
const btnNuevaCarpeta = document.querySelector("#btnNuevaCarpeta");
const modalFile = document.querySelector("#modalFile");
const myModal = new bootstrap.Modal(modalFile);

const modalCarpeta = document.querySelector("#modalCarpeta");
const myModal1 = new bootstrap.Modal(modalCarpeta);
const frmCaperta = document.querySelector('#frmCaperta');

document.addEventListener('DOMContentLoaded', function(){
    btnUpload.addEventListener('click', function(){
        myModal.show();
    })

    btnNuevaCarpeta.addEventListener('click', function(){
        myModal.hide();
        myModal1.show();
    })

    frmCaperta.addEventListener('submit', function(e){
        e.preventDefault();
        if (frmCaperta.nombre.value == '') {
            alertaPersonalizada('warning', 'El NOMBRE ES REQUERIDO')
        } else {
            const data = new FormData(frmCaperta);
            const http = new XMLHttpRequest();
            const url = base_url + 'admin/crearcarpeta';
            http.open("POST", url, true);
            http.send(data);
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                    //const res = JSON.parse(this.responseText);
                    //alertaPersonalizada(res.tipo, res.mensaje)
                    //if (res.tipo == 'success') {
                        // frm.reset();
                        // myModal.hide();
                    //}
                }

            };
        }
    })
})