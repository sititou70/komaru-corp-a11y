const bgVideo = document.querySelector(".hero .bg");
const stopButton = document.querySelector(".hero .stop");

stopButton.addEventListener("click", () => {
  bgVideo.pause();
});
