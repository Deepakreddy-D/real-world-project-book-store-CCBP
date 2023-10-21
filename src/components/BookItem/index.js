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

const BookItem = () => {
    return (
        <div className = "book-item-container">
            <img src={image} alt={title} className="book-image" />
            <h1 className="book-title">{title}</h1>
            <p className="book-subtitle">{subtitle}</p>
            <p className="book-price">{price}</p>
        </div>

    )
}

export default BookItem