const ExplorerService = require("../../lib/services/ExplorerService");
const FizzbuzzService = require("../../lib/services/FizzbuzzService");
const Reader = require("../../lib/utils/Reader");

const explorers = Reader.readJsonFile("explorers.json");

class ExplorerController{
    static getExplorersByMission(mission){
        return {explorers: ExplorerService.filterByMission(explorers, mission)};
    }
    static getAmountOfExplorersByMission(mission){
        return  {amount: ExplorerService.getAmountOfExplorersByMission(explorers, mission)};
    }
    static getExplorersUsernamesByMission(mission){
        return {usernames: ExplorerService.getExplorersUsernamesByMission(explorers, mission)}
    }
}


module.exports = ExplorerController