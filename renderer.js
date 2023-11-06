const chooseFileButton = document.querySelector(".choose-file");
const copyButton = document.querySelector(".copy-button");
const show = document.querySelector(".show-area");
chooseFileButton.addEventListener("click", () => {
  window.api.chooseFileButton((value) => {
    if (value === undefined) {
      alert("目录为空");
    }
    show.innerHTML = JSON.stringify(value, null, 2);
  });

  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(show.innerHTML);
  });
});
