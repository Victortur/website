window.onload = () => {
    let lista = document.querySelector("#usuarios");
    let obtenerParam = (url) => {
        let urlParam = String(url.match(/\?+.+/));
        urlParam = urlParam.replace("?id=", "");
        return urlParam;
    }

    let param = obtenerParam(document.URL);

    fetch('assets/data/main.json')
        .then(res => res.json())
        .then(data => {

            let project = data.filter((proj) => {
                return proj.Id == param;
            });
            let images = [project[0].imagenes.slice(0, 62), project[0].imagenes.slice(64, 126)]

            let estructura = `
            <section>
            <div class="posicion_poster">
                <img class="poster" src="img/poster.svg" alt="titulo_poster">
            </div>
        </section>
    
        <section class="det">
            <article>
                <div class="ordendet1">
                    <img class="fotodet" src="${images[0]}" alt="fotodelproyecto">
                    <div>
                        <h1 class="titulodet">${project[0].titulo}</h1>
                        <h5 class="subtitulodet">${project[0].subtitulo}</h5>
                        <h3 class="nombreestudet">${project[0].nombre_estudiante}</h3>
                    </div>
                </div>
    
                <div>
                    <div class="ordendet2">
                        <div class="detdesc">${project[0].descripcion}</div>
                        <div class="ordendet3">
                            <h3 class="detgmail">${project[0].especialidad}</h3>
                            <div class="curso">
                                <h3 class="detgmail1">${project[0].asignatura}</h3>
                                <h2 class="detgmail1">${project[0].curso}</h2>
                            </div>
                        </div>
                    </div>
                    <section class="info">
                        <h5 class="clave">${project[0].palabras_clave}</h5>
                        <h3>${project[0].redes_estudiante}</h3>
                        <h3>${project[0].correo_estudiante}</h3>
                    </section>
                </div>
    
            </article>
    
        </section>
                `;
            document.body.innerHTML = estructura;
        })
}




