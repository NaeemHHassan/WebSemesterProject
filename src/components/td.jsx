import React, { Component } from "react";
import * as b from "react-bootstrap";

class Td extends Component {
  quantity = React.createRef();

  state = {
    totalPrice: 1
  };

  componentDidMount() {
    this.setState({ totalPrice: this.props.item.price });
  }

  CalPrice = item => {
    try {
      const price = parseInt(item.price);
      if (this.quantity.current.value) {
        const totalQ = parseInt(this.quantity.current.value);
        const total = price * totalQ;
        this.setState({ totalPrice: total });
        this.props.handleTotalCal(this.state.totalPrice);
        
      }
    } catch (e) {}
  };
  state = {};
  render() {
    const { item } = this.props;
    return (
      <tr>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td>
          <input
            data={JSON.stringify({ data: { item } })}
            type="text"
            placeholder="Quantity"
            onChange={() => this.CalPrice(item)}
            ref={this.quantity}
          ></input>
        </td>
        <td>{this.state.totalPrice}</td>
        <td>
          <b.Button
            className="btn btn-danger"
            onClick={() => this.props.removeItemFromCart(item)}
          >
            Delete
          </b.Button>
        </td>
      </tr>
    );
  }
}

export default Td;
