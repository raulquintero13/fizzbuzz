const FizzbuzzService = require('../../../lib/services/FizzbuzzService.js')
const Reader = require('../../../lib/utils/Reader.js')

const explorers = Reader.readJsonFile('explorers.json')


describe('test for ExplorerService Class', ()=> {
    test('fest for applyValidationInExplorer', ()=> {
        const explorer1 = {name: "Explorer1", score: 1}
        const explorersbyMission = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorersbyMission.length).toBe(10);
    })
   
})