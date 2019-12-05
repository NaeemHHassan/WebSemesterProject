import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";
import * as bookService from "../services/bookService";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";

class UpdateABook extends Form {
  state = {
    data: {
      _id: "",
      title: "",
      description: "",
      price: "",
      quantityInStock: "",
      author: "",
      publicationDate: ""
    },
    errors: {}
  };
  async componentDidMount() {
    const id = localStorage.getItem("_id");
    const book = await bookService.getBookById(id);

    this.setState({ _id: id });
    this.setState({ data: book.data });
  }

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    description: Joi.string()
      .required()
      .label("Description"),
    price: Joi.string()
      .required()
      .label("Price"),
    quantityInStock: Joi.string()
      .required()
      .label("Quantity"),
    author: Joi.string()
      .required()
      .label("Author"),
    publicationDate: Joi.string()
      .required()
      .label("PublicationDate")
  };
  doSubmit = async () => {
    try {
      const { data } = this.state;
      await bookService.updateABook(data);
      localStorage.removeItem("_id");
      toast.success("Book Saved");
      this.props.history.push("/books");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.title = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (!auth.getCurrentUser()) {
      return <h1>Access Denied</h1>;
    }
    return (
      <div>
        <h1>Update A Book</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("author", "Author")}
          {this.renderInput("description", "Description")}
          {this.renderInput("price", "Price")}
          {this.renderInput("quantityInStock", "QuantityInStock")}
          {this.renderInput("publicationDate", "PublicationDate")}
          <Button onClick={this.doSubmit}>Save</Button>
        </form>
      </div>
    );
  }
}

export default UpdateABook;
