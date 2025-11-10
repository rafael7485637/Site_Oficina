import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <h1 className="logo">REACTLAB</h1>
      <ul className="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
