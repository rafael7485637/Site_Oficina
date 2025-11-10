// Inicializador do slider.
// Exportamos uma função para ser chamada quando o componente React montar
// (a função retorna um `cleanup` para remover listeners quando o
// componente desmontar).
export default function initSlider(options = {}) {
    const opts = Object.assign({ autoPlay: true, interval: 4000 }, options)

    // procura o container do slider na página
    const slider = document.querySelector('.container-slider')
    if (!slider) return () => {}

    // seleciona slides, botões e indicadores dentro do container
    const slides = slider.querySelectorAll('.container-images .item')
    const indicators = slider.querySelectorAll('.indicator')
    const prevButton = slider.querySelector('#prev-button')
    const nextButton = slider.querySelector('#next-button')

    let currentIndex = 0
    let autoplayTimer = null

    // Mostra o slide com o índice dado e atualiza classes
    function showSlide(index) {
        // corrige índice para ficar dentro do intervalo
        const i = (index + slides.length) % slides.length
        
        // atualiza slides
        slides.forEach((s, idx) => {
            if (idx === i) s.classList.add('active')
            else s.classList.remove('active')
        })
        
        // atualiza indicadores
        indicators.forEach((ind, idx) => {
            if (idx === i) ind.classList.add('active')
            else ind.classList.remove('active')
        })
        
        currentIndex = i
    }

    // Avança para o próximo slide
    function next() {
        showSlide(currentIndex + 1)
    }

    // Volta para o slide anterior
    function prev() {
        showSlide(currentIndex - 1)
    }

    // Inicia autoplay (se habilitado)
    function startAutoplay() {
        if (!opts.autoPlay) return
        stopAutoplay()
        autoplayTimer = setInterval(() => {
            next()
        }, opts.interval)
    }

    // Para autoplay
    function stopAutoplay() {
        if (autoplayTimer) {
            clearInterval(autoplayTimer)
            autoplayTimer = null
        }
    }

    // Listeners
    function onPrevClick(e) {
        e && e.preventDefault()
        prev()
        // reinicia o autoplay para respeitar interação do usuário
        startAutoplay()
    }

    function onNextClick(e) {
        e && e.preventDefault()
        next()
        startAutoplay()
    }

    function onKeydown(e) {
        if (e.key === 'ArrowLeft') prev()
        if (e.key === 'ArrowRight') next()
    }

    // Handler para clique nos indicadores
    function onIndicatorClick(e) {
        const indicator = e.currentTarget
        const slideIndex = parseInt(indicator.dataset.slide)
        if (!isNaN(slideIndex)) {
            showSlide(slideIndex)
            startAutoplay()
        }
    }

    // Registra event listeners se os elementos existirem
    if (prevButton) prevButton.addEventListener('click', onPrevClick)
    if (nextButton) nextButton.addEventListener('click', onNextClick)
    indicators.forEach(ind => ind.addEventListener('click', onIndicatorClick))
    window.addEventListener('keydown', onKeydown)

    // Inicializa mostrando o primeiro slide e inicia autoplay
    showSlide(currentIndex)
    startAutoplay()

    // cleanup: remove listeners e timers
    function cleanup() {
        if (prevButton) prevButton.removeEventListener('click', onPrevClick)
        if (nextButton) nextButton.removeEventListener('click', onNextClick)
        indicators.forEach(ind => ind.removeEventListener('click', onIndicatorClick))
        window.removeEventListener('keydown', onKeydown)
        stopAutoplay()
    }

    // devolve o cleanup para ser usado por quem chamou initSlider
    return cleanup
}