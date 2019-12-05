import React, { Component } from "react";
import authService from "../services/authService";
import * as userService from "../services/userService";
import Button from "react-bootstrap/Button";
import SearchBox from "./searchBox";
import { toast } from "react-toastify";

class Users extends Component {
  state = {
    searchQuery: "",
    users: []
  };

  async componentDidMount() {
    const { data } = await userService.getAllUsers();
    this.setState({ users: data });
  }
  handleSearch = query => {
    this.setState({ searchQuery: query });
  };

  handleDelete = async book => {
    await userService.deleteAUser(book._id);
    const { data } = await userService.getAllUsers();
    this.setState({ users: data });
    toast.sucess("Deleted");
  };

  render() {
    if (!authService.getCurrentUser()) {
      return <h1>Access Denied</h1>;
    }
    const { searchQuery, users } = this.state;
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
            {users.map(u => (
              <tr>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <Button
                    style={{ margin: "10px" }}
                    onClick={() => this.handleDelete(u)}
                  >
                    <i className="fa fa-trash"></i> Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Users;
