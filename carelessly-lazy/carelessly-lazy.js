function lazyGuy(){
    this.hey = function(input){
        var message = input.trim();
        var result = "Whatever.";

        if(message == input.toUpperCase()){
           result = "Whoa, chill out!";
        }
       
        if(message.charAt(message.length-1)=="?"){
            result = "Sure.";
        }
        if(message == input.toUpperCase() && message.charAt(message.length-1)=="?"){
            result = "Calm down, I know what I'm doing!";
        }
        if(input==""){
           return "Fine. Be that way!";
        }
        return result;
    }
}
module.exports = lazyGuy;