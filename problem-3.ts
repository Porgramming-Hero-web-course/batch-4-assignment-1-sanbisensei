{
    function countWordOccurrences(s1:string,s2:string): number{
     const s1SingleSingleWords = lowerS1.split(" ");
    
 
    let match=0;
 
    for(const w of s1SingleSingleWords){
     if(w === s2){
         match++;
     }
     
 
    }
    return match;
    }
    // ami for of function use korsi to compare s1 and s2. jodi word mile jay taile match er value baraisi. last e match return korsi jeita ekta number
 
 let s1:string = "hello bro Bro bro bro Bro , kill him asap";
 let s2:string = "bro";
 
 let lowerS1:string= s1.toLowerCase();
 let lowerS2:string= s2.toLowerCase(); 
 
 console.log(countWordOccurrences(lowerS1,lowerS2))
 // output : 5
 }