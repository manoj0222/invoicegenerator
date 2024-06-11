import React, { useState } from 'react';
import FormButtons from './FormButtons';

export default function OrderDetails({ onNext, onBack, setData }) {
  const [orderDetails, setOrderDetails] = useState({
    orderNo: "",
    orderDate: "",
  });

  const [errors, setErrors] = useState({
    orderNo:"",
    orderDate:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error when user starts typing
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = {};
  
    // Validate order number
    if (orderDetails.orderNo.trim() === "") {
      newErrors.orderNo = "Order Number is required";
      formIsValid = false;
    }
  
    // Validate order date
    if (orderDetails.orderDate.trim() === "") {
      newErrors.orderDate = "Order Date is required";
      formIsValid = false;
    }
  
    if (formIsValid) {
      setData({orderDetails:orderDetails});
      onNext();
    } else {
      setErrors(newErrors);
    }
  };
  

  const handleBack = () => {
    onBack();
  };

  return (
    <>
      <div className="flex flex-col m-10">
        <h2 className="text-2xl font-bold mb-2 text-center">Order Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="m-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="orderNo">
              Order Number *
            </label>
            <input
              id="orderNo"
              name="orderNo"
              type="text"
              placeholder="Enter order number"
              value={orderDetails.orderNo}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.orderNo && (
              <p className="text-red-500 mt-1">{errors.orderNo}</p>
            )}
          </div>
          <div className="m-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="orderDate">
              Order Date *
            </label>
            <input
              id="orderDate"
              name="orderDate"
              type="date"
              value={orderDetails.orderDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.orderDate && (
              <p className="text-red-500 mt-1">{errors.orderDate}</p>
            )}
          </div>
          <FormButtons onNext={handleSubmit} onBack={handleBack} />
        </form>
      </div>
    </>
  );
}
