import React, { useState } from "react";
import OrderDataService from "../services/OrderService";
import { Link } from "react-router-dom";
const AddOrder = () => {
  const initialOrderState = {
    item: "",
    amount: "",
  };
  const [order, setOrder] = useState(initialOrderState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrder({ ...order, [name]: value });
  };

  const saveOrder = () => {
    var data = {
      item:order.item,
      amount:order.amount,
      phone:order.phone
      
      
      
    };

    OrderDataService.create(data)
      .then((response) => {
        const phone = response.data.customer;
        console.log(phone)
        const no = phone.phone
        setOrder({
          item: response.data.item,
          amount: response.data.amount,
          phone:no
        
        });
        setSubmitted(true);
        console.log(response.data.customer);
      
        console.log(no);
        
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newOrder = () => {
    setOrder(initialOrderState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>
            You have sucessfully placed an order.Order confirmation message sent
            to {order.phone}
          </h4>
          <button className="btn btn-success" onClick={newOrder}>
            Add Order
          </button>
          <Link to="/add">
            <button className="btn btn-success">View Your Orders</button>
          </Link>
         
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="item"> Item </label>
            <input
              type="text"
              className="form-control"
              id="item"
              required
              value={order.item}
              onChange={handleInputChange}
              name="item"
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount"> Amount </label>
            <input
              type="text"
              className="form-control"
              id="amount"
              required
              value={order.amount}
              onChange={handleInputChange}
              name="amount"
            />
          </div>
          <button onClick={saveOrder} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddOrder;
