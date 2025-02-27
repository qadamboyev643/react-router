import { Link } from "react-router"
const Header = () => {
  return (
    <>
    <header>
        <div className="logo">Mustafo's shop</div>
        <nav>
            <ul className="nav-link">
                <li className="nav-item">    
                    <Link to={"/"}>Shop</Link>
                </li>
                <li className="nav-item">    
                    <Link to={"/contact"}>Contact</Link>
                </li>
                <li className="nav-item">    
                    <Link to={"/card"}>Card</Link>
                </li>
            </ul>
        </nav>
    </header>
    
    </>
  )
}

export default Header