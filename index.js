const express = require("express");

const app = express();

app.use(express.static("public"));

app.use(express.json());

let personas = [
        {
            nombre : "Elisa",
            apellido : "Fernandez",
            edad : 23
        },
        {
            nombre : "June",
            apellido : "Albisua",
            edad : 27
        },
        {
            nombre : "Koldo",
            apellido : "Lete",
            edad : 18
        },
        {
            nombre : "Miren ",
            apellido : "Elizondo",
            edad : 39
        }
    ]


app.get('/personas', function (req, res) {
    res.send(personas)  
})

app.post('/personas', function (req, res) {
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let edad = req.body.edad;

    let persona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    };
    
    personas.push(persona);

    res.send(personas)  
})


app.listen(3000, function() {
  console.log('Escuchando puerto 3000');
});


