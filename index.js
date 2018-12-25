let reader = require('./runtime/reader');
let path = require('path');
let parser = require('./runtime/parser');

(async function(params) {
    let data = await reader(path.join(__dirname,'hello.kn'));
    let HeapMemory = parser(data);
    
})()