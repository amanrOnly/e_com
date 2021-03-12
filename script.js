// let modal = document.getElementById('idd1'); 
// window.onclick = function(event) { 
// if (event.target == modal) { 
// modal.style.display = "none"; 
//   } 
// }

function visible(){
  if(document.querySelector(".modal").style.display == "none"){
    document.querySelector(".modal").style.display = "block";
  }

  else{
    document.querySelector(".modal").style.display = "none";
  }
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3500);
}

let items_count = 0;

function total_items(){
  ++items_count;
  window.alert("YOUR ITEM HAS BEEN ADDED TO CART!");
  document.getElementById('num').innerHTML = items_count;
}

function current_items(){
  window.alert("Total ITEMS in the cart: " + items_count);
}

function submit(){
  window.alert("Submitted Successfully!")
}