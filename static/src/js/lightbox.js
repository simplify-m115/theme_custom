const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e=> {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src=image.src
    while(lightbox.firstChild){
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
    })
})
lightbox.addEventListener('click', e=> {
    if(e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})

$(document).ready(function(){
    $(document).bind('keydown', function(e) {
    if (e.which == 27) {
        lightbox.classList.remove('active');
    }
    });
});