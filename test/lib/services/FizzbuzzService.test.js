const FizzbuzzService = require("../../../lib/services/FizzbuzzService.js");
// const Reader = require("../../../lib/utils/Reader.js");

// const explorers = Reader.readJsonFile('explorers.json')


describe("test for FizzbuzzService Class", ()=> {
    test("test for different of 3 or 5", ()=> {
        const explorer1 = [{name: "Explorer1", score: 1}];
        const explorersValidated = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorersValidated).toEqual(
            expect.arrayContaining([{name: "Explorer1", score: 1, trick: 1}]),
        );
    });

    test("test when is equal to %3", ()=> {
        const explorer1 = [{name: "Explorer3", score: 3}];
        const explorersValidated = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorersValidated).toEqual(
            expect.arrayContaining([{name: "Explorer3", score: 3, trick: "FIZZ"}]),
        );
    });
    test("test when is equal to %5", ()=> {
        const explorer1 = [{name: "Explorer5", score: 5}];
        const explorersValidated = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorersValidated).toEqual(
            expect.arrayContaining([{name: "Explorer5", score: 5, trick: "BUZZ"}]),
        );
    });
    test("test when is equal to %3 or %5", ()=> {
        const explorer1 = [{name: "Explorer15", score: 15}];
        const explorersValidated = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorersValidated).toEqual(
            expect.arrayContaining([{name: "Explorer15", score: 15, trick: "FIZZBUZZ"}]),
        );
    });

    test('test for applyValidationInNumber ', ()=>{
        expect(FizzbuzzService.applyValidationInNumber(1)).toBe(1)
        expect(FizzbuzzService.applyValidationInNumber(3)).toBe("FIZZ")
        expect(FizzbuzzService.applyValidationInNumber(5)).toBe("BUZZ")
        expect(FizzbuzzService.applyValidationInNumber(15)).toBe("FIZZBUZZ")
    })
});