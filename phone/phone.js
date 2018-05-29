function PhoneNumber(givenNumber){
    this.number = function(){
      
        var result =givenNumber.replace(/[^A-Z0-9]+/ig, "");
        if(givenNumber.length==9){
            return null;
        }
        return result;
    }
}
module.exports = PhoneNumber;