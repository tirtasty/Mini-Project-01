const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })

    //ANimated Links
    navLinks.forEach((link, index) =>{
        link.style.animation = 'navLinkFade 0.5s ease forward ${index / 7}s'
        console.log(index / 7 + 2);

    });
    
    


    }

navSlide();