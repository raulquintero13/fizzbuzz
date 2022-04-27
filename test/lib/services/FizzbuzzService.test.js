const FizzbuzzService = require('../../../lib/services/FizzbuzzService.js')
const Reader = require('../../../lib/utils/Reader.js')

// const explorers = Reader.readJsonFile('explorers.json')


describe('test for ExplorerService Class', ()=> {
    test('test for different of 3 or 5', ()=> {
        const explorer1 = [{name: "Explorer1", score: 1}]
        const explorersValidated = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorersValidated).toEqual(
            expect.arrayContaining([{name: "Explorer1", score: 12, trick: 1}]),
        );
    })

    test('test when is equal to %3', ()=> {
        const explorer1 = [{name: "Explorer3", score: 3}]
        const explorersValidated = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorersValidated).toEqual(
            expect.arrayContaining([{name: "Explorer3", score: 3, trick: "FIZZ"}]),
        );
    })
    test('test when is equal to %5', ()=> {
        const explorer1 = [{name: "Explorer5", score: 5}]
        const explorersValidated = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorersValidated).toEqual(
            expect.arrayContaining([{name: "Explorer5", score: 5, trick: "BUZZ"}]),
        );
    })
    test('test when is equal to %3 or %5', ()=> {
        const explorer1 = [{name: "Explorer15", score: 15}]
        const explorersValidated = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorersValidated).toEqual(
            expect.arrayContaining([{name: "Explorer15", score: 15, trick: "FIZZBUZZ"}]),
        );
    })
})