import React, { Component } from "react";
import authService from "../services/authService";
import SearchBox from "./searchBox";

class Users extends Component {
  state = {
    searchQuery: ""
  };

  handleSearch = query => {
    this.setState({ searchQuery: query });
    console.log(this.state.searchQuery);
  };
  render() {
    if (!authService.isAdmin()) {
      return <h1>Access Denied</h1>;
    }
    const { searchQuery } = this.state;
    return (
      <React.Fragment>
        <h1>Showing Current Users in Database</h1>
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">Naeem</td>
              <td>3</td>
              <td>
                <a href="#.com">
                  <i className="fa fa-eye" style={{ margin: "10px" }}></i>
                </a>
                <a href="#.com">
                  <i className="fa fa-trash" style={{ margin: "10px" }}></i>
                </a>
                <a href="#.co">
                  <i className="fa fa-edit" style={{ margin: "10px" }} x></i>
                </a>
              </td>
            </tr>
            <tr>
              <td scope="row">Hassan</td>
              <td>dasdasdsa</td>
              <td>
                <a href="#.com">
                  <i className="fa fa-eye" style={{ margin: "10px" }}></i>
                </a>
                <a href="#.com">
                  <i className="fa fa-trash" style={{ margin: "10px" }}></i>
                </a>
                <a href="#.co">
                  <i className="fa fa-edit" style={{ margin: "10px" }} x></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Users;
