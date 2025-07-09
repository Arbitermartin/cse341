const express =require('express');
const app =express();
require('./database/connection');
const bodyParser =require('body-parser')
const expressLayouts = require("express-ejs-layouts");
const static = require("./routes/static");

const controllerRoute =require("./controllers/controller");


/* ***********************
 * Routes
 *************************/
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout"); // not at views root
 

app.get("/",controllerRoute)
// bodyParser  added here.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// static folder
app.use(express.static('public'));
app.use(static);

// database
app.use(express.json());
app.use('/contacts', require('./routes/contacts'));



app.listen(process.env.PORT || 8080, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 8080));
});