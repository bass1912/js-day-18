// function show(data) {
//     let text = document.getElementById("txt"),
//     arr = document.getElementsByClassName("subMenu"),
//     clickedTxt = document.getElementById(data);

//     for(let i=0; i<arr.length; i++) {
//         if(clickedTxt.innerText === arr[i].innerText) {
//             arr[i].classList.add("active");
//         } else {    
//             arr[i].classList.remove("active");
//         }
//     }

//     text.innerText = clickedTxt.innerText;

    
// }
function generate(){

let colortext = document.getElementById("txt");

let a=Math.floor(Math.random()*256);
b=Math.floor(Math.random()*256);
c=Math.floor(Math.random()*256);

colortext.innerText=`rgb(${a},${b},${c})`;
document.body.style.background=`rgb(${a},${b},${c})`
//   console.log(math.floor(math.random()*255));
}