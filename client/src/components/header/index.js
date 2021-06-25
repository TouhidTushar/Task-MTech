import "./style.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart-icon.png";
import { useSelector } from "react-redux";
import Cart from "../cart";

function Header() {
  const [scroll, setScroll] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [responseModal, setResponseModal] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [orderStep, setOrderStep] = useState(0);
  const order = useSelector((state) => state.order);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartState = useSelector((state) => state.cart);

  useEffect(() => {
    setCartCount(cartItems.length);
    // eslint-disable-next-line
  }, [cartState]);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const showCartModal = () => {
    setOrderStep(0);
    setShowCart(true);
    document.body.style.overflow = "hidden";
  };

  const hideCartModal = () => {
    setShowCart(false);
    document.body.style.overflow = "unset";
  };

  const hideResponseModal = () => {
    setResponseModal(false);
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
        <span
          style={
            cartItems.length > 0 ? { display: "unset" } : { display: "none" }
          }
        >
          {cartCount}
        </span>
      </button>

      {/* cart-modal */}
      <Cart
        open={showCart}
        close={hideCartModal}
        cartStep={orderStep}
        handleOrderStep0={() => setOrderStep(0)}
        handleOrderStep1={() => setOrderStep(1)}
        handleCartClose={() => setShowCart(false)}
        handleResponseModalOpen={() => setResponseModal(true)}
      ></Cart>

      {/* response modal */}

      <div
        onClick={hideResponseModal}
        className={responseModal ? "responseModalActive" : "responseModal"}
      ></div>
      <div
        className={responseModal ? "modalContainerActive" : "modalContainer"}
      >
        <div className="modalUpperSection">
          <i
            className="fas fa-times"
            id="modalCloseBtn"
            onClick={hideResponseModal}
          ></i>
          {order.loading ? (
            <div className="loadingWheel"></div>
          ) : order.result ? (
            <div className="responseSign">
              <i className="fas fa-check"></i>
              <div className="signCover"></div>
            </div>
          ) : (
            <div className="responseSign">
              <i className="fas fa-exclamation"></i>
              <div className="signCover"></div>
            </div>
          )}
        </div>
        <div className="modalLowerSection">
          {order.loading ? (
            <div>
              <h1>Placing your order...</h1>
            </div>
          ) : (
            <div>
              <h1>{order.serverRes}</h1>
              {order.serverRes === "" ? null : order.result === true ? (
                <h3>Our representative will contact you shortly. Thank you.</h3>
              ) : (
                <h3>
                  Please try again. If you see this message multiple times
                  contact our 24/7 support team. Thank you
                </h3>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
