let flatten = require('array-flatten');

module.exports = async function(data){
    let lines = data.split('\n');
    let statementGrid = lines.map(lineParser);
    let statementArray = await flatten(statementGrid);
    let pureStatementArray = statementArray.map(statement=>statement.trim());
    console.log(pureStatementArray);
    
}

function lineParser(line){
    let pureLine = line.trim();
    let statements = pureLine.split(';');
    let statementArray = statements.filter(statement => {
        statement = statement.trim();
        if(statement != ''){
            return statement;
        }
    });
    return statementArray;
}