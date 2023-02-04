const id = location.href.replace("http://localhost:8081/animal/", "");

fetch(`http://localhost:8081/animal/${id}`, { method: 'POST' })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const nombre = document.querySelector("#nombre");
        const propietario = document.querySelector("#propietario");
        const raza = document.querySelector("#raza");
        const genero = document.querySelector("#genero");
        const es_vacunado = document.querySelector("#es_vacunado");
        const es_esterilizado = document.querySelector("#es_esterilizado");
        const edad = document.querySelector("#edad");
        const ubicacion = document.querySelector("#ubicacion");
        const descripcion = document.querySelector("#descripcion");
        if (typeof data.msg !== 'undefined') {
            nombre.innerHTML = data.msg;
            return;
        }

        propietario.innerHTML = data.propietario;
        nombre.innerHTML = data.nombre;
        raza.innerHTML = data.raza;
        genero.innerHTML = data.genero === 'm' ? 'macho' : 'hembra';
        es_vacunado.innerHTML = data.es_vacunado === 0 ? 'no' : 'si';
        es_esterilizado.innerHTML = data.es_castrado === 0 ? 'no' : 'si';
        edad.innerHTML = data.edad;
        descripcion.innerHTML = data.descripcion;
    });