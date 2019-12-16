import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import ShowBookCards from "./components/showBookCards";
import Footer from "./components/footer";
import About from "./components/about";
import LoginForm from "./components/loginForm";
import { Route, Switch, Redirect } from "react-router-dom";
import RegisterForm from "./components/registerForm";
import NotFound from "./components/notFound";
import DashBoard from "./components/dashBoard";
import ShowBookInfo from "./components/showBookInfo";
import Logout from "./components/logout";
import auth from "./services/authService";
import { ToastContainer, toast } from "react-toastify";
import Users from "./components/user";
import Book from "./components/books";
import AddNewBook from "./components/addNewBook";
import UpdateABook from "./components/updateABook";
import * as bookService from "./services/bookService";
import CheckOut from "./components/checkOut";

class App extends Component {
  state = {
    items: []
  };
  async componentDidMount() {
    // await bookService
    //   .getBooks()
    //   .then(res => {
    //     this.setState({ items: res.data });
    //   })
    //   .catch(e => {});
  }

  clearCart = () => {
    this.setState({ items: [] });
  };
  removeItemFromCart = item => {
    const items = this.state.items.filter(m => m._id !== item._id);
    this.setState({ items });
    toast.success("Deleted");
  };

  addItemToCart = async id => {
    const book = await bookService.getBookById(id);
    let items = this.state.items;
    items.push(book.data);
    this.setState({ items: items });
    sessionStorage.removeItem("items");
    sessionStorage.setItem("items", this.getIds());
  };
  getIds = () => {
    const ids = [];
    this.state.items.forEach(i => {
      ids.push(i._id);
    });
    return ids;
  };

  render() {
    const user = auth.getCurrentUser();
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} items={this.state.items} />
        <main
          className="container-fluid"
          style={{ backgroundColor: "rgb(245, 237, 233)", paddingTop: "80px" }}
        >
          <Switch>
            <Route
              path="/home"
              render={props => (
                <ShowBookCards {...props} addItemToCart={this.addItemToCart} />
              )}
            />
            <Route path="/addNewBook" component={AddNewBook} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/dashboard" component={DashBoard} />
            <Route path="/signUp" component={RegisterForm} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
            <Route path="/books" component={Book} />
            <Route path="/updateABook" component={UpdateABook} />
            <Route
              path="/showBookInfo"
              render={props => (
                <ShowBookInfo {...props} addItemToCart={this.addItemToCart} />
              )}
            />
            <Route
              path="/checkOut"
              render={props => (
                <CheckOut
                  {...props}
                  clearCart={this.clearCart}
                  items={this.state.items}
                  removeItemFromCart={this.removeItemFromCart}
                />
              )}
            />

            <Redirect from="/" exact to="home" />
            <Redirect to="/not-found" />
          </Switch>
          <Footer></Footer>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
