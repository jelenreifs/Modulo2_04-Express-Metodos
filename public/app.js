
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