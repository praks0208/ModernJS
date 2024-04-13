// DOCUMENT OBJECT MODEL

// Query Selector
// const para = document.querySelector('p');
// const para = document.querySelector('div.error');
// console.log(para);

// const paras = document.querySelectorAll('p');
// // console.log(paras);
// // console.log(paras[0]);
// paras.forEach(para=>{
//     console.log(para)
// });

// const errors = document.querySelectorAll('.error');
// console.log(errors);

// Get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// // Get elements by their Class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// // Get elements by their Tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

// InnerText property
// const para = document.querySelector('p');

// console.log(para.innerText);
// Change text of element
// para.innerText ='ninjas are awesome!';
// para.innerText +='ninjas are awesome!';

// Change text of multiple elements
// const paras = document.querySelectorAll('p');
// paras.forEach(para=>{
//     console.log(para.innerText);
//     para.innerText+= ' new text';
// })

// innerHTML property
// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML = `<h2>This is a new H2 </h2>`;
// content.innerHTML += `<h2>This is a new H2 </h2>`;

// const people = ['mario','luigi','yoshi'];
// people.forEach(person=>{
//     content.innerHTML += `<p>${person}</p>`;
// })

// // Change Attribute of Elements
// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href','https://www.amazon.com');
// link.innerText = 'The Amazon Website'

// const msg = document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class','success');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('style','color:green;');

// Setting style properties to element
// const title = document.querySelector('h1');
// // title.setAttribute('style','margin:50px;')
// console.log(title.style);
// console.log(title.style.color);
// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = ''; //to remove style


// Change class of element
// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');
paras.forEach(p=>{
if(p.textContent.includes('error')){
    p.classList.add('error');
}
if(p.innerText.includes('success')){
    p.classList.add('success');
}
});

const title = document.querySelector('.title');
title.classList.toggle('test');//to add class
title.classList.toggle('test');//to remove class