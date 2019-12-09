import React, { Component } from "react";
import BookCard from "./bookCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SearchBox from "./searchBox";
import * as bookService from "../services/bookService";
import _ from "lodash";

class ShowBookCards extends Component {
  state = {
    books: [],
    searchQuery: "",
    value: "",
    itemsInCart: []
  };

  getColOfBooks = colNumber => {
    const startIndex = colNumber * 3;
    const re = _(this.state.books)
      .slice(startIndex)
      .take(3)
      .value();
    return re.map(i => (
      <Col sm="4" align="center">
        <BookCard
          addItemToCart={this.props.addItemToCart}
          price={i.price}
          _id={i._id}
          name={i.title}
          description={i.description}
          author={i.author}
          publicationDate={i.publicationDate}
        ></BookCard>
      </Col>
    ));
  };
  async componentDidMount() {
    const { data } = await bookService.getBooks();
    this.setState({ books: data });
  }
  handleSearch = query => {
    this.setState({ searchQuery: query });
  };
  render() {
    const { searchQuery, books } = this.state;
    let numberOfCols = Math.ceil(books.length / 3);
    let cols = [];
    for (let i = 0; i < numberOfCols; i++) {
      cols.push(i);
    }
    return (
      <React.Fragment>
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        {cols.map(i => (
          <Row>{this.getColOfBooks(i)}</Row>
        ))}
      </React.Fragment>
    );
  }
}

export default ShowBookCards;
