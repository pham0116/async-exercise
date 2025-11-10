document.addEventListener('DOMContentLoaded', init);

function init(){
  const body = document.querySelector("body");
  
  body.addEventListener("click", function onClick() {
    let num = Math.floor(Math.random() * 2);

if (num === 0){
  getColor().then((color) => {
body.style.backgroundColor = color;
});
  }else {
 getMessage().then((msg) => {
const p = document.createElement('p');
p.textContent = msg;
main.appendChild(p);
 });
}
});
}


