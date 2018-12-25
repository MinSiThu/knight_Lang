//variable parser
let tokenizer = require('./tokenizer');
let Heap = require('heap');
let Classifier = require('./Classifier');

module.exports =  function(data){
    let tokens =  tokenizer(data);
    let heapMemory = new Heap();
    Classifier.exec(tokens,heapMemory);
    
}