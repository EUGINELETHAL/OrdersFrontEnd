import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OrderDataService from "../services/OrderService";

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");
  
const token =  localStorage.getItem("token");
 console.log(token);

  useEffect(() => {
    retrieveOrders();
  }, []);

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveOrders = () => {
    OrderDataService.getAll()
      .then((response) => {
        setOrders(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveOrders();
    setCurrentOrder(null);
    setCurrentIndex(-1);
  };

  const setActiveOrder = (order, index) => {
    setCurrentOrder(order);
    setCurrentIndex(index);
  };

  const removeAllOrders = () => {
    OrderDataService.removeAll()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    OrderDataService.findByTitle(searchTitle)
      .then((response) => {
        setOrders(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {orders.length < 1 ? (
        <div>
          <h4>You have O orders .K</h4>
          <Link to="/add">
            <button className="btn btn-success">Create your first Order</button>
          </Link>
        </div>
      ) : (
        <div className="list row">
          <div className="col-md-8">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by title"
                value={searchTitle}
                onChange={onChangeSearchTitle}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={findByTitle}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h4> Orders List </h4>
            <h5>You have {orders.length} orders </h5>

            <ul className="list-group">
              {orders &&
                orders.map((order, index) => (
                  <li
                    className={
                      "list-group-item " +
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => setActiveOrder(order, index)}
                    key={index}
                  >
                   Item {order.item}   price ${order.amount}
                  </li>
                ))}
            </ul>
            <button
              className="m-3 btn btn-sm btn-danger"
              onClick={removeAllOrders}
            >
              Remove All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersList;
