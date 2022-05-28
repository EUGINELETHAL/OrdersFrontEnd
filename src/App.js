import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddOrder from "./components/AddOrder";
import Order from "./components/Order";
import OrdersList from "./components/OrdersList";
import Login from "./components/Login";
import AddCustomer from "./components/Dashboard";

function App() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/orders" className="navbar-brand">
            OrdersFrontEnd
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/orders"} className="nav-link">
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Dashboard"} className="nav-link">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/Login"} className="nav-link">
                Signin
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<OrdersList />} />
            <Route path="/orders" element={<OrdersList />} />
            <Route path="/add" element={<AddOrder />} />
            <Route path="/add" element={<AddOrder />} />
            <Route path="/orders/:id" element={<Order />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Dashboard" element={<AddCustomer />} />
          </Routes>
        </div>
      </div>
      
    );
}

export default App;