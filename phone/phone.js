function PhoneNumber(givenNumber){
    this.number = function(){
        var result =givenNumber.replace(/[^0-9]+/ig, "");
        if(givenNumber.length<10 || givenNumber.length>10 ){
            return null;
        }
        return result;
    }
}
module.exports = PhoneNumber;