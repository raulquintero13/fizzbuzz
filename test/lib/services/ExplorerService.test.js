const ExplorerService = require('../../../lib/services/ExplorerService.js')
const Reader = require('../../../lib/utils/Reader.js')

const explorers = Reader.readJsonFile('explorers.json')


describe('test for ExplorerService Class', ()=> {
    test('fest for filterByMission', ()=> {
        const explorersbyMission = ExplorerService.filterByMission(explorers, "node");
        expect(explorersbyMission.length).toBe(10);
    })
    test('for getAmountOfExplorersByMission',()=>{
        const amountOfExplorersbyMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(amountOfExplorersbyMission).toBe(10);

    })
    test('for getExplorersUsernamesByMission', ()=> {
        const usernames = ["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta6", "ajolonauta7", "ajolonauta8", "ajolonauta9", "ajolonauta10", , "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"];
        const explorersUsernamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node")
        expect(explorersUsernamesByMission).toEqual(
            expect.arrayContaining(usernames),
        );
    })
})