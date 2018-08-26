const  express = require('express');
const bodyParser = require("body-parser");
const app = express();
const route = require("./src/routers/");
const mongoose = require('mongoose');
const cors = require('cors');
const confi = require('./config');

let port = process.env.PORT || 3000;


let db = `mongodb://${confi.DB_USER}:${confi.DB_PASS}@ds125932.mlab.com:25932/fichacliente`;

mongoose.connect(db,
 { useNewUrlParser: true },
 function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});



app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "300kb" }));
app.use(express.static(__dirname + '/public'));

app.use(route);



app.listen( port , () => console.log(`Servidor Corriendo en http://localhost:${port}`) );
