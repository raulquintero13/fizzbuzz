const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const res = require("express/lib/response");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});
app.get("/v1/explorers/:mission", (req, res) => {
    res.status(200).send(ExplorerController.getExplorersByMission(req.params.mission));
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    res.status(200).send(ExplorerController.getAmountOfExplorersByMission(req.params.mission));

});
app.get("/v1/explorers/usernames/:mission", (req, res) => {
    res.status(200).send( ExplorerController.getExplorersUsernamesByMission(req.params.mission));
});
app.get("/v1/fizzbuzz/:score",(req, res) => {
    res.status(200).send(ExplorerController.applyValidationInNumber(req.params.score))
})

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});