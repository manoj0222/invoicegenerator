import React, { useState } from 'react';
import FormButtons from './FormButtons';

export default function InvoiceDetails({ onNext, onBack, setData }) {
  const [invoiceDetails, setInvoiceDetails] = useState({
    invoiceNo: "",
    invoiceDetails: "",
    invoiceDate: "",
  });

  const [errors, setErrors] = useState({
    invoiceNo:"",
    invoiceDetails:"",
    invoiceDate:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceDetails({ ...invoiceDetails, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = {};
  
    // Validate invoice number
    if (invoiceDetails.invoiceNo.trim() === "") {
      newErrors.invoiceNo = "Invoice Number is required";
      formIsValid = false;
    }
  
    // Validate invoice details
    if (invoiceDetails.invoiceDetails.trim() === "") {
      newErrors.invoiceDetails = "Invoice Details are required";
      formIsValid = false;
    }
  
    // Validate invoice date
    if (invoiceDetails.invoiceDate.trim() === "") {
      newErrors.invoiceDate = "Invoice Date is required";
      formIsValid = false;
    }
  
    if (formIsValid) {
      setData({invoiceDetails: invoiceDetails });
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
        <h2 className="text-2xl font-bold mb-2 text-center">Invoice Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="m-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="invoiceNo">
              Invoice Number *
            </label>
            <input
              id="invoiceNo"
              name="invoiceNo"
              type="text"
              placeholder="Invoice Number"
              value={invoiceDetails.invoiceNo}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.invoiceNo && (
              <p className="text-red-500 mt-1">{errors.invoiceNo}</p>
            )}
          </div>
          <div className="m-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="invoiceDetails">
              Invoice Details *
            </label>
            <input
              id="invoiceDetails"
              name="invoiceDetails"
              type="text"
              placeholder="Invoice Details"
              value={invoiceDetails.invoiceDetails}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.invoiceDetails && (
              <p className="text-red-500 mt-1">{errors.invoiceDetails}</p>
            )}
          </div>
          <div className="m-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="invoiceDate">
              Invoice Date *
            </label>
            <input
              id="invoiceDate"
              name="invoiceDate"
              type="date"
              value={invoiceDetails.invoiceDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.invoiceDate && (
              <p className="text-red-500 mt-1">{errors.invoiceDate}</p>
            )}
          </div>
          <FormButtons onNext={handleSubmit} onBack={handleBack} />
        </form>
      </div>
    </>
  );
}
