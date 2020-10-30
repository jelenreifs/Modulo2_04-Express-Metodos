
 fetch('/personas')
  .then(response => response.json())
  .then( data => {
    let persona = "";
     data.forEach(element => {
        persona += `
          <h3>${element.nombre} ${element.apellido}</h3>
          <p>Edad: ${element.edad}</p>
          `;

 });
    document.getElementById('resultado').innerHTML = persona;
  });

 
function editPersona() {
    let nombre = document.getElementById("nombreEditar").value;
    let apellido = document.getElementById("apellidoEditar").value;
    let edad = parseInt(document.getElementById("edadEditar").value);


    let persona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }


    fetch('/personas', {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(persona)
    })
        .then(response => response.json())
        .then(data => {
    
            let person = "";
              person += `
                    <h3>${data.nombre} ${data.apellido}</h3>
                    <p>Edad: ${data.edad}</p>`;
            
                document.getElementById('resultado').innerHTML = person; 
        } 
        );
    } 


function enviarPersona() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = parseInt(document.getElementById("edad").value);
     

    let persona = {
            nombre,
            apellido,
            edad
    };
        fetch('/personas', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(persona)
        })
            .then(response => response.json())
            .then( data => {
                let persona = "";
                data.forEach(element => {
                    persona += `
                    <h3>${element.nombre} ${element.apellido}</h3>
                    <p>Edad: ${element.edad}</p>
                    `;
            });
                document.getElementById('resultado').innerHTML = persona;
        });
}


function eliminarPersona() {
    let nombre = document.getElementById("nombreEliminar").value;
    console.log(nombre);
   
    let persona = {
            nombre : nombre,       
    }

    fetch('/personas', {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(persona)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);

        let person = "";
        data.forEach(element => {
            person += `
            <h3>${element.nombre} ${element.apellido}</h3>
            <p>Edad: ${element.edad}</p>
            `;
            }
            );
            document.getElementById('resultado').innerHTML = person; 
        });
}