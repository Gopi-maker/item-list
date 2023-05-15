//console.dir(document);
//console.log(document.Domain);
//console.log(document.URL);
//console.log(document.title);
//var headerTitle =document.getElementById('header-title');
//var header =document.getElementById('header-main');
//var item=document.getElementById('item');
//console.log(headerTitle);
//headerTitle.textContent ='Hello';
//headerTitle.innerText='GoodBye';
//headerTitle.innerHTML='<h3>Hello</h3>';
//header.style.borderBottom='solid 3px #000';
//item.style.fontWeight='bold';
//item.style.color='green';
//getElementByClassName
//var items = document.getElementsByClassName('list-group-item');
//items[2].style.backgroundColor="orange";
//for(var i=0;i<items.length;i++){
//items[i].style.fontWeight="bold";
//}
//getElementByTagName
//var li = document.getElementsByTagName('li');
//li[4].textContent='Gopi';
//var list=document.getElementsByClassName('list-group-item');
//for(var i=0;i<list.length;i++){
    //list[i].classList.add('not-in-list') ;
//}

//querySelector
//var secondItem=document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.backgroundColor="green";
//var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.display='none';

//querySelectorAll
//var Item2=document.querySelectorAll('.list-group-item');
//Item2[1].style.color="green";
//var odd=document.querySelectorAll('li:nth-child(odd)');
//for(var i=0;i<odd.length;i++){
  //  odd[i].style.backgroundColor='green';
//}

//traversing Dom
var itemList=document.querySelector('#items')
//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor="#f4f4f4";
//console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor="#f4f4f4";
//console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
//console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor='orange';

//firstChild
//console.log(itemList.firstChild);
//firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent="Hello";

//lastChild
//console.log(itemList.lastChild);
//lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent="Hello 4";
//nextSibling
//console.log(itemList.nextSibling);
//nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);
//previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='green';

//createElement
//create newDiv Element

var newDiv=document.createElement('div');
//Add class
newDiv.className='hello';
//add id
newDiv.id='hello1';
//add attribute
newDiv.setAttribute('title','hello Div');
//create text node
var newDivText =document.createTextNode("Hello");
//add text div
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);

var newLi=document.createElement('li');
newLi.className='list-group-item';
var listText=document.createTextNode("Hello");
newLi.appendChild(listText);
var cont=document.querySelector('#items');
cont.insertBefore(newLi,cont.children[0]);