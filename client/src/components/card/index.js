import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart } from "../../actions";
import "./style.css";

function Card(props) {
  const item = props.data;
  const dispatch = useDispatch();
  const cartItmes = useSelector((state) => state.cart.cartItems);
  const [addToCart, setAddToCart] = useState(false);
  const [productQty, setProductQty] = useState(1);

  const handleDecrease = () => {
    if (productQty > 1) {
      setProductQty(productQty - 1);
    }
  };

  const handleIncrease = () => {
    if (productQty < item.quantity) {
      setProductQty(productQty + 1);
    }
  };

  const calculateOfferPrice = () => {
    var offer = item.offer / 100;
    var newPrice = item.price - item.price * offer;
    return newPrice.toFixed(2);
  };

  const handleAddToCart = () => {
    var _item = {
      ...item,
      price: calculateOfferPrice(),
      orderQuantity: productQty,
    };
    dispatch(addItemsToCart(cartItmes, _item));
    setProductQty(1);
  };

  return (
    <div className="cardWrapper">
      <div className="card">
        <div className={addToCart ? "imgBoxActive" : "imgBox"}>
          <img src={item.imageRef} alt={item.title + " photo"} />
        </div>
        <div className="detailsBox">
          <p>{item.title}</p>
          {item.offer !== 0 ? (
            <p>
              ${calculateOfferPrice()} <i className="oldPrice">${item.price}</i>
            </p>
          ) : (
            <p>${item.price}</p>
          )}
          {addToCart ? (
            <div className="productQuantityControl">
              <i
                className="fas fa-minus"
                onClick={handleDecrease}
                style={
                  productQty === 1
                    ? { cursor: "not-allowed", opacity: 0.5 }
                    : null
                }
              ></i>
              <span>{productQty}</span>
              <i
                className="fas fa-plus"
                onClick={handleIncrease}
                style={
                  productQty === item.quantity
                    ? { cursor: "not-allowed", opacity: 0.5 }
                    : null
                }
              ></i>
              <button
                onClick={() => {
                  setAddToCart(false);
                  setProductQty(1);
                }}
              >
                Cancel
              </button>
            </div>
          ) : null}
        </div>
      </div>
      {item.quantity === 0 ? (
        <button className="dummyBtn">Out of stock</button>
      ) : addToCart ? (
        <button
          className="addToCartBtn"
          onClick={() => {
            setAddToCart(false);
            handleAddToCart();
          }}
        >
          <i className="fas fa-shopping-cart"></i> Add to cart
        </button>
      ) : (
        <button className="addToCartBtn" onClick={() => setAddToCart(true)}>
          Buy Now
        </button>
      )}
    </div>
  );
}

export default Card;
