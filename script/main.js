const closeButton = document.getElementById("close_btn")
const expandButtons = document.querySelectorAll(".expand_btn")
const answers = document.querySelectorAll(".answer")

expandButtons.forEach((expandButton) => {
  expandButton.addEventListener("click", () => {
    console.log("Expand button was clicked!");
  })
});

function hideAnswer(e){
  
}