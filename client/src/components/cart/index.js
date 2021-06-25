import deleteIcon from "../../assets/delete.png";
import cartImage from "../../assets/cart-image.jpg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dropCartItem,
  updateCartAdd,
  updateCartSub,
  placeNewOrder,
  emptyCart,
} from "../../actions";
import "./style.css";

function Cart(props) {
  const showCart = props.open;
  const hideCartModal = props.close;
  const orderStep = props.cartStep;
  const closeCart = props.handleCartClose;
  const toCartStep0 = props.handleOrderStep0;
  const toCartStep1 = props.handleOrderStep1;
  const responseOpen = props.handleResponseModalOpen;

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleDecrease = (_item) => {
    if (_item.orderQuantity > 1) {
      dispatch(updateCartSub(cartItems, _item));
    } else {
      dispatch(dropCartItem(cartItems, _item));
    }
  };

  const handleIncrease = (_item) => {
    if (_item.orderQuantity < _item.quantity) {
      dispatch(updateCartAdd(cartItems, _item));
    }
  };

  const calculateCartTotal = () => {
    var total = 0;
    for (let item of cartItems) {
      var subTotal = item.price * item.orderQuantity;
      total += subTotal;
    }
    return total.toFixed(2);
  };

  const extractCartItems = () => {
    var myArray = [];
    for (let item of cartItems) {
      var object = {
        _id: item.productId,
        _qty: item.orderQuantity,
      };
      myArray.push(object);
    }
    return myArray;
  };

  var total = calculateCartTotal();
  var items = extractCartItems();
  const orderData = { name, address, contact, items, total };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    closeCart();
    responseOpen();
    dispatch(placeNewOrder(orderData));
    dispatch(emptyCart());
  };

  return (
    <>
      <div
        className={showCart ? "cartModalActive" : "cartModal"}
        onClick={hideCartModal}
      ></div>
      <div className={showCart ? "cartContainerActive" : "cartContainer"}>
        {/* cart-header */}
        <div className="cartHeader">
          <img src={cartImage} alt="" />
          <div className="imgCover"></div>
          <i
            className="fas fas fa-arrow-right"
            onClick={hideCartModal}
            id="closeCartBtn"
          ></i>
          <h1>Shopping Cart</h1>
          <p style={{ color: "#ffc16e" }}>Products</p>
          <p style={orderStep > 0 ? { color: "#ffc16e" } : null}>
            <i className="fas fa-chevron-right"></i>
          </p>
          <p style={orderStep > 0 ? { color: "#ffc16e" } : null}>Checkout</p>
        </div>

        {/* cart-products */}
        {orderStep === 0 ? (
          <div className="cartBody">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index} className="cartItemsRow">
                  <img src={item.imageRef} alt={item.title + " photo"} />
                  <div className="itemDetailsBox">
                    <p>{item.title}</p>
                    <p>{item.quantity} pieces left</p>
                    <p>${item.price}</p>
                    <p>
                      SubTotal: ${(item.price * item.orderQuantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="itemControlBox">
                    <i
                      className="fas fa-minus"
                      onClick={() => handleDecrease(item)}
                    ></i>
                    <p>{item.orderQuantity}</p>
                    <i
                      className="fas fa-plus"
                      onClick={() => handleIncrease(item)}
                      style={
                        item.orderQuantity === item.quantity
                          ? {
                              cursor: "not-allowed",
                              border: "2px solid rgba(156, 173, 188, 0.3)",
                              color: "rgba(0, 0, 0, 0.3)",
                            }
                          : null
                      }
                    ></i>
                  </div>
                  <img
                    src={deleteIcon}
                    alt="remove"
                    onClick={() => dispatch(dropCartItem(cartItems, item))}
                  />
                </div>
              ))
            ) : (
              <h2>"No items in your cart!"</h2>
            )}
            {cartItems.length > 0 ? (
              <div className="cartTotalBox">
                <p>Cart Total:</p>
                <p>${calculateCartTotal()}</p>
              </div>
            ) : null}
          </div>
        ) : null}

        {/* cart-checkout */}
        {orderStep === 1 ? (
          <div className="cartBody">
            <button id="cartBtnC" onClick={toCartStep0}>
              <i className="fas fas fa-arrow-left"></i> Go back
            </button>
            <h1>Order Summary</h1>
            <table className="orderSummaryTable">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>SubTotal</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index} id="tRows">
                    <td id="indCell">{index + 1}. </td>
                    <td id="productNameCell">{item.title}</td>
                    <td>{item.orderQuantity}</td>
                    <td>
                      {item.orderQuantity}
                      {" × "}
                      {item.price} ={" "}
                      {(item.price * item.orderQuantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="cartTotalBox">
              <p>Order Total:</p>
              <p>${calculateCartTotal()}</p>
            </div>
            <div className="cartTotalBox">
              <p>Shipping cost:</p>
              <p>${0}</p>
            </div>
            <div className="cartTotalBox">
              <p>Coupon:</p>
              <p>${0}</p>
            </div>
            <div className="cartTotalBox">
              <p>Total payable:</p>
              <p>${calculateCartTotal()}</p>
            </div>

            <form id="orderForm" onSubmit={handlePlaceOrder}>
              <h1>Shipping Info</h1>
              <label>name*</label>
              <input
                type="text"
                required
                maxLength="120"
                minLength="3"
                onChange={(e) => setName(e.target.value)}
              />
              <label>address*</label>
              <input
                type="text"
                required
                maxLength="120"
                minLength="3"
                onChange={(e) => setAddress(e.target.value)}
              />
              <label>contact*</label>
              <input
                type="text"
                required
                maxLength="120"
                minLength="3"
                onChange={(e) => setContact(e.target.value)}
              />
              <p>
                <i>
                  <b>
                    Note: input validation is skipped intentionally, just enter
                    minimum 3 characters
                  </b>
                </i>
              </p>
            </form>
          </div>
        ) : null}

        {/* cart-footer */}
        <div className="cartFooter">
          {orderStep === 0 ? (
            cartItems.length > 0 ? (
              <>
                <button id="cartBtnA" onClick={toCartStep1}>
                  Checkout
                </button>
                <button id="cartBtnB" onClick={() => dispatch(emptyCart())}>
                  Clear Cart
                </button>
              </>
            ) : (
              <button id="cartBtnA" onClick={hideCartModal}>
                Continue Shopping
              </button>
            )
          ) : null}
          {orderStep === 1 ? (
            <button id="cartBtnA" type="submit" form="orderForm">
              place order
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Cart;
