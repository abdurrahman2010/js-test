document.addEventListener("DOMContentLoaded", () => {

  const groupSelect = document.getElementById("groupSelect");
  groupSelect.addEventListener("change", () => {
    console.log("Таңдалған топ:", groupSelect.value);
  });

    
  const commentField = document.getElementById("comment");
  const commentMessage = document.getElementById("commentMessage");

  commentField.addEventListener("input", () => {
    commentMessage.textContent = "";
  });

  
  const ratingInput = document.getElementById("rating");
  const ratingValue = document.getElementById("ratingValue");

  ratingInput.addEventListener("input", () => {
    ratingValue.textContent = ratingInput.value;
  });

  const form = document.getElementById("mainForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const comment = commentField.value.trim();
    if (comment.length > 15) {
      commentMessage.textContent = "Пікір 15 символдан аспауы керек!";
      return;
    } else if (comment.length === 0) {
      commentMessage.textContent = "Пікір енгізу қажет!";
      return;
    }

    commentMessage.textContent = "Пікір қабылданды!";
    commentMessage.classList.remove("error");
    commentMessage.classList.add("success");

    console.log("Таңдалған топ:", groupSelect.value);
    console.log("Пікір:", comment);
    console.log("Бағалау:", ratingInput.value);

    alert("Форма сәтті жіберілді!");
  });
});
