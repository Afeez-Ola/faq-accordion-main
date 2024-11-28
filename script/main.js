const expandButtons = document.querySelectorAll(".expand_btn");
const closeButtons = document.querySelectorAll(".close_btn");
const answers = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".faq_question")
const questionListBody = document.getElementById("question_body");

questionListBody.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);

  if (e.target.classList.contains("faq_question") || e.target.classList.contains("button")) {
    const expandButton = e.target.nextElementSibling?.classList.contains("expand_btn") ?
      e.target.nextElementSibling :
      null;
    const closeButton = e.target.nextElementSibling?.classList.contains("close_btn") ?
      e.target.nextElementSibling :
      null;

    if (expandButton || expandButton.querySelector("img")) {
      let answer = expandButton.parentElement.nextElementSibling
      let expandImageSrc = expandButton.querySelector("img").attributes.src
      let expandElementClassLists = expandButton.classList
      console.log(expandElementClassLists);
      expandElementClassLists.remove("expand_btn")
      expandElementClassLists.add("close_btn")
      answer.classList.remove("hidden")
      expandImageSrc.value = "assets/images/icon-minus.svg";
    }
    if (closeButton || closeButton.querySelector("img")) {
      let answer = closeButton.parentElement.nextElementSibling
      let expandImageSrc = closeButton.querySelector("img").attributes.src
      let expandElementClassLists = closeButton.classList
      console.log(expandElementClassLists);
      expandElementClassLists.remove("close_btn")
      expandElementClassLists.add("expand_btn")
      answer.classList.add("hidden")
      expandImageSrc.value = "assets/images/icon-plus.svg";
    }

  }
})