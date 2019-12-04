import React, { Component } from "react";
import authService from "../services/authService";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBox from "./searchBox";
import * as bookService from "../services/bookService";

class Book extends Component {
  state = {
    searchQuery: ""
  };

  componentDidMount() {
    const result = bookService.getBooks();
    console.log(result);
  }

  handleSearch = query => {
    this.setState({ searchQuery: query });
    console.log(this.state.searchQuery);
  };
  render() {
    const { searchQuery } = this.state;
    if (!authService.isAdmin()) {
      return <h1>Access Denied</h1>;
    }
    return (
      <React.Fragment>
        <h1>Books in DB</h1>
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        <Row>
          <Col>
            <table class="table">
              <thead class="thead">
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>InStock</th>
                  <th>Publication Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">22</td>
                  <td>3322222222</td>
                  <td>4534</td>
                  <td>4534</td>
                  <td>
                    <a href="#.com">
                      <i className="fa fa-eye" style={{ margin: "10px" }}></i>
                    </a>
                    <a href="#.com">
                      <i className="fa fa-trash" style={{ margin: "10px" }}></i>
                    </a>
                    <a href="#.co">
                      <i
                        className="fa fa-edit"
                        style={{ margin: "10px" }}
                        x
                      ></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td scope="row">22</td>
                  <td>3322222222</td>
                  <td>4534</td>
                  <td>4534</td>
                  <td>
                    <a href="#.com">
                      <i className="fa fa-eye" style={{ margin: "10px" }}></i>
                    </a>
                    <a href="#.com">
                      <i className="fa fa-trash" style={{ margin: "10px" }}></i>
                    </a>
                    <a href="#.co">
                      <i
                        className="fa fa-edit"
                        style={{ margin: "10px" }}
                        x
                      ></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Book;
