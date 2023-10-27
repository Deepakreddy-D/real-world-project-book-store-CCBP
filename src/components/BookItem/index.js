import "./index.css"

const BookItem = (props) => {
    const {bookItemDetails} = props
    const {title, subtitle, image, price, isbn13} = bookItemDetails
    return (
        <div key={isbn13} className = "book-item-container">
            <img src={image} alt={title} className="book-image" />
            <h1 className="book-title">{title}</h1>
            <p className="book-subtitle">{subtitle}</p>
            <p className="book-price">{price}</p>
        </div>
    )
}

export default BookItem