const images = document.querySelectorAll('.img')

window.addEventListener('scroll', checkImages)

checkImages()

function checkImages() {
  const triggerBottom = window.innerHeight / 5 * 4

  images.forEach(img => {
    const imgTop = img.getBoundingClientRect().top

    if(imgTop < triggerBottom) {
      img.classList.add('show')
    } else {
      img.classList.remove('show')
    }
  })
}