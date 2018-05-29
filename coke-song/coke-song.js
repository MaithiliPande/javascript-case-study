function CokeSong(){
    this.verse = function(totalCans){
        var remainingCans = totalCans-1;
        if(totalCans==2){
             var verseResult = totalCans+" cans of coke in the box, "+totalCans+" cans of coke.\nTake one down and pass it around, "+remainingCans+" can of coke in the box.\n"
        }
        if(totalCans==1){
            verseResult = totalCans+" can of coke in the box, "+totalCans+" can of coke.\nTake it down and pass it around, no more cans of coke in the box.\n"
        }
        if(totalCans==0){
            verseResult = "No more cans of coke in the box, no more cans of coke.\nGo to the store and buy some more, 99 cans of coke in the box.\n"
        }
        if(totalCans>2){
             verseResult = totalCans+" cans of coke in the box, "+totalCans+" cans of coke.\nTake one down and pass it around, "+remainingCans+" cans of coke in the box.\n"
        }
        return verseResult;
    }
    this.sing = function(startPoint,endPoint){
        if(endPoint==undefined){
            endPoint=0;
        }
        
        var i;
        var expectedResult = "";
        for(i=startPoint;i>=endPoint;i--){
           var result = this.verse(i);
            if(i==endPoint){
               expectedResult = expectedResult+result; 
            }else{
                 expectedResult = expectedResult+result+"\n";
            }
        }
         return expectedResult;
    }
    
}
module.exports = CokeSong;