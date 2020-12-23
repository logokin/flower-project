const flower = document.getElementById("flower");
let body = document.querySelector("body");

window.addEventListener("load", drop);
function drop() {
  //   let random = Math.floor(Math.random() * window.innerWidth);
  let random2 = Math.floor(Math.random() * window.innerHeight);
  let create = document.createElement("div");
  create.classList.add("all");
  create.innerHTML = `<i class="fas fa-arrow-down"  id="flower"></i>`;
  let know = create.getAttribute("fas");

  body.appendChild(create);
  //   flower.style.left = `${random}px`;
  //   flower.style.transform = `translate(${random2}px);`;
}

setInterval(drop, 300);
