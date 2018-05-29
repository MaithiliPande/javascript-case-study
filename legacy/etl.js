var ETL = function(){}

ETL.prototype.transform = function(old){
    var newObj = {};
    var key=Object.keys(old);
    key.forEach(function(key){
        old[key].forEach(function(value){
           newObj[value.toLocaleLowerCase()] = parseInt(key); 
        });
    });
    return newObj;
}
module.exports = ETL;