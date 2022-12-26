const imagenes = document.querySelectorAll('.img');
const containerImage = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const copy = document.querySelector('.copy');

imagenes.forEach(image =>{
  image.addEventListener('click', ()=>{
      addImage(image.getAttribute('src'),image.getAttribute('alt'))
      
  })
})

const addImage = (src, alt)=>{
  containerImage.classList.toggle('move');
  imageContainer.src = src;
  copy.innerHTML = alt;
}

containerImage.addEventListener('click', ()=>{
    containerImage.classList.toggle('move');
})