const expandButtons = document.querySelectorAll(".expand_btn");
const closeButtons = document.querySelectorAll(".close_btn");
const answers = document.querySelectorAll(".answer");
const questionListBody = document.getElementById("question_body");

questionListBody.addEventListener("click", (e) => {
if(e.srcElement.classList.contains("expand_btn")){
  console.log("This is the expand button")
} 
if(e.srcElement.classList.contains("close_btn")){
  console.log("This is the close button");
}
})

expandButtons.forEach((expandButton) => {
  expandButton.addEventListener("click", (e) => {
    e.preventDefault()
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
    e.preventDefault()
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
