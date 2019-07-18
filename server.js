var express = require("express");
var app = express();
var PORT = process.env.PORT || 8082;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//getting the routing folder and files
require("./routing/appRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT,function(){
    console.log("Server Listing: "+PORT);
})
