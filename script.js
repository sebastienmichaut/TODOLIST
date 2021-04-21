var input = document.querySelector("input");
var text = "";
var add = document.querySelector("#button");
var list = document.querySelector("#list");
var paragraphe = document.querySelectorAll("p");

input.addEventListener("input", function () {
  text = this.value;
});

add.addEventListener("click", function () {
  if (text.trim().length > 0) {
    var p = document.createElement("p");
    p.textContent = text;
    list.appendChild(p);
    input.value = "";
    text = "";
    paragraphe = document.querySelectorAll("p");
  } else {
    alert("write please");
  }

  for (var e of paragraphe) {
    e.addEventListener("click", function () {
      this.remove();
    });
  }
});
