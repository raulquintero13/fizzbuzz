
class ExplorerService{

    static filterByMission(explorers, mission){
        // console.log(explorers);
        return explorers.filter((explorer) => explorer.mission == mission);
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersAmount = explorers.filter((explorer) => explorer.mission == mission);
        return explorersAmount.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersTemp = explorers.filter((explorer)=> explorer.mission == mission);
        const explorersUsernames = explorersTemp.map((explorer) => explorer.githubUsername);
        return explorersUsernames;
    }
}




module.exports = ExplorerService;