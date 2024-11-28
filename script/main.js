const expandButtons = document.querySelectorAll(".expand_btn")
const closeButtons = document.querySelectorAll(".close_btn")
const answers = document.querySelectorAll(".answer")

expandButtons.forEach((expandButton) => {
  expandButton.addEventListener("click", (e) => {
    let answer = (e.srcElement.parentElement.parentElement.parentElement.querySelector(".answer"));
    let expandImageSrc = (e.srcElement.attributes.src);
    let expandElementClassLists = (e.srcElement.parentElement.classList);
    expandElementClassLists.remove("expand_btn")
    expandElementClassLists.add("close_btn")
    answer.classList.remove("hidden")
    expandImageSrc.value = "assets/images/icon-minus.svg";
    console.log(expandElementClassLists);
  })
})
closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", (e) => {
    let answer = (e.srcElement.parentElement.parentElement.parentElement.querySelector(".answer"));
    let expandImageSrc = (e.srcElement.attributes.src);
    let expandElementClassLists = (e.srcElement.parentElement.classList);
    expandElementClassLists.remove("close_btn")
    expandElementClassLists.add("expand_btn")
    answer.classList.add("hidden")
    expandImageSrc.value = "assets/images/icon-plus.svg";
    console.log(expandElementClassLists);
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