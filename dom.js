// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = 'J-One';
// var headertitle = document.getElementById('header-title');
// headertitle.style.backgroundColor = "green";
// headertitle.textContent = "J-One Holding";
// var header =t document.getElementById('main-header');
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

//function
function switchKu(){
    var text;
    var fruits = document.getElementById("myInput").value;
  
    switch(fruits) {
      case "One":
        text = "satu";
        console.log(text);
        // alert(text);
      break;
      case "Two":
        text = "dua";
        console.log(text);
        // alert(text);
      break;
      case "Three":
        text = "Tiga";
        console.log(text);
        // alert(text);
      break;
      default:
        text = "I have never seen them.";
        console.log(text);
        // alert(text);

    }
    document.getElementById("demo").innerHTML = text;
}

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[0]);
// var title = document.getElementsByClassName('title');
// items[1].textContent = 'Hello Hi2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'blue';
// console.log(items[3]);
// items[3].textContent = 'Adios';
// 
// console.log(title[0]);
// title[0].textContent = 'Hello Good Bye';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = 'grey';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"
// var button = document.querySelector('input[type="submit"]');


// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }
// }
