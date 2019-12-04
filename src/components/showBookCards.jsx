import React, { Component } from "react";
import BookCard from "./bookCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SearchBox from "./searchBox";

class ShowBookCards extends Component {
  state = {
    items: [1, 2, 3],
    searchQuery: "",
    value: ""
  };
  componentDidMount = () => {};
  handleSearch = query => {
    this.setState({ searchQuery: query });
    console.log(this.state.searchQuery);
  };
  render() {
    const name = "my Book";
    const price = 111;
    const description = "some descrption";
    const author = "Dietal";
    const publicationDate = "12-12-2018";

    const { searchQuery } = this.state;
    return (
      <React.Fragment>
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        {this.state.items.map(i => (
          <Row>
            <Col sm="4" align="center">
              <BookCard
                price={price}
                name={name}
                description={description}
                author={author}
                publicationDate={publicationDate}
              ></BookCard>
            </Col>
            <Col sm="4" align="center">
              <BookCard
                price={price}
                name={name}
                author={author}
                description={description}
                publicationDate={publicationDate}
              ></BookCard>
            </Col>
            <Col sm="4" align="center">
              <BookCard
                price={price}
                name={name}
                author={author}
                description={description}
                publicationDate={publicationDate}
              ></BookCard>
            </Col>
          </Row>
        ))}
      </React.Fragment>
    );
  }
}

export default ShowBookCards;
