const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

const clearActiveClasses = () => {
    slides.forEach((slide) => {
        slide.style.transition = 'all 500ms ease-in'
        slide.classList.remove('active')
    })
}
