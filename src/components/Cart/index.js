import {Component} from "react"

import Header from "../Header"
import CartItem from "../CartItem"

import "./index.css"

class Cart extends Component {
    render(){
        return (
            <>
                <Header/>
                <div className = "cart-page-container">
                    <div className = "cart-content-container"> 
                        <h1 className = "cart-heading"> Your Cart</h1>
                        <div className = "cart-container">
                            <CartItem/>
                        </div> 
                    </div>
                    <div className = "order-content-container">
                        <h1 className="order-title">Order Summary</h1>
                        <div className="order-summary-container">
                            <div className="order-amount-container">
                                <p className="order-amount">Amount Payable:</p>
                                <h1 className="cart-price">$ %XYZ%</h1>
                            </div>
                            <p className="order-text">(inclusive of all taxes)</p>
                            <button className="checkout-button">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>             
            </>

        );
    }
}

export default Cart