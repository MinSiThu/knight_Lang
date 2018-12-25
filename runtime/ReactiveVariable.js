let Variable = require('./Variable');

class ReactiveVariable extends Variable{
    constructor(name,value,expression){
        this.name = name;
        this.value = value;
        this.expression = expression;
    }

    static makeVariable(statement){
        
    }
}
module.exports = ReactiveVariable;