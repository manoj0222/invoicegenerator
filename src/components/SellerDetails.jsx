import React, { useState } from "react";
import FormButtons from "./FormButtons";

export default function SellerDetails({onNext, onBack, steps,setData}) {
  const [sellerDetails, setSellerDetails] = useState({
    companyName: "",
    panNo: "",
    gstRegistrationNo: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
  });
  const [errors, setErrors] = useState({
    companyName: "",
    panNo: "",
    gstRegistrationNo: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSellerDetails({ ...sellerDetails, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = { ...errors };

    // Validate form fields
    if (sellerDetails.companyName.trim() === "") {
      newErrors.companyName = "Company Name is required";
      formIsValid = false;
    }

    if (sellerDetails.panNo.trim() === "") {
      newErrors.panNo = "Pan Number is required";
      formIsValid = false;
    }

    if (sellerDetails.gstRegistrationNo.trim() === "") {
      newErrors.gstRegistrationNo = "GST Number is required";
      formIsValid = false;
    }

    if (sellerDetails.streetAddress.trim() === "") {
      newErrors.streetAddress = "Street Address is required";
      formIsValid = false;
    }

    if (sellerDetails.city.trim() === "") {
      newErrors.city = "City is required";
      formIsValid = false;
    }

    if (sellerDetails.state.trim() === "") {
      newErrors.state = "State/Province is required";
      formIsValid = false;
    }

    if (sellerDetails.postalCode.trim() === "") {
      newErrors.postalCode = "Postal Code is required";
      formIsValid = false;
    }

    if (formIsValid) {
      setData({sellerDetails:sellerDetails});
      onNext();
    } else {
      setErrors(newErrors);
    }
  };

  const handleBack = () => {
    setSellerDetails({
      companyName: "",
      panNo: "",
      gstRegistrationNo: "",
      streetAddress: "",
      city: "",
      state: "",
      postalCode: "",
    });
    onBack();
  };

  return (
    <form className="bg-white">
      <div className="space-y-12 m-8 p-1">
        <div className="pb-12">
          <h1 className="text-base font-semibold text-center leading-7 text-gray-900">
            Seller Details 
          </h1>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company Name *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  value={sellerDetails.companyName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                />
                {errors.companyName && (
                  <p className="text-red-500 mt-2">{errors.companyName}</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="panNo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                PAN No *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="panNo"
                  id="panNo"
                  value={sellerDetails.panNo}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
                {
                  errors.panNo && (
                    <p className="text-red-500 mt-2">{errors.panNo}</p>
                  )
                }
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-3 text-gray-900"
              >
                Gst No *
              </label>
              <div className="mt-2 mb-4">
                <input
                  type="text"
                  name="gstRegistrationNo"
                  id="gstRegistrationNo"
                  value={sellerDetails.gstRegistrationNo}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                />
                {
                  errors.gstRegistrationNo && (
                    <p className="text-red-500 mt-2">{errors.gstRegistrationNo}</p>
                  )
                }
              </div>
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-3 text-gray-900"
              >
                Street address *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  value={sellerDetails.streetAddress}
                  onChange={handleChange}
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                />
                 {
                  errors.streetAddress && (
                    <p className="text-red-500 mt-2">{errors.streetAddress}</p>
                  )
                }
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={sellerDetails.city}
                  onChange={handleChange}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 {
                  errors.city && (
                    <p className="text-red-500 mt-2">{errors.city}</p>
                  )
                }
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State / Province *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={sellerDetails.state}
                  onChange={handleChange}
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                />
                 {
                  errors.state && (
                    <p className="text-red-500 mt-2">{errors.state}</p>
                  )
                }
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ZIP / Postal code *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postalCode"
                  id="postalCode"
                  value={sellerDetails.postalCode}
                  onChange={handleChange}
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                
                />
                 {
                  errors.postalCode && (
                    <p className="text-red-500 mt-2">{errors.postalCode}</p>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormButtons onClick={handleSubmit} steps={steps} handleBack={handleBack}/>
    </form>
  );
}
