let _ = require('underscore');

module.exports = function(data){
    let lines = data.split('\n');
    let statementGrid = lines.map(lineParser);
    let statementArray = _.flatten(statementGrid);
    let pureStatementArray = statementArray.map(statement=>statement.trim());
    return pureStatementArray;
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