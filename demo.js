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
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor="#f4f4f4";

