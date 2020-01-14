// Your code goes here


// Prevent Page link default action
const navLinks = document.querySelectorAll(".nav-link").forEach( e => {
    e.addEventListener('click', e => {
        
        
        e.preventDefault();
        e.stopPropagation();
    });
});
const nav = document.querySelector(".nav");
nav.addEventListener('click', e =>{
    e.target.style.background = "brown";
});

window.addEventListener('wheel',(e) => { 
    document.querySelector('p').style.color = 'purple';
 });

const images = document.querySelectorAll('img');
console.log(images);
images.forEach(e =>{e.addEventListener('mouseover', e =>{
    e.target.style.transform = 'scale(0.7)';
})});
images.forEach(e => {e.addEventListener('mouseleave', e =>{
    e.target.style.transform = '';
})});

const logoHeading = document.querySelector('.logo-heading');
    
logoHeading.addEventListener('dblclick', e => {
      
        e.target.style.transform = 'rotate(180deg)';

    });


const thisBody = document.querySelector("body");
thisBody.addEventListener('keydown', e => {
    e.target.style.background = "green";
})

// * [ ] `wheel`

// * [ ] `load`

window.addEventListener('resize', e=> {
    thisBody.style.background = 'blue';
});


window.addEventListener('scroll', e => {
    document.querySelector('nav').style.display = 'none';
});

window.addEventListener('mousedown', e => {
    console.log(`Say good bye to ${e.target}`);
});
window.addEventListener('mouseup', e => {
    e.target.style.display = 'none';
});
