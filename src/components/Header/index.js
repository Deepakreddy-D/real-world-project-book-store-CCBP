import { FaBook, FaShoppingBag } from "react-icons/fa";
import "./index.css"

const Header = () => {
    return (
        <nav className="header-container">
          <div className="header-content-container">
            <div className="logo-container">
                <div className="logo">C</div>
                CROSSWORD
            </div>
    
            <ul className="nav-items-container">
              <li className="icon-container">
                <FaBook className="icon" />
                <span className="icon-name">Book List</span>
              </li>
              <li className="icon-container">
                <FaShoppingBag className="icon" />
                <span className="icon-name">Cart</span>
              </li>
            </ul>
          </div>
        </nav>
      );
}

export default Header