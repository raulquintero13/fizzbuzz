class FizzbuzzService{

    static applyValidationInExplorer(explorers, mission){

        const assignFizzTrick = function(explorer){
            explorer.trick = explorer.score;
            if(explorer.score%3 === 0){
                explorer.trick = "FIZZ";
            }
            if(explorer.score % 5 === 0){
                explorer.trick = "BUZZ";
            }
            if(explorer.score %3 ===0 && explorer.score %5 === 0 ){
                explorer.trick = "FIZZBUZZ";
            } 
            return explorer;
        };
        
        
        return explorers.map((explorer) => assignFizzTrick(explorer));
        
        // No me quedo muy claro como era el ejercicio
        // const explorersList =  explorers.map((explorer) => assignFizzTrick(explorer));
        // return explorersList.filter((explorer) => explorer.mission == mission);
    }
    
    static applyValidationInNumber(number){
        const validations = {};
        validations[[false, false]] = false;
        validations[[true, false]] = "FIZZ";
        validations[[false, true]] = "BUZZ";
        validations[[true, true]] = "FIZZBUZZ";
        const fb_validation = validations[[number%3==0, number%5==0]];
        if(fb_validation){
            return fb_validation;
        } else {
            return number;
        }
    }


}




module.exports = FizzbuzzService;