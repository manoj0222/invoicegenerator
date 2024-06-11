import React, { useState } from "react";
import FormButtons from "./FormButtons";

export default function BillingDetails({ onNext, onBack, steps, setData }) {
  const [billingDetails, setBillingDetails] = useState({
    companyName: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    stateUTCCode: "",
  });

  const [errors, setErrors] = useState({
    companyName: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    stateUTCCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = { ...errors };

    // Validate form fields
    if (billingDetails.companyName.trim() === "") {
      newErrors.companyName = "Company Name is ";
      formIsValid = false;
    }

    if (billingDetails.streetAddress.trim() === "") {
      newErrors.streetAddress = "Street Address is ";
      formIsValid = false;
    }

    if (billingDetails.city.trim() === "") {
      newErrors.city = "City is ";
      formIsValid = false;
    }

    if (billingDetails.state.trim() === "") {
      newErrors.state = "State/Province is ";
      formIsValid = false;
    }

    if (billingDetails.postalCode.trim() === "") {
      newErrors.postalCode = "Postal Code is ";
      formIsValid = false;
    }

    if (billingDetails.stateUTCCode.trim() === "") {
      newErrors.stateUTCCode = "UTC Code is ";
      formIsValid = false;
    }

    if (formIsValid) {
      setData({billingDetails:billingDetails});
      onNext();
    } else {
      setErrors(newErrors);
    }
  };

  const handleBack = () => {
    setBillingDetails({
      companyName: "",
      streetAddress: "",
      city: "",
      state: "",
      postalCode: "",
      stateUTCCode: "",
    });
    setErrors({
      companyName: "",
      streetAddress: "",
      city: "",
      state: "",
      postalCode: "",
      stateUTCCode: "",
    })
    onBack();
  };

  return (
    <>
    <form>
      <div className="space-y-12 m-8">
        <div className="pb-12">
          <h1 className="text-base font-semibold text-center leading-7 text-gray-900">
            Billing Address
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
                  value={billingDetails.companyName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                />
                {errors.companyName && (
                  <p className="text-red-500 mt-2">{errors.companyName}</p>
                )}
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street Address *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  value={billingDetails.streetAddress}
                  onChange={handleChange}
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                />
                {errors.streetAddress && (
                  <p className="text-red-500 mt-2">{errors.streetAddress}</p>
                )}
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
                  value={billingDetails.city}
                  onChange={handleChange}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                />
                {errors.city && (
                  <p className="text-red-500 mt-2">{errors.city}</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="state"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State / Province *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={billingDetails.state}
                  onChange={handleChange}
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                />
                {errors.state && (
                  <p className="text-red-500 mt-2">{errors.state}</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ZIP / Postal Code *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postalCode"
                  id="postalCode"
                  value={billingDetails.postalCode}
                  onChange={handleChange}
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                />
                {errors.postalCode && (
                  <p className="text-red-500 mt-2">{errors.postalCode}</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="stateUTCCode"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                UTC Code *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="stateUTCCode"
                  id="stateUTCCode"
                  value={billingDetails.stateUTCCode}
                  onChange={handleChange}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                />
                {errors.stateUTCCode && (
                  <p className="text-red-500 mt-2">{errors.stateUTCCode}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <FormButtons onClick={handleSubmit} steps={steps} onBack={handleBack} />
    </>
  );
}
