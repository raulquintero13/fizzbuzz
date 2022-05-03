const ExplorerService = require("../../lib/services/ExplorerService");
const FizzbuzzService = require("../../lib/services/FizzbuzzService");
const Reader = require("../../lib/utils/Reader");

const explorers = Reader.readJsonFile("explorers.json");

class ExplorerController{
    static getExplorersByMission(mission){
        return ExplorerService.filterByMission(explorers, mission);
    }
    static getAmountOfExplorersByMission(mission){
        return  {mission: mission, quantity: ExplorerService.getAmountOfExplorersByMission(explorers, mission)};
    }
    static getExplorersUsernamesByMission(mission){
        return {mission: mission, explorers: ExplorerService.getExplorersUsernamesByMission(explorers, mission)};
    }
    static applyValidationInNumber(score){
        return {score: score, trick: FizzbuzzService.applyValidationInNumber(score)};
    }
    static getExplorersByStack(stack){
        return {stack: stack, explorers: ExplorerService.getExplorersByStack(explorers,stack)}
    }
    static applyFizzbuzz(number){
        return number + 5;
    }
    
}


module.exports = ExplorerController;