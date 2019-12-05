import React, { Component } from "react";
import BookCard from "./bookCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SearchBox from "./searchBox";
import * as bookService from "../services/bookService";

class ShowBookCards extends Component {
  state = {
    books: [],
    searchQuery: "",
    value: ""
  };
  async componentDidMount() {
    const { data } = await bookService.getBooks();
    this.setState({ books: data });
  }
  handleSearch = query => {
    this.setState({ searchQuery: query });
    console.log(this.state.searchQuery);
  };
  render() {
    const { searchQuery, books } = this.state;
    let numberOfCols = books.length / 3;
    let col = [];
    if (numberOfCols < 1) {
      numberOfCols = 3;
      for (let i = 0; i < 3; i++) {
        col.push("1");
      }
    } else {
      for (let i = 0; i < numberOfCols; i++) {
        col.push("1");
      }
    }
    return (
      <React.Fragment>
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        {books.map(i => (
          <div align="center">
            <BookCard
              price={i.price}
              name={i.title}
              description={i.description}
              author={i.author}
              publicationDate={i.publicationDate}
            ></BookCard>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default ShowBookCards;
