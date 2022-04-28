const express = require("express");
const ExplorerService = require("./lib/services/ExplorerService.js");
const Reader = require("./lib/utils/Reader.js");

const explorers = Reader.readJsonFile("explorers.json");


const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("hola");
});

app.get("/v1/explorers/:mission", (req, res) => {
    res.send({explorers: ExplorerService.filterByMission(explorers, req.params.mission)});
});
app.get("/v1/explorers/amount/:mission", (req, res) => {
    const amount = ExplorerService.getAmountOfExplorersByMission(explorers, req.params.mission);
    res.status(200).send({amount: amount});

});
app.get("/v1/explorers/usernames/:mission", (req, res) => {
    res.send({usernames: ExplorerService.getExplorersUsernamesByMission(explorers, req.params.mission)});
});

//mostrar en navegador errores 
app.use((err,req,res,next)=>{

    console.log(err);

    res.status(500).json({
        error : {
            message : err.message
        }
    });
    
});

app.listen(port, ()=>{
    console.log("server listo");
});





















// const explorersByMission = ExplorerService.filterByMission(explorers, "node");
// console.log('explorers by mission ---->', explorersByMission)

// const amountOfExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
// console.log('amount of explorers by mission ---->', amountOfExplorersByMission)

// const explorersUsernamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node")
// console.log('explorers usernames by mission ---->', explorersUsernamesByMission)

// // Part7: Get a new list of explorers in Node, if the score number is divisible by 3 
// // AND by 5 we need to set a new property called FIZZBUZZ, if not this value should be
// // the same score value
// const explorersValidated = FizzbuzzService.applyValidationInExplorer(explorers, "node");
// console.log('explorers validated ---->>>', explorersValidated)

