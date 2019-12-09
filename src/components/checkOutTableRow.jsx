import React, { Component } from "react";
import Td from "./td";

class CheckOutTableRow extends Component {
  render() {
    const { items, removeItemFromCart } = this.props;
    return (
      <React.Fragment>
        {items.map(item => (
          <Td
            item={item}
            removeItemFromCart={removeItemFromCart}
            handleTotalCal={this.props.handleTotalCal}
          ></Td>
        ))}
      </React.Fragment>
    );
  }
}

export default CheckOutTableRow;
