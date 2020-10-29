
 fetch('/personas')
            .then(response => response.json())
            .then( data => {
                let persona = "";
                data.forEach(e => {
                    persona += `
                    <h3>${e.nombre} ${e.apellido}</h3>
                    <p>Edad: ${e.edad}</p>
                    <button onclick="editar()">EDITAR</button>
                    </br></br>
                    <div class="formularioEditar oculto">
                        <input id="nombre" type="text" placeholder="nombre" />
                        <input id="apellido" type="text" placeholder="apellido" />
                        <input id="edad" type="text" placeholder="edad" />
                        <button onclick="actualizarDatos()">ACTUALIZAR DATOS</button>
                    </div>
                    `;
            });
                document.getElementById('result').innerHTML = persona;
        });

  let persona = "";

function editar() {
    let formularioEditar = document.querySelector(".formularioEditar");
    console.log(formularioEditar);
    formularioEditar.classList.toggle("visible");
}

  
function actualizarDatos() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
     

  let persona = {
        nombre,
        apellido,
        edad
    }

    let i;
 
    fetch('/personas', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(persona)
        })
            .then(response => response.json())
        .then(data => {
            data.persona = persona
           
       /*      for (let i = 0; i < data.length; i++) {
                 data[i].nombre = nombre;
                 data[i].apellido = apellido;
                 data[i].edad = edad; 
            } */
              persona += `
                    <h3>${nombre} ${apellido}</h3>
                    <p>Edad: ${edad}</p>
                    <button onclick="editar()">EDITAR</button>
            `;
            });
                document.getElementById('result').innerHTML = persona;
   

    }
