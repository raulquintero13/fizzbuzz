const fs = require("fs");

class Reader{
    static readJsonFile(filename){
        const rawdata = fs.readFileSync(filename);
        return JSON.parse(rawdata);
    }
}

module.exports = Reader