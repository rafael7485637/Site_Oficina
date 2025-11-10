import "./footer.css"


function Footer() {
  return(
    <div className="container_footer">
        <div className="react-img">
            <img src="/src/assets/img/react.png" alt="" />
        </div>
      <div className="links-footer">
        <ul>
            <li>
            <a href="https://www.instagram.com/aninhad.15" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
                <span>Ana Paula Deon</span>
            </a>
            </li>
            <li>
            <a href="https://www.instagram.com/rafaelzanelattoo?igsh=MTg5ajZwaGZtYjE3eg==" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
                <span>Rafael Zanelatto</span>
            </a>
            </li>
        </ul>
    </div>

    </div>
  )
}

export default Footer;