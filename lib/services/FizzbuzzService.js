class FizzbuzzService{

    static applyValidationInExplorer(explorers, mission){

        const assignFizzTrick = function(explorer){
            explorer.trick = explorer.score;
            if(explorer.score%3 === 0){
                explorer.trick = "FIZZ";
            }
            if(explorer.score % 5 === 0){
                explorer.trick = "BUZZ"
            }
            if(explorer.score %3 ===0 && explorer.score %5 === 0 ){
                explorer.trick = "FIZZBUZZ"
            } 
                return explorer;
        };
        
        
        return explorers.map((explorer) => assignFizzTrick(explorer));
        
        // const explorersList =  explorers.map((explorer) => assignFizzTrick(explorer));
        // return explorersList.filter((explorer) => explorer.mission == mission);
    }
    
}




module.exports = FizzbuzzService