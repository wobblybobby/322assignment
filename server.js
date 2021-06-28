// Import express
const express = require('express');
// Import express-handlebars
const exphbs  = require('express-handlebars');
// Import Router
const generalController = require("./controllers/GeneralController.js");
const userController = require("./controllers/UserController.js");
// Create express app object
const app = express();
// Tells express which template engine to use
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
// Tells express about Static files
app.use(express.static("public"));
// Tells express to use the controller
app.use("/", generalController);
app.use("/users", userController);  
// localhost:3000 - listening to port 3000
/* const PORT = 3000; */
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Web Server application is up and running on port ${PORT}`)
});