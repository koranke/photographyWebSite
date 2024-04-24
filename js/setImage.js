
function setImage() {
    // Get the image element from the URL query string
    let urlParams = new URLSearchParams(window.location.search);
    let image = urlParams.get('image');


  var img = document.getElementById('image');
  img.src = 'images/' + image + '.png';
}

window.onload = setImage;