import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart-icon.png";
import { useSelector } from "react-redux";

const Header = (props) => {
  const [scroll, setScroll] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const showCartModal = () => {
    setShowCart(true);
    document.body.style.overflow = "hidden";
  };

  const hideCartModal = () => {
    setShowCart(false);
    document.body.style.overflow = "unset";
  };

  return (
    <header className={scroll ? "headerWrapperAct" : "headerWrapper"}>
      {/* logo */}
      <Link to="/" className="logo">
        <img src={logo} alt="placeholder-logo" />
      </Link>

      {/* cart-button */}
      <button className="cartBtn" onClick={showCartModal}>
        <img src={cart} alt="cart-icon" />
        <span>{cartItems.length > 0 ? cartItems.length : null}</span>
      </button>

      {/* cart-modal */}
      <div className={showCart ? "cartModalActive" : "cartModal"}>
        <div className="cartContainer">
          <button onClick={hideCartModal}>Close</button>
          <h1>Cart</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
