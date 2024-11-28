const expandButtons = document.querySelectorAll(".expand_btn");
const closeButtons = document.querySelectorAll(".close_btn");
const answers = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".faq_question")
const questionListBody = document.getElementById("question_body");

questionListBody.addEventListener("click", (e) => {
  e.preventDefault();

  const targetElement = e.target.closest(".faq_question, .button");

  if (targetElement) {
    const expandButton = targetElement.nextElementSibling?.classList.contains("expand_btn") ?
      targetElement.nextElementSibling :
      null;
    const closeButton = targetElement.nextElementSibling?.classList.contains("close_btn") ?
      targetElement.nextElementSibling :
      null;
    const button = targetElement.classList.contains("button") ? targetElement : null;



    if (expandButton) {
      const answer = expandButton.parentElement.nextElementSibling;
      const expandImage = expandButton.querySelector("img");

      const expandImageSrc = expandImage.attributes.src;
      const expandElementClassLists = expandButton.classList;

      expandElementClassLists.remove("expand_btn");
      expandElementClassLists.add("close_btn");
      answer.classList.remove("hidden");
      expandImageSrc.value = "assets/images/icon-minus.svg";
    }

    if (closeButton) {
      const answer = closeButton.parentElement.nextElementSibling;

      const expandImageSrc = closeButton.querySelector("img").attributes.src;
      const expandElementClassLists = closeButton.classList;

      expandElementClassLists.remove("close_btn");
      expandElementClassLists.add("expand_btn");
      answer.classList.add("hidden");
      expandImageSrc.value = "assets/images/icon-plus.svg";
    }

    if (button) {
      const answer = button.parentElement.parentElement.parentElement.querySelector(".answer");
      const isHidden = answer.classList.contains("hidden");

      if (isHidden) {
        answer.classList.remove("hidden");
        button.src = "assets/images/icon-minus.svg";
      } else {
        answer.classList.add("hidden");
        button.src = "assets/images/icon-plus.svg";
      }
    }
  }
});