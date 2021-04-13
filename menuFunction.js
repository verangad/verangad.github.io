

function projectPages(tab, clickedButton) {

  var i;
  var numTabs;
  var tabButtons;
  
  numTabs = document.getElementsByClassName("project-content");
  tabButtons = document.getElementsByClassName("project-button");
  
  for (i = 0; i < numTabs.length; i++) { //hide all content in all tabs

    numTabs[i].style.display = "none";

  }

  for (i = 0; i < tabButtons.length; i++) { //reset color of buttons

    tabButtons[i].style.color = "";

  }
  
  //show the clicked tab's content
  document.getElementById(tab).style.display = "block";
  //set clicked button color
  clickedButton.style.color = "yellow";
  
}

//default pages
document.getElementById("default").click();




