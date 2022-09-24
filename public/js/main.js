// Mobile menu
const menu = document.querySelector('#menu');
const btn = document.querySelector('#burger');
const close = document.querySelector('#close');

btn.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        menu.style.display = 'block';
        menu.style.opacity = 1;
    }
});

close.addEventListener('click', () => {
    menu.style.display = 'none';
    menu.style.opacity = 0;
});

// Destination
const tabNav = document.querySelectorAll('.tab-nav');
const tabImg = document.querySelectorAll('.tab-img');
const tabContent = document.querySelectorAll('.tab-content');

function selectItem(){
    removeBorder();
    removeBody();
    this.classList.add('border-b-2');
    const tabImg = document.querySelector(`#${this.id}-img`);
    tabImg.classList.add('show');
    const tabContent = document.querySelector(`#${this.id}-content`);
    tabContent.classList.add('show');
}

function removeBorder(){
    tabNav.forEach(nav => {
        nav.classList.remove('border-b-2');
    })
}

function removeBody(){
    tabImg.forEach(img => {
        img.classList.remove('show');
    });
    tabContent.forEach(content => {
        content.classList.remove('show');
    })
}

tabNav.forEach(nav => {
    nav.addEventListener('click', selectItem);
});

// Crew
const crewNav = document.querySelectorAll('.crew-nav');
const crewImg = document.querySelectorAll('.crew-img');
const crewContent = document.querySelectorAll('.crew-content');

function crewItem(){
    removeCrewBorder();
    removeCrewBody();
    this.classList.add('crew-border');
    const crewImg = document.querySelector(`#${this.id}-img`);
    crewImg.classList.add('show-flex');
    const crewContent = document.querySelector(`#${this.id}-content`);
    crewContent.classList.add('show');
}

function removeCrewBorder(){
    crewNav.forEach(nav => {
        nav.classList.remove('crew-border');
    })
}

function removeCrewBody(){
    crewImg.forEach(img => {
        img.classList.remove('show-flex');
    });
    crewContent.forEach(content => {
        content.classList.remove('show');
    })
}

crewNav.forEach(nav => {
    nav.addEventListener('click', crewItem);
});

// Technology
const techNav = document.querySelectorAll('.tech-nav');
const techImg = document.querySelectorAll('.tech-img');
const techContent = document.querySelectorAll('.tech-content');

function techItem(){
    removeTechBorder();
    removeTechBody();
    this.classList.add('tech-border');
    const techImg = document.querySelector(`#${this.id}-img`);
    techImg.classList.add('show');
    const techContent = document.querySelector(`#${this.id}-content`);
    techContent.classList.add('show');
}

function removeTechBorder(){
    techNav.forEach(nav => {
        nav.classList.remove('tech-border');
    })
}

function removeTechBody(){
    techImg.forEach(img => {
        img.classList.remove('show');
    });
    techContent.forEach(content => {
        content.classList.remove('show');
    })
}

techNav.forEach(nav => {
    nav.addEventListener('click', techItem);
});