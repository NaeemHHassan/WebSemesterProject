import React, { Component } from "react";
import CheckOutTableRow from "./checkOutTableRow";
import Transaction from "./transaction";
import * as cartService from "../services/cartService";
import { toast } from "react-toastify";

class CheckOut extends Component {
  state = {
    totalPrice: 0
  };
  checkOut = async () => {
    await cartService.saveCart(this.props.items, this.state.totalPrice);
    this.props.clearCart();
    this.props.history.push("/");
    toast.success("Success");
  };
  saveTransaction1 = () => {
    // saveTransaction();
  };
  handleTotalCal = value => {
    const t = parseInt(this.state.totalPrice) + value;
    this.setState({ totalPrice: t });
  };
  render() {
    const { removeItemFromCart } = this.props;
    const { items } = this.props;
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>CheckOut</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <CheckOutTableRow
              items={items}
              removeItemFromCart={removeItemFromCart}
              handleTotalCal={this.handleTotalCal}
              {...this.props}
            ></CheckOutTableRow>
          </tbody>
        </table>

        {items.length !== 0 && (
          <div>
            <Transaction
              items={this.props.items}
              clearCart={this.props.clearCart}
              checkOut={this.checkOut}
            ></Transaction>
            <h5 style={{ textAlign: "center" }}>
              Total Price : {this.state.totalPrice}
            </h5>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default CheckOut;
