// _9tCEa

const interval = setInterval(() => {
  const header = document.querySelector("._3auIg");
  if (header) {
    clearInterval(interval);
    localStorage.setItem("playbackRate", 1);

    const button = document.createElement("button");
    button.innerHTML = "1x";
    button.classList.add("twoTimesButton");

    button.addEventListener("click", () => {
      const audio = document.querySelectorAll("audio");

      const styleButton = document.getElementsByClassName("twoTimesButton");
      //   console.log(styleButton);

      const playbackRateCurrent = localStorage.getItem("playbackRate");
      //   console.log(playbackRateCurrent);

      if (audio.length > 0) {
        audio.forEach((childItem) => {
          if (parseInt(playbackRateCurrent) + 1 < 5) {
            localStorage.setItem(
              "playbackRate",
              String(parseInt(playbackRateCurrent) + 1)
            );

            childItem.playbackRate = parseInt(playbackRateCurrent) + 1;
            button.innerHTML = `${parseInt(playbackRateCurrent) + 1}x`;
            styleButton[0].style.color = "#ff4040";
          } else {
            localStorage.setItem("playbackRate", 1);

            childItem.playbackRate = 1;
            button.innerHTML = "1x";
            styleButton[0].style.color = "#808080";
          }
        });
      }
    });

    header.appendChild(button);
  }
}, 1000);
