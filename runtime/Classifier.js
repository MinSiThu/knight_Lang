let Variable = require('./Variable');
let ReactiveVariable = require('./ReactiveVariable');

class Classifier{
    static exec(tokens,heap){
        for (let index = 0; index < tokens.length; index++) {
            const statement = tokens[index];
            if(statement.charAt(0) == '$'){
                let variable = Variable.makeVariable(statement);   
                console.log(variable);
                
            }else if(statement.charAt(0) == '@'){
                let reactiveVariable = ReactiveVariable.makeVariable(statement);
            }
        }
    }
}
module.exports = Classifier;