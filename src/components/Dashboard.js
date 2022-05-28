import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import OrderDataService from "../services/OrderService";

const AddCustomer = () => {
  const initialCustomerState = {
    code: "",
    phone: "",
    user:""
  };
  const [customer, setCustomer] = useState(initialCustomerState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomer({ ...customer, [name]: value });
  };

  const saveCustomer = () => {
    // const user = localStorage.getItem("token");

    var data = {
      phone:customer.phone,
      code:customer.code,
      
     
      
      
    };
    
    OrderDataService.createCustomer(data)
     
      .then((response) => {
       
       
        setCustomer({
          phone: response.data.phone,
          code: response.data.code,
          
          
        
        });
        setSubmitted(true);
        console.log(response.data);
      
        
        
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newCustomer = () => {
    setCustomer(initialCustomerState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>
            
          </h4>
          <button className="btn btn-success" onClick={newCustomer}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="phone"> phone </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              required
              value={customer.phone}
              onChange={handleInputChange}
              name="phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="code"> code </label>
            <input
              type="text"
              className="form-control"
              id="code"
              required
              value={customer.code}
              onChange={handleInputChange}
              name="code"
            />
          </div>
          <button onClick={saveCustomer} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddCustomer;


  
 

  



  

 

  