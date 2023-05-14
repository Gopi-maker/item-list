//console.dir(document);
//console.log(document.Domain);
//console.log(document.URL);
//console.log(document.title);
var headerTitle =document.getElementById('header-title');
var header =document.getElementById('header-main');
var item=document.getElementById('item');
//console.log(headerTitle);
headerTitle.textContent ='Hello';
//headerTitle.innerText='GoodBye';
//headerTitle.innerHTML='<h3>Hello</h3>';
header.style.borderBottom='solid 3px #000';
item.style.fontWeight='bold';
item.style.color='green';
//getElementByClassName
var items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor="green";
for(var i=0;i<items.length;i++){
items[i].style.fontWeight="bold";
}