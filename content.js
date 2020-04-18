const interval = setInterval(() => {
  const header = document.querySelector("._3auIg");
  if (header) {
    console.log(header);
    clearInterval(interval);

    const button = document.createElement("button");
    button.innerHTML = "2x";
    button.classList.add("twoTimesButton");

    button.addEventListener("click", () => {
      const audio = document.querySelectorAll("audio");
      audio.forEach((childItem) => {
        console.log(childItem);
        childItem.playbackRate = 2;
      });
    });

    header.appendChild(button);
  }
}, 1000);
