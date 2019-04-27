//Images array for carousel.
const images = [
  {
    title: "Lorem ipsun1",
    src: "./images/main-image.png",
  },
  {
    title: "Lorem ipsun1",
    src: "./images/image.jpg",
  },
  {
    title: "Lorem ipsun1",
    src: "./images/image2.jpg",
  },
];

let currentImageIndex = 0;

$("#left").click(function () {

  if (images[currentImageIndex - 1]) {
    let dots = document.getElementsByClassName("selector");
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" image--selected", "");
    }
    currentImageIndex = currentImageIndex - 1;
    dots[currentImageIndex].className += " image--selected";
    const image = images[currentImageIndex];

    $('#image').attr('src', image.src);
  }
});

$("#right").click(function () {
  if (images[currentImageIndex + 1]) {
    let dots = document.getElementsByClassName("selector");
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" image--selected", "");
    }
    currentImageIndex = currentImageIndex + 1;
    dots[currentImageIndex].className += " image--selected";
    const image = images[currentImageIndex];
    $('#image').attr('src', image.src);
  }
});