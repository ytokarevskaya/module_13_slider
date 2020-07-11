const imageArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg"];
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];

btnPrev.onclick = () => {
  let sliderImage = document.getElementById("sliderImage");
  let currentImage = sliderImage.getAttribute("src").slice(-6);
  let indexOfCurrent = imageArray.indexOf(currentImage);

  let currentOpacity = 1;

  let intervalId = setInterval(() => {
    sliderImage.style.opacity = currentOpacity.toString();
    if (currentOpacity <= 0) {
      clearInterval(intervalId);
    }
    currentOpacity -= 0.01;
  }, 5);

  setTimeout(() => {
    if (indexOfCurrent === 0) {
      sliderImage.setAttribute("src", `assets/img/${imageArray[imageArray.length - 1]}`);
    } else {
      sliderImage.setAttribute("src", `assets/img/${imageArray[indexOfCurrent - 1]}`);
    }
    let intervalId = setInterval(() => {
      sliderImage.style.opacity = currentOpacity.toString();
      if (currentOpacity >= 1) {
        clearInterval(intervalId);
      }
      currentOpacity += 0.01;
    }, 5);
  }, 500)
}

btnNext.onclick = () => {
  let sliderImage = document.getElementById("sliderImage");
  let currentImage = sliderImage.getAttribute("src").slice(-6);
  let indexOfCurrent = imageArray.indexOf(currentImage);

  let currentOpacity = 1;

  let timerId = setInterval(() => {
    sliderImage.style.opacity = currentOpacity.toString();
    if (currentOpacity <= 0) {
      clearInterval(timerId);
    }
    currentOpacity -= 0.01;
  }, 5);

  setTimeout(() => {
    if (indexOfCurrent === imageArray.length - 1) {
      sliderImage.setAttribute("src", `assets/img/${imageArray[0]}`);
    } else {
      sliderImage.setAttribute("src", `assets/img/${imageArray[indexOfCurrent + 1]}`);
    }
    let timerId = setInterval(() => {
      sliderImage.style.opacity = currentOpacity.toString();
      if (currentOpacity >= 1) {
        clearInterval(timerId);
      }
      currentOpacity += 0.01;
    }, 5);
  }, 500)
}

function pageReady() {
  let sliderImage = document.getElementById("sliderImage");
  sliderImage.setAttribute("src", `assets/img/${randomImage}`);
  sliderImage.setAttribute("data-img", randomImage);
}

document.addEventListener("DOMContentLoaded", pageReady);