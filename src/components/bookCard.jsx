import React, { Component } from "react";
import cardImg from "../logo.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

class BookCard extends Component {
  state = {
    disable: false
  };
  handleAddToCart = _id => {
    if (this.state.disable) {
      return;
    }
    this.setState({ disable: true });
    this.props.addItemToCart(_id);
    toast.info("Item Added To Cart");
  };
  render() {
    const { name, price, author, _id } = this.props;
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
        <Link to={{ pathname: "/showBookInfo", _id: { _id } }}>
          <Image
            src={cardImg}
            className="card-img-top img-fluid img"
            alt="..."
            style={{ width: "17.5rem" }}
          />
        </Link>

        <div className="card-body" style={{ padding: "0px" }}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">By {author}</p>
          <p className="card-text">$ {price}</p>
        </div>
        <div className="card-body" style={{ color: "black" }}>
          <Button
            onClick={() => this.handleAddToCart(_id)}
            className="card-link"
            style={{ color: "black" }}
            disabled={this.state.disable}
          >
            Cart
            <i className="fa fa-cart-plus" style={{ marginLeft: "10px" }}></i>
          </Button>
          <Button className="card-link">
            Favourite
            <i className="fa fa-heart-o" style={{ marginLeft: "10px" }}></i>
          </Button>
        </div>
      </div>
    );
  }
}

export default BookCard;
