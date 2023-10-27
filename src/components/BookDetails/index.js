import { Component } from "react";

import Header from "../Header";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";

import "./index.css";

const book = {
  error: "0",
  title: "Securing DevOps",
  subtitle: "Security in the Cloud",
  authors: "Julien Vehent",
  publisher: "Manning",
  isbn10: "1617294136",
  isbn13: "9781617294136",
  pages: "384",
  year: "2018",
  rating: "5",
  desc: "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ...",
  price: "$26.98",
  image: "https://itbook.store/img/books/9781617294136.png",
  url: "https://itbook.store/books/9781617294136",
  pdf: {
    "Chapter 2": "https://itbook.store/files/9781617294136/chapter2.pdf",
    "Chapter 5": "https://itbook.store/files/9781617294136/chapter5.pdf",
  },
};

const {
  title,
  subtitle,
  authors,
  price,
  desc,
  image,
  year,
  publisher,
  isbn10,
  isbn13,
  rating,
  pages,
} = book;

class BookDetails extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="book-details-container">
          <div className="book-details-content-container">
            <div className="book-basic-details-container">
              <div className="book-details-image-container">
                <img src={image} alt={title} className = "book-details-image"/>
              </div>
              <div className="book-other-basic-details">
                <h1 className="book-details-heading book-details-title">
                  {title}
                </h1>
                <p className="book-details-subtitle">{subtitle}</p>
                <p className="book-details-author">{authors}</p>
                <p className="book-details-release-year">
                  Publication Year: {year}
                </p>
                <hr className="horizontal-rule display" />
                <p className="book-details-price">{price}</p>
                <div className="buttons-container">
                  <button className="book-details-button">Add to Cart</button>
                </div>
              </div>
            </div>
            <hr className="horizontal-rule" />
            <div>
              <h1 className="book-details-heading">Product Description</h1>
              <p>{desc}</p>
            </div>
            <hr className="horizontal-rule" />
            <div>
              <h1 className="book-details-heading">Product Details</h1>
              <table>
                <tbody>
                  <tr>
                    <th>Title</th>
                    <td>{title}</td>
                  </tr>
                  <tr>
                    <th>Subtitle</th>
                    <td>{subtitle}</td>
                  </tr>
                  <tr>
                    <th>Authors</th>
                    <td>{authors}</td>
                  </tr>
                  <tr>
                    <th>Publisher</th>
                    <td>{publisher}</td>
                  </tr>
                  <tr>
                    <th>ISBN10</th>
                    <td>{isbn10}</td>
                  </tr>
                  <tr>
                    <th>ISBN13</th>
                    <td>{isbn13}</td>
                  </tr>
                  <tr>
                    <th>Pages</th>
                    <td>{pages}</td>
                  </tr>
                  <tr>
                    <th>Year</th>
                    <td>{year}</td>
                  </tr>
                  <tr>
                    <th>Rating</th>
                    <td>{rating}</td>
                  </tr>
                  <tr>
                    <th>Price</th>
                    <td>{price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr className="horizontal-rule" />
          </div>
        </div>
        <Loader/>
        <ErrorMessage/>
      </>
    );
  }
}

export default BookDetails;
