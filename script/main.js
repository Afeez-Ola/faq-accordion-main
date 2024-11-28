const expandButtons = document.querySelectorAll(".expand_btn");
const closeButtons = document.querySelectorAll(".close_btn");
const answers = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".faq_question")
const questionListBody = document.getElementById("question_body");

questionListBody.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e.target);

  const targetElement = e.target.closest(".faq_question, .button");

  if (targetElement) {
    const expandButton = targetElement.nextElementSibling?.classList.contains("expand_btn") 
        ? targetElement.nextElementSibling 
        : null;
    const closeButton = targetElement.nextElementSibling?.classList.contains("close_btn") 
        ? targetElement.nextElementSibling 
        : null;
    const button = targetElement?.classList.contains("button") 
        ? targetElement 
        : null;

        console.log(button);

    if (expandButton || button) {
      const answer = expandButton.parentElement.nextElementSibling;
      const expandImage = expandButton.querySelector("img");
      console.log(answer);

      const expandImageSrc = expandImage.attributes.src;
      const expandElementClassLists = expandButton.classList;
      console.log(expandElementClassLists);

      expandElementClassLists.remove("expand_btn");
      expandElementClassLists.add("close_btn");
      answer.classList.remove("hidden");
      expandImageSrc.value = "assets/images/icon-minus.svg";
    }

    if (closeButton || button) {
      const answer = closeButton.parentElement.nextElementSibling;

      const expandImageSrc = closeButton.querySelector("img").attributes.src;
      const expandElementClassLists = closeButton.classList;
      console.log(expandElementClassLists);

      expandElementClassLists.remove("close_btn");
      expandElementClassLists.add("expand_btn");
      answer.classList.add("hidden");
      expandImageSrc.value = "assets/images/icon-plus.svg";
    }
  }
});