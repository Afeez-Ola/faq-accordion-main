const expandButtons = document.querySelectorAll(".expand_btn")
const closeButtons = document.querySelectorAll(".close_btn")
const answers = document.querySelectorAll(".answer")

expandButtons.forEach((expandButton) => {
  expandButton.addEventListener("click", (e) => {
    let answer = (e.srcElement.parentElement.parentElement.parentElement.querySelector(".answer"));
    let expandImageSrc = (e.srcElement.attributes.src);
    console.log(e.srcElement.attributes);
    answer.classList.remove("hidden")
    expandImageSrc.value = "assets/images/icon-minus.svg";
  })
})
// closeButtons.forEach((expandButton) => {
//   expandButton.addEventListener("click", (e) => {
//     let answer = (e.srcElement.parentElement.parentElement.parentElement.querySelector(".answer"));
//     let expandImageSrc = (e.srcElement.attributes.src);
//     answer.classList.remove("hidden")
//     expandImageSrc.value = "assets/images/icon-minus.svg";
//   })
  
// });
// closeButtons.addEventListener("click", () => {
//   const closeImageElement = closeButtons.querySelector("img")
//   const closeImagePath = (closeImageElement.getAttribute("src"));
//   console.log(closeImagePath);
// })

closeButtons.forEach((closeButton) => {
  closeButton.querySelector("img").addEventListener("click", getButtonSrc)
});
// answers.forEach((answer) => {
//   answer.addEventListener("click", getAnswer)
// });

function getButtonSrc(e){
  e.preventDefault()
  // console.log(getAnswer(e));
  
  return e.srcElement.getAttribute("src")
}

// function getAnswer(e){
//   e.preventDefault()
//   answers.forEach((answer) => {
//     console.log(answer.classList.remove("hidden"));
//   });
// }