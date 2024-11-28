const expandButtons = document.querySelectorAll(".expand_btn")
const closeButtons = document.querySelectorAll(".close_btn")
const answers = document.querySelectorAll(".answer")

expandButtons.forEach((expandButton) => {
  expandButton.addEventListener("click", () => {
    const expandImageElement = expandButton.querySelector("img")
    const expandImagePath = (expandImageElement.getAttribute("src"));
    console.log(expandImagePath);
  })
});
// closeButtons.addEventListener("click", () => {
//   const closeImageElement = closeButtons.querySelector("img")
//   const closeImagePath = (closeImageElement.getAttribute("src"));
//   console.log(closeImagePath);
// })

closeButtons.forEach((closeButton) => {
  closeButton.querySelector("img").addEventListener("click", getButtonSrc)
});
answers.forEach((answer) => {
  answer.addEventListener("click", getAnswer)
});

function getButtonSrc(e){
  e.preventDefault()
  // console.log(getAnswer(e));
  
  return e.srcElement.getAttribute("src")
}

function getAnswer(e){
  e.preventDefault()
  answers.forEach((answer) => {
    console.log(answer);
  });
}