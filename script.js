const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const menu = document.getElementById('navbar');

menuIcon.onclick = () => menu.classList.add("show");

closeIcon.onclick = () => menu.classList.remove('show');

