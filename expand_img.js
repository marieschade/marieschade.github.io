function expand_img(img){
    //console("Expand Image")
    console.log(img)
    var modalImg = document.getElementById("modal_expand_img")
    var modal = document.getElementById("myModal")
    modal.style.display = "block";
    modalImg.src = img.src;
    //captionText.innerHTML = this.alt;
  }

  function close_modal() { 
    var modal = document.getElementById("myModal")
    modal.style.display = "none";
  }