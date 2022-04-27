
class ExplorerService{

    static filterByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersAmount = explorers.filter((explorer) => explorer.mission == mission);
        return explorersAmount.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersUsernames = explorers.map((explorer) => explorer.githubUsername);
        return explorersUsernames;
    }
}




module.exports = ExplorerService