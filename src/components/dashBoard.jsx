import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import authService from "../services/authService";

class DashBoard extends Component {
  state = {
    activeItem: "users"
  };
  componentDidMount() {}
  state = {};

  render() {
    if (!authService.getCurrentUser()) {
      return <h1>Access Denied. Please login as a admin to continue</h1>;
    } else {
      return (
        <React.Fragment>
          <Row>
            <Col>
              <h1 style={{ textAlign: "center" }}>Admin Dashboard</h1>
            </Col>
          </Row>
        </React.Fragment>
      );
    }
  }
}

export default DashBoard;
