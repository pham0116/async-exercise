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

function getColor() {
  return new Promise((resolve) => {
    let delay = Math.random() * 1000 + 1000;
    setTimeout(() => {
      const hexNum = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += hexNum[Math.floor(Math.random() * 16)];
      }
      resolve(color);
    }, delay);
  });
}

