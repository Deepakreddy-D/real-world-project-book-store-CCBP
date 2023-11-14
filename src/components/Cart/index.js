import Header from "../Header";
import CartItem from "../CartItem";

import CartContext from "../../context/CartContext";

import "./index.css";

const Cart = () => (
  <CartContext.Consumer>
    {(value) => {
      const { cartList, resetCart } = value;
      const isCartEmpty = cartList.length === 0
      return (
        <>
          <Header />
          <div className="cart-page-container">
            <div className="cart-content-container">
              <h1 className="cart-heading"> Your Cart </h1>
              <div className="cart-container">
                {cartList.map((cartItem) => (
                  <CartItem key={cartItem.isbn13} cartItemDetails={cartItem} />
                ))}
                {isCartEmpty
                ? <button className="checkout-button remove-button" >Continue Shopping</button> 
                : <button className="checkout-button remove-button" onClick={resetCart}>Remove all</button>}
              </div>
            </div>
            <div className="order-content-container">
              <h1 className="order-title">Order Summary</h1>
              <div className="order-summary-container">
                <div className="order-amount-container">
                  <p className="order-amount">Amount Payable:</p>
                  <h1 className="cart-price">$ %XYZ%</h1>
                </div>
                <p className="order-text">(inclusive of all taxes)</p>
                <button className="checkout-button">Checkout</button>
              </div>
            </div>
          </div>
        </>
      );
    }}
  </CartContext.Consumer>
);

export default Cart;
