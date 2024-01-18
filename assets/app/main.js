
window.onload = () => {

    let lista = document.querySelector("#usuarios");


    let mostrarDetalle = (e) => {
        //console.log(e.currentTarget.closest(".shadow").id)
        window.open(`../detalle.html?id=${e.currentTarget.closest(".shadow").id}`, '_blank');
    }



    fetch('assets/data/main.json')
    .then(res => res.json())
    .then(data => {
        let projectNum = 0;
        data.forEach((project, index) => {
            if(project.titulo != undefined && project.imagenes != "" && project.imagenes != undefined ){
                let portada = project.imagenes.slice(0, 62);
                projectNum++;

                let item=` <article class="shadow" id="${project.Id}">
                <div class="imagen_articulo">
                    <img class="imagen_articulo" src="${portada}" alt="${project.desc_img1}">
                </div>
                <div class="info_articulo">
                    <h2 class="titulo_articulo">${project.titulo}</h2>
                    <h3 class="nombre"> ${project.nombre_estudiante}</h3>
                    <div class="descripción">${project.descripcion}</div>
                    <div class="detalles">
                        <button class="detalles">Ver Detalles</button>
                    </div>
                </div>
            </article>`;
                lista.innerHTML += item;
            }
        
       });
     })
     .then(()=>{
        let users = document.querySelectorAll(".detalles");
        users.forEach((user) => {
            user.addEventListener("click", mostrarDetalle, true)
        })
     });

}