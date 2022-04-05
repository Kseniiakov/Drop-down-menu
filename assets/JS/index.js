"use strict";

const navList = document.querySelector('.nav-list');
const subNavList = document.querySelector('.sub-nav-list');

function linkClick() {
    this.children[1].classList.add('darkGreen');
    this.children[1].children[1].classList.add('display');
};

navList.addEventListener('click', linkClick);
subNavList.addEventListener('click', linkClick);