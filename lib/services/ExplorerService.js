
class ExplorerService{

    static filterByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }
    static filterByStack(explorers, stack){
        return explorers.filter((explorer) => explorer.stacks.includes(stack));
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
    static getExplorersNameByMission(explorers, mission){
        const explorersTemp = explorers.filter((explorer)=> explorer.mission == mission);
        const explorersUsernames = explorersTemp.map((explorer) => explorer.name);
        return explorersUsernames;
    }

    static getExplorersByStack(explorers, stack){
        return ExplorerService.filterByStack(explorers, stack);
    }

}




module.exports = ExplorerService;