let reader = require('./runtime/reader');
let path = require('path');

(async function(params) {
    let data = await reader(path.join(__dirname,'hello.kn'));
    console.log(data);
    
})()