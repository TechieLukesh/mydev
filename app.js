// // // // let smallImg=document.getElementsByClassName("oldImg");

// // // // for(let i=0; i<smallImg.length; i++){
// // // //    smallImg[i].src="assets/spiderman_img.png";
// // // //    console.log(`value of image no ${i} is changes`);
// // // // }

// // // document.getElementsByClassName("p");

// // // const ans=document.querySelector("h1");
// // // console.log(ans);

// // // console.log(document.querySelectorAll("div a"));

// // let links = document.querySelectorAll(".box a");

// // for (let i = 0; i < links.length; i++) {
// //   links[i].style.color = "yellow";
// // }

// // // implementing DOM Events

// // let btns = document.querySelectorAll("button");
// // console.dir(btns);

// // for (btn of btns) {
// //   btn.onclick = SayClicked;
// //   btn.addEventListener("click", function () {
// //     console.log("Hello World!");
// //   });
// //   btn.onmouseenter = function mouseEnter() {
// //     console.log("You hovered over buttons");
// //   };
// //   console.dir(btn);
// // }

// // function SayClicked() {
// //   console.log("Button Was Clicked!");
// // }

// // function sayHello() {
// //   console.log("Hello, are you good ?");
// // }

// // let h1 = document.querySelector("h1");
// // let h3 = document.querySelector("h3");
// // let p = document.querySelector("p");
// let btn = document.querySelector("button");

// // function changeColor() {
// //   console.log(this.innerText);
// //   this.style.backgroundColor = "blue";
// // }

// // h1.addEventListener("click", function () {
// //   console.dir(h1);
// //   console.log(h1.innerText);
// //   h1.style.backgroundColor = "blue";
// // });

// // h3.addEventListener("click", function () {
// //   console.dir(h3);
// //   console.log(h3.innerText);
// //   h3.style.backgroundColor = "green";
// // });

// // p.addEventListener("click", function () {
// //   console.dir(p);
// //   console.log(p.innerText);
// //   p.style.backgroundColor = "yellow";
// // });

// // btn.addEventListener("click", function () {
// //   console.dir(btn);
// //   console.log(btn.innerText);
// //   btn.style.backgroundColor = "pink";
// // });

// // h1.addEventListener("click", changeColor);

// // h3.addEventListener("click", changeColor);

// // p.addEventListener("click", changeColor);

// // btn.addEventListener("click", changeColor);

// // btn.addEventListener("click", function (e) {
// //   console.log(e);
// //   console.log("Button was clicked");
// // });

// btn.addEventListener("dblclick", function (e) {
//   console.log(e);
//   console.log("Button was double clicked");
// });

// let ip = document.querySelector("input");

// ip.addEventListener("keydown", function (e) {
//   console.log("code= ", e.code);
//   if (e.code == "ArrowUp") {
//     console.log("ArrowUp key was pressed!");
//   }
//   console.log("Key was pressed");
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   // let ip = document.getElementById("username");
//   // let pw = document.getElementById("password");
//   let user = this.elements[0];
//   let pw = this.elements[1];
//   console.log(user.value);
//   console.log(pw.value);
//   console.log(`Hi ${user.value}, your password is set to ${pw.value}`);
//   console.log("Form was submitted");
// });

// let user = document.querySelector("#username");
// let pw = document.querySelector("password");

// user.addEventListener("change", function () {
//   console.log("change event");
//   console.log(`final vlaue is ${user.value}`);
// });

// user.addEventListener("input", function () {
//   console.log("input event");
//   console.log(`final vlaue is ${user.value}`);
// });

let ip = document.querySelector("#ip");
let p = document.querySelector("p");
ip.addEventListener("input", function () {
  p.innerText = ip.value;
  console.log(`final value is ${ip.value}`);
});
