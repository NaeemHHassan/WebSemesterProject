import React from "react";
import cardImg from "../logo.jpg";
import Image from "react-bootstrap/Image";

const BookCard = props => {
  const { name, price, author } = props;
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        margin: "15px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      }}
    >
      <Image
        className="img"
        src={cardImg}
        className="card-img-top img-fluid"
        alt="..."
        style={{ width: "17.5rem" }}
      />
      <div className="card-body" style={{ padding: "0px" }}>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">By {author}</p>
        <p className="card-text">$ {price}</p>
      </div>
      <div className="card-body" style={{ color: "black" }}>
        <a href="noo.com" className="card-link" style={{ color: "black" }}>
          Cart
          <i className="fa fa-cart-plus" style={{ marginLeft: "10px" }}></i>
        </a>
        <a href=".cmom" className="card-link">
          Favourite
          <i className="fa fa-heart-o" style={{ marginLeft: "10px" }}></i>
        </a>
      </div>
    </div>
  );
};

export default BookCard;
