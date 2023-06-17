// Code your solution in this file!
function distanceFromHqInBlocks(streetnumber) {
    let HQ = 42;
    if(HQ > streetnumber ) {
        return HQ - streetnumber;

     }
      else {
        return streetnumber - HQ;
      }   
}

function distanceFromHqInFeet(block) {  
    return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(dtf1,dtf2) {
    if(dtf1> dtf2) {
        return (dtf1 - dtf2) * 264;
    } else {
        return (dtf2 - dtf1) * 264
    }
}


function calculatesFarePrice(num1,num2) {
    let feet = distanceTravelledInFeet(num1,num2) 
    if(feet <= 400) {
        return 0;    
    }
    else if(feet > 400 && feet < 2000) {
        return (feet-400) * 0.02
    } 
       else if(feet > 2000 && feet <2500) {
        return 25;
       }
       else {
        return 'cannot travel that far';
       }
}


