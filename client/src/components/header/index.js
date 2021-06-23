import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart-icon.png";

const Header = (props) => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <header className={scroll ? "headerWrapperAct" : "headerWrapper"}>
      {/* logo */}
      <Link to="/" className="logo">
        <img src={logo} alt="placeholder-logo" />
      </Link>

      <button className="cartBtn">
        <img src={cart} alt="cart-icon" />
      </button>
    </header>
  );
};

export default Header;
