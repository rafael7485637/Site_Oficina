import "./info_react.css"
function Info_React() {
  return(
    <div className="info_container">
        <div className="info_react">
            <h1>Sobre o React</h1>
            <p>React é uma biblioteca JavaScript criada pelo Facebook para facilitar o desenvolvimento de interfaces modernas e dinâmicas. Ela é muito usada na criação de sites e aplicativos por ser rápida, flexível e fácil de reutilizar componentes. Com o React, é possível atualizar partes da página sem precisar recarregar tudo, o que deixa a navegação mais fluida. Aprender essa tecnologia é um passo importante para quem quer entrar no mundo do desenvolvimento web e criar projetos com cara de profissional.</p>
        </div>
        <div className="img">
            <img src="/src/assets/Img/img2.png" alt="Imagem React" />
        </div>
    </div>
  )
}

export default Info_React;
