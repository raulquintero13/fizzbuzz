const ExplorerService = require('./lib/services/ExplorerService.js')
const FizzbuzzService = require('./lib/services/FizzbuzzService.js')
const Reader = require('./lib/utils/Reader.js')

const explorers = Reader.readJsonFile('explorers.json')

const explorersByMission = ExplorerService.filterByMission(explorers, "node");
console.log('explorers by mission ---->', explorersByMission)

const amountOfExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
console.log('amount of explorers by mission ---->', amountOfExplorersByMission)

const explorersUsernamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node")
console.log('explorers usernames by mission ---->', explorersUsernamesByMission)

// Part7: Get a new list of explorers in Node, if the score number is divisible by 3 
// AND by 5 we need to set a new property called FIZZBUZZ, if not this value should be
// the same score value
const explorersValidated = FizzbuzzService.applyValidationInExplorer(explorers, "node");
console.log('explorers validated ---->>>', explorersValidated)

