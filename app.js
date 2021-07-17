const type = document.querySelector(".type");
const words = document.querySelector(".words");

console.log(type.innerHTML.split(""));

for (let i=0; i < type.innerHTML.split("").length; i++) {
    type.innerHTML += `<span>${i}</span>`
}