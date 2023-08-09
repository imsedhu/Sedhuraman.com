var hamburgar = document.querySelector('.hamburgar');
var navbar = document.querySelector('ul');
var items = document.querySelectorAll('ul li a');

hamburgar.addEventListener('click', ()=>{
  navbar.classList.toggle('slide');
});


/*items.addEventListener('click', ()=>{
  navbar.classList.remove('slide');
});*/

for (i = 0; i < items.length; i++) { 
  items[i].addEventListener("click", ()=> {
    navbar.classList.remove('slide');
  });
}

