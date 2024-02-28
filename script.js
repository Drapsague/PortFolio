
document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project');
    const gif_arrow = document.querySelectorAll('.exp')
    projectItems.forEach(item => {
        if (window.innerWidth > 430){
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
        }
    });
});
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


/*

function updateMenuOnScroll() {
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
            menuItemP.style.color = 'white'; 
            boxIcon.setAttribute('type', 'solid');
            boxIcon.setAttribute(`color`, `white`);
            //section2.classList.add('in-view');
        } else {
            
            menuItemP.style.color = "#94a3b8"; 
            boxIcon.setAttribute('type', 'regular'); 
            boxIcon.setAttribute(`color`, `#94a3b8`);
            //section2.classList.remove('in-view');
        }
    });
}

window.addEventListener('scroll', updateMenuOnScroll);
updateMenuOnScroll(); 
*/


function updateMenuOnScroll() {
    const sections = document.querySelectorAll('section');
    let closestSectionId = null;
    let maxVisibleArea = 0; 

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

      
        if (visibleHeight > maxVisibleArea) {
            maxVisibleArea = visibleHeight;
            closestSectionId = section.id;
        }
    });

   
    document.querySelectorAll('.bottom_side-container a').forEach(link => {
        const menuItemP = link.querySelector('.menu');
        const boxIcon = link.querySelector('box-icon');
        
        if (menuItemP.dataset.section === `#${closestSectionId}`) {
            menuItemP.style.color = 'white'; 
            if (boxIcon) { 
                boxIcon.setAttribute('type', 'solid');
                boxIcon.setAttribute('color', 'white');
            }
        } else {
            menuItemP.style.color = "#94a3b8"; 
            if (boxIcon) { 
                boxIcon.setAttribute('type', 'regular'); 
                boxIcon.setAttribute('color', '#94a3b8');
            }
        }
    });
}

window.addEventListener('scroll', updateMenuOnScroll);
updateMenuOnScroll();
