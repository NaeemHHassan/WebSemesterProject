import React, { Component } from "react";
import authService from "../services/authService";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBox from "./searchBox";
import * as bookService from "../services/bookService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Button from "react-bootstrap/Button";

class Book extends Component {
  state = {
    books: [],
    searchQuery: ""
  };

  async componentDidMount() {
    const { data } = await bookService.getBooks();
    this.setState({ books: data });
  }
  handleUpdate = book => {
    localStorage.setItem("_id", book._id);
    console.log(book);
    this.props.history.push("/updateABook");
  };
  handleDelete = async book => {
    await bookService.deleteABook(book._id);
    const { data } = await bookService.getBooks();
    this.setState({ books: data });
    toast.success("Deleted Successfully");
  };

  handleSearch = async query => {
    this.setState({ searchQuery: query });
    let searchQuery = this.state.searchQuery;
    let books = this.state.book;
    const allBooks = this.state.books;
    if (searchQuery) {
      books = allBooks.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
      this.setState({ books: books });
    } else {
      const { data } = await bookService.getBooks();
      this.setState({ books: data });
    }
  };
  render() {
    const { searchQuery } = this.state;
    if (!authService.getCurrentUser()) {
      return <h1>Access Denied</h1>;
    }
    return (
      <React.Fragment>
        <h1>Books in DB</h1>
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        <Link to="/addNewBook">
          <Button>
            <i className="fa fa-plus" style={{ margin: "5px" }}></i>
            Add New
          </Button>
        </Link>
        <Row>
          <Col>
            <table className="table">
              <thead className="thead">
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Price</th>
                  <th>InStock</th>
                  <th>Publication Date</th>
                  <th>Ratting</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books.map(b => (
                  <tr key={b._id}>
                    <td>{b.title}</td>
                    <td>{b.author}</td>
                    <td>{b.price}</td>
                    <td>{b.quantityInStock}</td>
                    <td>{b.publicationDate}</td>
                    <td>{b.ratting}</td>
                    <td>
                      <Button
                        className="btn-danger"
                        style={{ margin: "10px" }}
                        onClick={() => this.handleDelete(b)}
                      >
                        <i className="fa fa-trash"></i> Delete
                      </Button>

                      <Button
                        className="btn-info"
                        style={{ margin: "10px" }}
                        onClick={() => {
                          this.handleUpdate(b);
                        }}
                      >
                        <i className="fa fa-edit" x></i>
                        Update
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Book;
