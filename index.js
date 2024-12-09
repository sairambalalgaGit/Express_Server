const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const users = [{
    name : "john",
    kidneys : [{
        healthy : false
    }]
}];

app.get("/", (req, res) => {
   const johnKidneys = users[0].kidneys;
   const numberOfKidneys = johnKidneys.length;
   const healthyKid = 0;

   for(let i = 0; i < johnKidneys; i++){
        if(johnKidneys[i].healthy){
            healthyKid = healthyKkkid + 1;
        }
   }

   const unHealthy = numberOfKidneys - healthyKid;
   
   res.json({
        johnKidneys,
        healthyKid,
        unHealthy
   });
});


app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })

    res.json({
        msg : "Done!"
    })
});

app.put("/", (req, res) => {
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }

    res.json({});
});

app.delete("/", (req, res) => {

    const newKidneys = [];
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(users[0].kidneys.healthy){
            newKidneys.push({
                healthy : true
            });
        }
    }

    users[0].kidneys = newKidneys;
    res.json({
        msg : "completed"
    });
});

app.listen("3000", function(){
    console.log("server started at port 3000");
});