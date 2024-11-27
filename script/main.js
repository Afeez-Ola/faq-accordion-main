const expandButtons = document.querySelectorAll(".expand_btn")
const closeButtons = document.querySelectorAll(".open_btn")
const answers = document.querySelectorAll(".answer")

expandButtons.forEach((expandButton) => {
  expandButton.addEventListener("click", () => {
    let imageElement = expandButton.querySelector("img")
    let expandImagePath = (imageElement.getAttribute("src"));
    console.log(expandImagePath);
  })
});
closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    let imageElement = closeButton.querySelector("img")
    let closeImagePath = (imageElement.getAttribute("src"));
    console.log(closeImagePath);
  })
});

// function changeButton(e){
//   expandButtons.forEach((expandButton) => {
//     if (expandButton.attributes.item){

//     }
//   });
// }