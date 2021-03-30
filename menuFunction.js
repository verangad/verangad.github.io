function menuFunction(input) {

    var homeVar = document.getElementsByClassName("homeContent");
    var resumeVar = document.getElementsByClassName("resumeContent");
   
    if(input == 0){
      homeVar[0].style.color = "blue";
      resumeVar[0].style.display = "none";
      resumeVar[0].style.opacity = "0";
      
    }
    else if(input == 1){
      location.href="resume.html";
      
    }
    else if(input == 2){


    }
    else if(input == 2){


    }

}