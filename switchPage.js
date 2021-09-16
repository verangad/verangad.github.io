
function toProject(toPage){


    let home = document.getElementsByClassName("homeContent");
    let contact = document.getElementsByClassName("contactContent");
    let projects = document.getElementsByClassName("projectsContent");
    let about = document.getElementsByClassName("aboutContent");
    let particles = document.getElementsByClassName("content");

    

    for(let i = 0; i < home.length; i++){

        

        if(toPage === "homeContent" || toPage === "aboutContent"){

            home[i].style.display = "block";
            about[i].style.display = "block";
            particles[i].style.display = "block";

        }
        else{

            home[i].style.display = "none";
            about[i].style.display = "none";
            particles[i].style.display = "none";

        }

        

    }
    if(toPage === "homeContent"){
        
        location.href = "#xyz";

    }
    if(toPage === "aboutContent"){

        location.href = "#abc";
    
    }
    for(let i = 0; i < resume.length; i++){

        if(toPage === "resumeContent"){

            resume[i].style.display = "block";

        }
        else{

            resume[i].style.display = "none";

        }

    }
    for(let i = 0; i < projects.length; i++){

        if(toPage === "projectsContent"){

            projects[i].style.display = "block";

        }
        else{

            projects[i].style.display = "none";

        }

    }
    

}




toProject("homeContent");
