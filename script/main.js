const expandButtons = document.querySelectorAll(".expand_btn")
const closeButtons = document.querySelector(".close_btn")
const answers = document.querySelectorAll(".answer")

expandButtons.forEach((expandButton) => {
  expandButton.addEventListener("click", () => {
    let imageElement = expandButton.querySelector("img")
    let expandImagePath = (imageElement.getAttribute("src"));
    console.log(expandImagePath);
  })
});
closeButtons.addEventListener("click", () => {
  let imageElement = closeButtons.querySelector("img")
  let closeImagePath = (imageElement.getAttribute("src"));
  console.log(closeImagePath);
})

// function changeButton(e){
//   expandButtons.forEach((expandButton) => {
//     if (expandButton.attributes.item){

//     }
//   });
// }