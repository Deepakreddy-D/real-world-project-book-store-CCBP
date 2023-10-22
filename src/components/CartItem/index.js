import {Component} from "react"
import {FaTrash} from "react-icons/fa"

import "./index.css"

const sample_data = {
    "title": "Designing Across Senses",
    "subtitle": "A Multimodal Approach to Product Design",
    "isbn13": "9781491954249",
    "price": "$27.59",
    "image": "https://itbook.store/img/books/9781491954249.png",
    "url": "https://itbook.store/books/9781491954249"
}

const {title, subtitle, image, price} = sample_data

class CartItem extends Component {
    render(){
        return (
            <div className = "cart-item-container">
                <img src={image} alt={title} className="book-image" />
                <div className = "product-info-container">
                    <h1 className="book-title">{title}</h1>
                    <p className="book-subtitle">{subtitle}</p>
                    <h1 className="book-price">{price}</h1>
                </div>
                <div className = "product-actions-container">
                    <button className = "delete-button">
                        <FaTrash className = "delete-icon"/>
                    </button>
                </div>
                <div className = "amount-container">
                    <h1 className="book-price">{price}</h1>
                </div>      
            </div>
    
        )
    }
}

export default CartItem