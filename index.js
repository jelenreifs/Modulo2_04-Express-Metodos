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
    let nombre = req.body.nombre
    let apellido = req.body.apellido
    let edad = req.body.edad

  let persona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }




    for (let i = 0; i < personas.length; i++) {
        if (personas[i].nombre === nombre) {
            personas[i].apellido = apellido
            personas[i].edad = edad 

            let mensaje = {
                mensaje: `${personas[i].nombre} ha sido modificado`
               
            }; 
            res.send(persona) 
            console.log(persona)
            
            
        }        
    }
});


app.delete('/personas', function (req, res) {
    let nombre = req.body.nombre

    for (let i = 0; i < personas.length; i++) {
        if (personas[i].nombre === nombre) {
            console.log(personas[i]);

            let mensaje = {
                mensaje: `${personas[i].nombre} ha sido eliminada`
            };
            res.send(mensaje)
            personas.splice(i, 1);
        }        
    }
});


app.listen(3000, function() {
  console.log('Escuchando puerto 3000');
});


