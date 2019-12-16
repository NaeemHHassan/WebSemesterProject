import React from "react";
import { Button, Modal, FormControl } from "react-bootstrap";

const Transaction = props => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => {
    setShow(false);
    props.checkOut();
  };
  const handleCancel = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        CheckOut
      </Button>

      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        style={{ textAlign: "center" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Please Enter the details below to checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl type="text" placeHolder="Card Number"></FormControl>
          <br></br>
          <FormControl type="text" placeHolder="Expiry Date"></FormControl>
          <br />
          <FormControl type="text" placeHolder="Card Holder Name"></FormControl>
          <br />
          <FormControl
            type="text"
            placeHolder="CCV/CVV:
"
          ></FormControl>
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Continue
          </Button>
          <Button variant="primary" onClick={handleCancel}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Transaction;
