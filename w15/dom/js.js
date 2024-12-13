// let taqryp = document.getElementById("title");

// console.log(taqryp.textContent);

// // let textter = document.getElementByIClassName("text");

// // for (let element of textter) {
// //   console.log(element.textContent);
// // }

// // for (let i = 0; i < textter.length; i++) {
// //   console.log(textter[i].textContent);
// // }

// // // console.log();
// // // console.log();
// // // console.log();
// // let janataqryp = document.querySelector("#title")
// // console.log(janataqryp.textContent);

// let textter = docoment.querySelectorAll(".text")
// for (let elemet of textter ){
//     console.log(elemet.textContent);
// }

// let janataqryp = document.querySelector("#title")

// janataqryp.innerHTML = "<p class='new-title'>Today's top is Dom</p>"

// console.log(janataqryp.textContent);

// let qorap = document.getElementById('qorap')

// qorap.textContent= "<h5> jana qorpqa text saldym!</h5>"

// let taqryp = document.getElementById('title')

// console.log(taqryp);

// function titleClick() {
//     taqryp.textContent = "Budingi taqryp:ivents!"
//     alert("taqryp bastaldy!")

// }

// let knopka = document.getElementById('batyrma')
// let paharagrph = document.getElementById('text')

// knopka.addEventListener("dblclick",function(){
//     knopka.style.backgroundColor = "cadetblue"
//     paharagrph.textContent = "bakzhan kosachnik!"
// })

// let korobka = document.getElementById('qorap')

// korobka.addEventListener("mouseenter", function(){
//     korobka.style.borderRadius = "50%"
//     korobka.style.transitionDuration ="0.5s"
//     korobka.innerHTML = "<h1>yes</h1>"
//     korobka.style.textAlign = "center"
// })
// korobka.addEventListener("mouseleave", function(){
//     korobka.style.borderRadius = "0px"
//     korobka.style.transitionDuration = "1s"
//     korobka.textContent = "no"
// })

// let myButton = document.getElementById("myButton");
// myButton.addEventListener("click", function () {
//   alert("вы правы ");

// });

// let tizim  = document.getElementByIdCalssName('item')

// for (let el of tizim){
//     el.addEventListener("mouseenter",function () {
//         el.style.color = "red"
//         el.style.fontSize = "20px"
//     })
//     el.addEventListener("mouseenter",function () {
//         el.style.color = "black"
//         el.style.fontSize = "16px"
//     })
// }




// Фонды жасыл түске бояу
document.getElementById('greenButton').onclick = function() {
    document.getElementById('box').style.backgroundColor = 'green';
  };
  
  // Енін 20px-ке ұзарту
  document.getElementById('widenButton').onclick = function() {
    var box = document.getElementById('box');
    box.style.width = (box.offsetWidth + 20) + 'px';
  };
  
  // Биіктігін 20px-ке ұзарту
  document.getElementById('heightenButton').onclick = function() {
    var box = document.getElementById('box');
    box.style.height = (box.offsetHeight + 20) + 'px';
    box.style.lineHeight = box.style.height;  // Мәтіннің ортада тұруы үшін
  };
  
  // Мышка қораптың ішіне кірсе
  document.getElementById('box').onmouseenter = function() {
    document.getElementById('box').textContent = 'Сіздің мышкаңыз қораптың ішінде!';
  };
  
  // Мышка қораптан шықса
  document.getElementById('box').onmouseleave = function() {
    document.getElementById('box').textContent = 'Сіздің мышкаңыз қораптан шығып кетті!';
  };
  
  // Бастапқы мәтін
  document.getElementById('box').textContent = 'Өзгеріс көру үшін мышкаңызды қорапқа алып келіңіз';
  




  