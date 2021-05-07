function resumePages(tab, clickedButton) {

    var i;
    var docTabs;
    var docButtons;
    
    docTabs = document.getElementsByClassName("resume-content");
    docButtons = document.getElementsByClassName("resume-button");
    
    for (i = 0; i < docTabs.length; i++) { //hide all content in all tabs
  
      docTabs[i].style.display = "none";
  
    }
  
    for (i = 0; i < docButtons.length; i++) { //reset color of buttons
  
      docButtons[i].style.color = "";
  
    }
    
    //show the clicked tab's content
    document.getElementById(tab).style.display = "block";
    //set clicked button color
    clickedButton.style.color = "yellow";
    
}

  
  
document.getElementById("default-resume").click();
  