

window.addEventListener("load", () => {
      setTimeout(() => {
        document.body.classList.add("loaded");
      }, 5000); // 5 seconds
    });
window.onload = function()
{
  setTimeout(function(){
alert("Double click on image for information");
  },7000);
};
     let images = document.querySelectorAll("#sliderc img");
    let currentIndex = 0;

    function changeImage(index) {
      images[currentIndex].classList.remove("active");
      currentIndex = (index + images.length) % images.length;
      images[currentIndex].classList.add("active");
    }

    function nextImage() {
      changeImage(currentIndex + 1);
    }

    function prevImage() {
      changeImage(currentIndex - 1);
    }

    setInterval(nextImage, 4000);
    