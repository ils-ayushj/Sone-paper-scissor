var userOption = undefined;
function playWith(option){
if (userOption != undefined)
{
userSelectionElement = document.getElementById(userOption);

userSelectionElement.style.border = "5px #F8F8F8  solid";
}	 		
userOption = option;
userSelectionElement = document.getElementById(option);
userSelectionElement.style.border = "5px rgb(255, 127, 159) solid";
}
function playGame(){
       var computerOption = Math.random();
    if (computerOption <0.50){
        computerOption = "stone";
    }else if(computerOption <=0.60){
        computerOption = "paper";
    }else{
        computerOption = "scissor";
    }
    
    resultMessage = compare(userOption, computerOption);
    
    document.getElementById("result").innerHTML = 
    "<p>User select: " + userOption + " - Computer select:" 
    + computerOption + "</p> <p>" + resultMessage + "</p>";
    
  }
  function compare(userSelection, computerSelection)
{
    if(userSelection == undefined)
    {
        return "Please, select an option before play"
    }	

    if (userSelection == computerSelection)
    {
       return "It is a draw!";
    }
    
    if (userSelection == "stone")
    {
        if (computerSelection == "scissor")
        {
             return "You win.";
        } else {
            return "The computer win. Try again.";
        }
        
    } else if (userSelection == "paper") {
        
        if (computerSelection == "stone")
        {
             return "You win." ;
        } else if("scissor") {
            return "The computer win. Try again." ;
        }
        
    } else if (userSelection == "scissor") {
      
        if (computerSelection == "stone")
        {
            return "The computer win. Try again.";
        }else{
            return "You win.";
        }
    }
}  
