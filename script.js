
document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project');
    const gif_arrow = document.querySelectorAll('.exp')
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            projectItems.forEach(item => {
                if (item !== this) {
                    item.style.opacity = '0.4';
                }
            });
        });

        item.addEventListener('mouseleave', function() {
            projectItems.forEach(item => {
                item.style.opacity = '1';
            });
        });
    });
});


/*
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

document.querySelectorAll('.menu').forEach(menuItem => {
    menuItem.onmouseover = (event) => {
        let iteration = 0;
        clearInterval(interval);
        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                    return event.target.dataset.value[index];
                }
            
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
            
            if(iteration >= event.target.dataset.value.length){ 
                clearInterval(interval);
            }
            
            iteration += 1/1.8 ;
        }, 30);
    }
   
});
*/
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll('.menu').forEach(menuItem => {
    let interval = null; 

    menuItem.onmouseover = (event) => {
        clearInterval(interval); 

        let iteration = 0;
        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if(index < iteration) {
                        return event.target.dataset.value[index];
                    }
                
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
                
            if(iteration >= event.target.dataset.value.length){ 
                clearInterval(interval);
            }
            
            iteration += 1/2;
        }, 30);
    }

    menuItem.dataset.intervalId = interval; 
});




function updateMenuOnScroll() {
    const section2 = document.querySelector('#section2');
    const sections = document.querySelectorAll('section');
    let closestSectionId = null;
    let closestSectionDistance = Infinity;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
            if (rect.top < closestSectionDistance && rect.top >= 0) {
                closestSectionDistance = rect.top;
                closestSectionId = section.id;
            }
        }
    });

    document.querySelectorAll('.bottom_side-container a').forEach(link => {
        const menuItemP = link.querySelector('.menu');
        const boxIcon = link.querySelector('box-icon');
        
        if (menuItemP.dataset.section === `#${closestSectionId}`) {
            menuItemP.style.color = 'white'; // Mettez en surbrillance l'élément du menu
            boxIcon.setAttribute('type', 'solid'); // Changez le type de l'icône en 'solid'
            boxIcon.setAttribute(`color`, `white`);
            //section2.classList.add('in-view');
        } else {
            
            menuItemP.style.color = "#94a3b8"; // Couleur par défaut
            boxIcon.setAttribute('type', 'regular'); // Réinitialisez le type de l'icône en 'regular'
            boxIcon.setAttribute(`color`, `#94a3b8`);
            //section2.classList.remove('in-view');
        }
    });
}

window.addEventListener('scroll', updateMenuOnScroll);
updateMenuOnScroll(); // Initialiser au chargement de la page












/*

document.querySelectorAll('.meny').forEach(function(eventClicked) {
    eventClicked.addEventListener('click', function() {
    
        document.querySelectorAll('.meny box-icon').forEach(function(icon) {
            icon.setAttribute( `type`, `regular`); 
            icon.setAttribute('color', '#71717a'); 
        });
        document.querySelectorAll('.meny p').forEach(function(menuItem) {
            menuItem.style.color = "#71717a"; // Couleur par défaut
        });

        let typeElement = eventClicked.querySelector('box-icon');
        let menuElement = eventClicked.querySelector('p');
        typeElement.setAttribute('type', 'solid'); 
        typeElement.setAttribute('color', 'white'); 
        menuElement.style.color = "white"; 
    });
});







function updateMenuOnScroll() {
    const sections = document.querySelectorAll('section');
    let closestSectionId = null;
    let closestSectionDistance = Infinity; // Distance du haut du viewport

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        // Vérifiez si la section est partiellement visible
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
            // Vérifiez si cette section est plus proche du haut du viewport que les précédentes vérifiées
            if (rect.top < closestSectionDistance && rect.top >= 0) {
                closestSectionDistance = rect.top;
                closestSectionId = section.id;
            }
        }
    });

    // Mise à jour des éléments du menu
    document.querySelectorAll('.menu').forEach(menuItem => {
        var menuItemP = menuItem.querySelector('p');
        menuItem.style.color = "#71717a"; // Réinitialisez la couleur de tous les éléments du menu
        //menuItemP.setAttribute(`type`, `regular`);

        if (menuItem.dataset.section === `#${closestSectionId}`) {
            //menuItemP.style.color = 'white'; // Mettez en surbrillance l'élément du menu correspondant
            menuItem.style.color = 'white';
            //menuItemP.setAttribute(`type`, `solid`);
        }
    });
}

window.addEventListener('scroll', updateMenuOnScroll);
updateMenuOnScroll(); // Initialiser au chargement de la page



// Fonction pour mettre à jour le menu en fonction de la section visible
function updateMenuOnScroll() {
    const sections = document.querySelectorAll('section'); // Sélectionnez toutes les sections de la page
  
    // Pour chaque section, vérifiez si elle est visible à l'écran
    sections.forEach(section => {
      const rect = section.getBoundingClientRect(); // Récupérez les dimensions de la section
        
      // Si la section est visible à l'écran (au moins partiellement), mettez à jour le menu
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        const sectionId = section.id; // Obtenez l'identifiant de la section visible
        const menuItem = document.querySelector(`[data-section="#${sectionId}"]`); // Trouvez l'élément du menu correspondant
  
        // Réinitialisez la couleur de tous les éléments du menu
       
        document.querySelectorAll('.meny p').forEach(function(menuItem) {
            menuItem.style.color = "#71717a"; // Couleur par défaut
        });
  
        // Mettez en surbrillance l'élément du menu correspondant à la section visible
        menuItem.style.color = 'white';
      }
    });
  }
  
  // Écoutez l'événement de défilement de la page
  window.addEventListener('scroll', updateMenuOnScroll);
  
  // Appelez la fonction une fois au chargement de la page pour initialiser le menu
  updateMenuOnScroll();








document.querySelectorAll('.meny').forEach(function(eventclicked){
    eventclicked.addEventListener('click', function(){
        let typeElement = eventclicked.querySelector(`box-icon`);
        let menuElement = eventclicked.querySelector(`p`);
        let typeValue = typeElement.getAttribute(`type`);
        if(typeValue === `solid`){
            console.log('test');
        }else {
            
            typeElement.setAttribute(`type`,`solid`);
            typeElement.setAttribute(`color`, `white`);
            menuElement.style.color = "white";

        }
       
    })
})








document.querySelectorAll('.menu').forEach(menuItem => {
    menuItem.onmouseover = (event) => {
        let iteration = 0;
  
        clearInterval(interval);
        
        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                    return event.target.dataset.value[index];
                }
            
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
            
            if(iteration >= event.target.dataset.value.length){ 
                clearInterval(interval);
            }
            
            iteration += 1 / 2.5;
        }, 30);
    }
});















document.querySelectorAll('.menu').forEach(function(element){
    element.addEventListener('click', function(event){
        var caseClicked = event.target;
        var welcome = caseClicked.classList.contains('welcome');
        if (welcome){
            console.log("test");
        }



        caseClicked.innerHTML = `&lt;/WELCOME&gt;`;
        caseClicked.classList.add('active');
        
    });
});


*/



