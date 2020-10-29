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

let persona = {
    nombre : req.body.nombre,
    apellido : req.body.apellido,
    edad : req.body.edad
};
    
    personas.push(persona);
    res.send(personas)  
})


app.put('/personas', function (req, res) {
    let boolean = false;

    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let edad = req.body.edad;


   let persona = {
            nombre: nombre,
            apellido: apellido,
            edad: edad
    };
    
    
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].nombre === nombre) {
            persona.nombre = nombre;
            persona.apellido = apellido;
            persona.edad = edad;

        /*     persona = 
                `<h3>${personas[i].nombre} ${personas[i].apellido}</h3>
                <p>${personas[i].edad}</p>` */
        
           boolean = true; 
            console.log("Hola caracola");
            console.log(persona);
        }  
    }

    boolean ? res.send(persona) : res.send("No existe persona");      
});


app.listen(3000, function() {
  console.log('Escuchando puerto 3000');
});


