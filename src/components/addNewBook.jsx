import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";
import * as bookService from "../services/bookService";
import { toast } from "react-toastify";

class AddNewBook extends Form {
  state = {
    data: {
      title: "",
      description: "",
      price: "",
      quantityInStock: "",
      author: "",
      publicationDate: ""
    },
    errors: {}
  };

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
      console.log(data);
      await bookService.addBook(data);
      toast.success("Book Saved");
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/books";
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
        <h1>Add A Book</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("author", "Author")}
          {this.renderInput("description", "Description")}
          {this.renderInput("price", "Price")}
          {this.renderInput("quantityInStock", "quantityInStock")}
          {this.renderInput("publicationDate", "PublicationDate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default AddNewBook;
