let ip = document.querySelector("#tasks");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = ip.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  //   console.log(ip.value);
  ip.value = "";
});

ul.addEventListener("click", function (e) {
  // console.log(e.target);
  // console.log(e.target.nodeName);
  // console.log("button clicked");
  if (e.target.nodeName == "BUTTON") {
    let listItem = e.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
});

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }
