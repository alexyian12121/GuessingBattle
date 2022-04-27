//location of the ship
    var loc1=0;
    var loc2=0;
    var loc3=0;

    //number of Guess
    var guess=0;

    // status of Battle
     var ShipSunk=false;
    
     //Hits
     var Hits=0;

   //lives
   var lives=10;

   //how many times user try to guess
   var tryuntildie=0;



    function StartGame(){
       
//random location of the ship
         loc1=String(Math.floor(Math.random()*25));
         loc2=String(Math.floor(Math.random()*25));
         loc3=String(Math.floor(Math.random()*25));
         //since 24  po ang max number kaya po 25 ang limit ibig sabhin po mag eend sya bago 25 means hanggang 24 lan po 

        //start a game
        while (ShipSunk==false){

              
      
            var guess=prompt("You only have " + lives +" to guess "+" Enter A number From 0-24 ");
            
            if (guess<0 || guess>24){
                alert("You have entered an invalid number");
            }else{
                tryuntildie=tryuntildie+1;

                if (guess==loc1 || guess==loc2 || guess==loc3){
                    alert("You have hit the ship"); 
                    Hits=Hits+1;
                    if (Hits==3){
                        alert("You WIN Congratulation");
                        alert("ISANG MASIGABONG PAGBATI NG CONGRATULATIONS! You have only "+ lives +" lives left. And you Win");
                        ShipSunk=true;

                    }
                }else{
                    alert("You have missed the ship");
                   lives--;
                   
                   if (lives==0){
                       alert("You Lose")
                      alert("You try " + tryuntildie + " times");
                       ShipSunk=true
                   }
                }
            }
        }
    }
