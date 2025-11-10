import "./imagens.css"


function Imagens() {
  return(
    <div className="posts">
        <div className="titulo-imagens"> 
          <h1>Oficina REACTLAB 2025</h1>
        </div>
        <div className="container-fotos">
          <div className="linha1">
            <img src="/src/assets/Img/pst1.jpg" />
            <img src="/src/assets/Img/pst2.jpg" />
            <img src="/src/assets/Img/pst3.jpg" />
          </div>
          <div className="linha2">
            <img src="/src/assets/Img/pst4.jpg" />
            <img src="/src/assets/Img/pst5.jpg" />
            <img src="/src/assets/Img/pst6.jpg" />
          </div>
        </div>
    </div>
  )
}

export default Imagens;