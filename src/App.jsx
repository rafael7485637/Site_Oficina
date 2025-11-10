import React from "react"
import "./App.css"
import Nav from "./Nav.jsx"
import Slider from "./slider.jsx"
import Info_React from "./info_react.jsx"
import Imagens from "./imagens.jsx"
import Footer from "./footer.jsx"


function App() {
  return(
    <div className="main">
       <Nav />
       <Slider />
       <Info_React />
       <Imagens />
       <Footer />
    </div>
  )
}

export default App;