import React, { Component } from "react";
import * as bookService from "../services/bookService";
import { toast } from "react-toastify";
import img from "../images/productImage.jpg";
import * as b from "react-bootstrap";

class ShowBookInfo extends Component {
  state = { book: "" };

  componentDidMount() {}
  render() {
    try {
      if (this.props.location._id) {
        const jso = JSON.stringify(this.props.location._id).split(":")[1];
        const newJsonc = jso.substring(0, jso.length - 1);

        bookService
          .getBookById(newJsonc)
          .then(res => {
            this.setState({ book: res.data });
          })
          .catch(e => {
            console.log(e);
          });
        //console.log(res.data);
      }
    } catch (e) {
      console.log(e);
    }
    if (!this.props.location._id) {
      this.props.history.push("/home");
      //return;
    }

    return (
      <React.Fragment>
        <b.Row>
          <h1 style={{ textAlign: "center" }}>
            showing book {this.state.book.title}
          </h1>
        </b.Row>
        <b.Row>
          <b.Col sm="6">
            <b.Image src={img}></b.Image>
          </b.Col>
        </b.Row>
      </React.Fragment>
    );
  }
}

export default ShowBookInfo;
