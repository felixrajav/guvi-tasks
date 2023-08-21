"use strict";
const title = document.querySelector(".search-box");
const div_2 = document.createElement("div");
div_2.classList.add("container", "passages");

// To get data from Marvel API
const getPassages = function (key1, key2) {
  if (key1 == "" || key2 == "") {
    alert("Please Enter valid name, Try again!!!");
  } else {
    fetch(`https://bible-api.com/john ${key1}:${key2}`)
      .then((response) => response.json())
      .then((data) => {
        // displayCharacters(data.text);
        div_2.innerText = data.text;
        title.append(div_2);
      })
      .catch((err) => console.error(err));
  }
};

const button = document.getElementById("submit-button");
button.addEventListener("click", () => {
  var input1 = document.getElementById("chapterName").value;
  var input2 = document.getElementById("verseName").value;
  getPassages(input1, input2);
});