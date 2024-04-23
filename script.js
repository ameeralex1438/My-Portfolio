window.onscroll=()=>{
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
}



var typed = new Typed(".multiple-text", {
            strings: ["Web Developer","UI/UX Designer"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
})

document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".work1 button");
    const filterableCards = document.querySelectorAll(".filterable_Cards .card");

    const filterCards = (category) => {
        filterableCards.forEach(card => {
            const cardCategory = card.dataset.name;
            const parentCol = card.closest('.col-sm-4');
            
            if (category === 'all' || category === cardCategory) {
                parentCol.classList.remove("hide");
            } else {
                parentCol.classList.add("hide");
            }
        });
    };

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const category = this.dataset.name;
            filterCards(category);
            document.querySelector(".active").classList.remove("active");
            this.classList.add("active");
        });
    });
});



/*const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e){
    const posX=e.clientX;
    const posY=e.clientY;

    cursorDot.style.left='${posX}px';
    cursorDot.style.top='${posY}px';

    cursorOutline.style.left='${posX}px';
    cursorOutline.style.top='${posY}px';

    cursorOutline.animate({
        left: '${posX}px',
        top: '${posY}px'

    }, {duration:500, fill:"forwards"});

})*/





/* cursor start */

/*const cursor = document.querySelector('.cursor');
const interactiveElements = document.querySelectorAll('a, button, .card, .car, .cards, h1, h2, h3, h4, h5');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(3)';
    });

    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

document.addEventListener('mousemove', (e) => {
    // Calculate the cursor position relative to the viewport
    const x = e.clientX;
    const y = e.clientY;

    // Update the cursor position
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});

/* cursor end */

/* nav bar start */

/*document.addEventListener("DOMContentLoaded", function() {
    const navToggler = document.querySelector('.nav-toggler');
    const navMenu = document.querySelector('.site-navbar ul');
    const navLinks = document.querySelectorAll('.site-navbar a');

    function allEventListeners() {
        navToggler.addEventListener('click', togglerClick);
        navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
    }

    function togglerClick() {
        navToggler.classList.toggle('toggler-open');
        navMenu.classList.toggle('open');
    }

    function navLinkClick() {
        if (navMenu.classList.contains('open')) {
            navToggler.click();
        }
    }

    allEventListeners();
});

/* nav bar end */

/* Designer and Developer start */

/*const dynamicText = document.querySelector("h1 span");
const words = ["Developer", "Designer"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();

/* Designer and Developer end */

/* popup start */

/*function openPopup(imageUrl) {
    document.getElementById("popup-image").src = imageUrl;
    document.getElementById("popup").style.display = "block";
    }

    function closePopup() {
    document.getElementById("popup").style.display = "none";
    }

/* popup end */

/* tab start */

/*function setDefaultTab() {
    document.querySelector('.tablinks').click(); // Simulate click on the first tab button
  }

// Call the function when the page finishes loading
window.addEventListener('load', setDefaultTab);

// Rest of your existing JavaScript code
function openCity(evt, cityName) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
}
document.getElementById(cityName).style.display = "block";
// Add fade-in class to the displayed tab content
document.getElementById(cityName).classList.add('fade-in');
evt.currentTarget.className += " active";
}

// Simulate click on the "ALL" button when the page loads
window.onload = function() {
document.querySelector('.tablinks[data-tab="ALL"]').click();
};

/* tab end */