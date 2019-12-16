import React, { Component } from "react";
import * as bookService from "../services/bookService";
import img from "../images/productImage.jpg";
import * as b from "react-bootstrap";
import { toast } from "react-toastify";

class ShowBookInfo extends Component {
  state = { book: "" };

  async componentDidMount() {
    if (this.props.location._id) {
      const res = await bookService.getBookById(this.props.location._id._id);
      this.setState({ book: res.data });
    }

    if (!this.props.location._id) {
      this.props.history.push("/home");
    }
  }

  handleAddToCart = () => {
    this.props.addItemToCart(this.state.book._id);
    this.props.history.push("/");
    toast.success("Added To Cart");
  };
  render() {
    return (
      <React.Fragment>
        <b.Row>
          <h1 style={{ textAlign: "center" }}>
            showing book {this.state.book.title}
          </h1>
        </b.Row>
        <b.Row>
          <b.Col sm="6">
            <b.Image src={img} style={{ width: "600px" }}></b.Image>
          </b.Col>
          <b.Col>
            <h3>Description</h3>
            <p>{this.state.book.description}</p>
            <b.Button
              className="btn btn-primary"
              onClick={this.handleAddToCart}
            >
              Add To Cart
            </b.Button>
          </b.Col>
        </b.Row>
      </React.Fragment>
    );
  }
}

export default ShowBookInfo;
