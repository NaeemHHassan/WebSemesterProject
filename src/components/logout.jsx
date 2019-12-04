import authService from "../services/authService";
import { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    authService.logout();
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
