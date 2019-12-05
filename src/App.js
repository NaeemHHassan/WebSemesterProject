import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import ShowBookCards from "./components/showBookCards";
import Footer from "./components/footer";
import LoginForm from "./components/loginForm";
import { Route, Switch, Redirect } from "react-router-dom";
import RegisterForm from "./components/registerForm";
import NotFound from "./components/notFound";
import DashBoard from "./components/dashBoard";
import Logout from "./components/logout";
import auth from "./services/authService";
import { ToastContainer } from "react-toastify";
import Users from "./components/user";
import Book from "./components/books";
import AddNewBook from "./components/addNewBook";
import UpdateABook from "./components/updateABook";
function App() {
  const user = auth.getCurrentUser();
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar user={user} />
      <main
        className="container-fluid"
        style={{ backgroundColor: "rgb(245, 237, 233)" }}
      >
        <Switch>
          <Route path="/home" component={ShowBookCards} />
          <Route path="/addNewBook" component={AddNewBook} />
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/signUp" component={RegisterForm} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/users" component={Users} />
          <Route path="/books" component={Book} />
          <Route path="/updateABook" component={UpdateABook} />
          <Redirect from="/" exact to="home" />
          <Redirect to="/not-found" />
        </Switch>
        <Footer></Footer>
      </main>
    </React.Fragment>
  );
}

export default App;
