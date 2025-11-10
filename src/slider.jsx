import "./slider.css"
import { useEffect } from "react"
import initSlider from "./slider.js"


function slider() {
  useEffect(() => {
    // inicializa o slider quando o componente montar e limpa quando desmontar
    const cleanup = initSlider();
    return () => cleanup && cleanup();
  }, [])

  return(
    <div className="container-slider">
      <button id="prev-button" aria-label="Anterior">
        <img src="/src/assets/Img/seta_esquerda.png" alt="Anterior" />
      </button>
      <div className="container-images">
        <img className="item active" src="/src/assets/Img/slider1.jpg" alt="Slide 1" />
        <img className="item" src="/src/assets/Img/slider2.jpg" alt="Slide 2" />
        <img className="item" src="/src/assets/Img/slider3.jpg" alt="Slide 3" />
        
        {/* Indicadores de slides */}
        <div className="slide-indicators">
          <button className="indicator active" aria-label="Ir para slide 1" data-slide="0"></button>
          <button className="indicator" aria-label="Ir para slide 2" data-slide="1"></button>
          <button className="indicator" aria-label="Ir para slide 3" data-slide="2"></button>
        </div>
      </div>
      <button id="next-button" aria-label="Próximo">
        <img src="/src/assets/Img/seta_direita.png" alt="Próximo" />
      </button>
  </div>
  )
}

export default slider;