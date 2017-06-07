var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Hi there, welcome to my assignment!")
});

app.get("/speak/:animal", function(req, res) {
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "Meow",
        fish: "..."
    };
    var animal = req.params.animal;
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'"  );
})

app.get("/repeat/:word/:num", function(req, res) {
    var word = req.params.word;
    var num = Number(req.params.num);
    var opString = "";
    for(var i = 0; i < num; i++){
        opString += word + " ";
    }
    res.send(opString);
});
app.get("*", function(req,res){
    res.send("Sorry, page not found... what are you doing with your life");
});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started!!!")
});