"use strict";

const navList = document.querySelector('.nav-list');
const subNavList = document.querySelector('.sub-nav-list');

function linkClick(event) {
    this.classList.add('darkGreen');
    this.children[1].classList.add('display');
}

navList.children[1].addEventListener('click', linkClick);
subNavList.children[1].addEventListener('click', linkClick);