
  const addedZekr = localStorage.getItem("addedZekr");
  const link = document.getElementById("added-link");

  if (addedZekr) {
    link.style.display = "inline-block";
  }

