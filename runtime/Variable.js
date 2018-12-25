class Variable{
    constructor(name,value){
       this.name = name;
       this.value = value; 
    }

    static makeVariable(statement){
        let [name,value] = statement.split('=');
        name = name.trim();
        value = value.trim();
        return new Variable(name,value);
    }
}

module.exports = Variable;