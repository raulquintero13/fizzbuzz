const Reader = require('../../../lib/utils/Reader.js')

describe('test for Reader Class', ()=> {
    test('test for readJsonFile', ()=> {
        const explorers = Reader.readJsonFile('explorers.json')
        expect(explorers.length).toBe(15)
    })
})