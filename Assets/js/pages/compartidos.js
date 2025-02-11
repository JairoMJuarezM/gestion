const compartidos = document.querySelectorAll('.compartidos');

document.addEventListener('DOMContentLoaded', function () {
    compartidos.forEach(row => {
        row.addEventListener('click', function (e) {
            let id_detalle = this.getAttribute('id');
            verDetalle(id_detalle);
        })
    });
})

function verDetalle(id_detalle) {
    const http = new XMLHttpRequest();
    const url = base_url + 'compartidos/verDetalle/' + id_detalle;
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
           // const res = JSON.parse(this.responseText);
        }

    };
}