let currentSlide = 0;

function projectPages(tab, clickedButton) {

  let i;
  let numTabs;
  let tabButtons;
  let slideshow;
  let numChild;

  
  numTabs = document.getElementsByClassName("project-content");
  tabButtons = document.getElementsByClassName("project-button");
  slideshow = document.getElementsByClassName("type-lang");
  
  for (i = 0; i < numTabs.length; i++) { //hide all content in all tabs

    
    numTabs[i].style.display = "none";

  //show the clicked tab's content
    if(numTabs[i].id === tab){

      document.getElementById(tab).style.display = "block";
      numChild = slideshow[i].childElementCount;

      startSlide(childElementCount);
       
    }

  }

  for (i = 0; i < tabButtons.length; i++) { //reset color of buttons

    tabButtons[i].style.color = "";

  }
  

  
  //set clicked button color
  clickedButton.style.color = "yellow";
  
}


function startSlide(size){

  currentSlide = 0;
  setTimeout(function() { changeSlide(size); }, 5000);

}

function changeSlide(size){

  window.alert(size);


  currentSlide++;
  if(currentSlide === size){

    currentSlide = 0;
  }
}

//default pages
document.getElementById("default").click();


window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);




