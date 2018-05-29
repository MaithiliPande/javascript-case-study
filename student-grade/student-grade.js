function School(){
    var db = {};
    this.roster = function(){
         var _keys = Object.keys(db);
        if (_keys.length > 0) {
            _keys.forEach(function(key) {
            db[key].sort();
            },this);
        }   
        return db;
    }
    this.grade = function(grade){
        if(db[grade]){
           return db[grade].sort();
        }
        return [];
    }
    this.add = function(name,grade){
        if(db[grade]){
            db[grade].push(name);
        }else{
            db[grade] = [name];
        }
    }
   
}
module.exports = School;