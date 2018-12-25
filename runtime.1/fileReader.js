let fs = require('fs');

module.exports = function(filePath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,(err,data)=>{
            if(err) reject(err);
            resolve(data+"");
        })
    })
}