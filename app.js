const express = require('express');
const app = express();
require('dotenv').config();
const Port = process.env.PORT || 8080;
const hbs = require('hbs');
const mysql = require('mysql2');
const path = require('path');

//Conectamos la app a una Base de Datos
/* const conexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORTDB,
    database: process.env.DATABASE,
});

//Conectamos la DB
const conectar = (conexion.connect((error) => {
        if (error) throw error;
        console.log('Base de Datos Conectada!!');
    })
);
 */


// Configuración de Middelwares
app.use(express.json());
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));
//Configuramos la Vista de la Aplicación
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));


//Variables de la rutas

const generoRouter = require('./routes/generoRoutes');
var indexRouter = require('./routes/index');

/* 
app.get('/', (req, res) => {
    res.send(`Este es nuestro TP`)
}); */

app.use('/', indexRouter);

app.use('/generoRoutes', generoRouter);

app.listen(Port, ()=>{
    console.log(`Servidor corriendo en el Puerto ${Port}`);
});
app.on('error', (error) =>{
    console.log(`Tenemos un error ${error}`);
});

