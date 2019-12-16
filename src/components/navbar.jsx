import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";
import authService from "../services/authService";

class NavBar extends Component {
  getTitle = totalItems => {
    return (
      <div>
        Cart{" "}
        <sup
          style={{
            color: "red"
          }}
        >
          {totalItems}
        </sup>
      </div>
    );
  };
  componentDidMount = () => {};

  render() {
    const { items } = this.props;
    const totalItems = items.length;
    const currentUser = authService.getCurrentUser();

    return (
      <div>
        <Navbar bg="light" expand="lg" fixed="top">
          <Navbar.Brand>
            <Link className="navbar-brand" to="/home">
              BooksEasy
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/about">
                <Nav.Link href="#home">About</Nav.Link>
              </Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
              {currentUser && (
                <React.Fragment>
                  <Nav.Link>
                    <Link to="/users">Users</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/books">Books</Link>
                  </Nav.Link>
                </React.Fragment>
              )}
            </Nav>
            <NavDropdown
              title={this.getTitle(totalItems)}
              id="basic-nav-dropdown"
            >
              {items.map(it => (
                <NavDropdown.Item>{it.title}</NavDropdown.Item>
              ))}
              {items.length === 0 && (
                <NavDropdown.Item>
                  <Button disabled="true ">Not hing to Show</Button>
                </NavDropdown.Item>
              )}
              {items.length !== 0 && (
                <NavDropdown.Item>
                  <Link to="/checkOut">
                    <Button>CheckOut</Button>
                  </Link>
                </NavDropdown.Item>
              )}
            </NavDropdown>

            {!currentUser && (
              <NavLink
                className="nav-item nav-link"
                to="/login"
                style={{ margin: "0px", padding: "0px", border: "0px" }}
              >
                <Button variant="outline-success" style={{ margin: "10px" }}>
                  Login
                </Button>
              </NavLink>
            )}
            {!currentUser && (
              <NavLink
                className="nav-item nav-link"
                to="/signUp"
                style={{ margin: "0px", padding: "0px", border: "0px" }}
              >
                <Button variant="outline-success" style={{ margin: "10px" }}>
                  SignUp
                </Button>
              </NavLink>
            )}
            {currentUser && (
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
                <NavDropdown.Item href="#action/3.2">
                  Setting
                  <i
                    class="fa fa-cog"
                    style={{ margin: "15px" }}
                    aria-hidden="true"
                  ></i>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Notifications
                  <i
                    class="fa fa-bell"
                    style={{ margin: "15px" }}
                    aria-hidden="true"
                  ></i>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Chats
                  <i
                    class="fa fa-envelope"
                    style={{ margin: "15px" }}
                    aria-hidden="true"
                  ></i>
                </NavDropdown.Item>
              </NavDropdown>
            )}
            {currentUser && (
              <NavLink
                className="nav-item nav-link"
                to="/logout"
                style={{ margin: "0px", padding: "0px", border: "0px" }}
              >
                <Button variant="outline-success" style={{ margin: "10px" }}>
                  SignOut
                </Button>
              </NavLink>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
