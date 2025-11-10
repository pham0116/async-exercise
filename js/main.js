document.addEventListener('DOMContentLoaded', init);

function init(){
  const body = document.querySelector("body");
  
  body.addEventListener("click", function onClick() {
    let num = Math.floor(Math.random() * 2);
  });
}
