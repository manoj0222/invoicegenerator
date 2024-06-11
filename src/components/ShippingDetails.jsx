import React, { useState } from "react";
import FormButtons from "./FormButtons";

export default function ShippingDetails({ onNext, onBack, steps, setData }) {
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    companyName: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    stateUTCCode: "",
    signature: null,
  });

  const [errors, setErrors] = useState({
    name: "",
    companyName: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    stateUTCCode: "",
    signature: "",
  });

  // Add to handleChange function
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "signature" && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const fileData = reader.result; // This will be a data URL or ArrayBuffer
        setShippingDetails({ ...shippingDetails, signature: fileData });
      };
      reader.readAsDataURL(file); // Read file as data URL
    } else {
      setShippingDetails({ ...shippingDetails, [name]: value });
    }
    setErrors({ ...errors, [name]: "" }); // Clear error when user starts typing or uploads a file
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = { ...errors };

    // Validate form fields
    if (shippingDetails.name.trim() === "") {
      newErrors.name = "Name is required";
      formIsValid = false;
    }

    if (shippingDetails.companyName.trim() === "") {
      newErrors.companyName = "Company Name is required";
      formIsValid = false;
    }

    if (shippingDetails.streetAddress.trim() === "") {
      newErrors.streetAddress = "Street Address is required";
      formIsValid = false;
    }

    if (shippingDetails.city.trim() === "") {
      newErrors.city = "City is required";
      formIsValid = false;
    }

    if (shippingDetails.state.trim() === "") {
      newErrors.state = "State/Province is required";
      formIsValid = false;
    }

    if (shippingDetails.postalCode.trim() === "") {
      newErrors.postalCode = "Postal Code is required";
      formIsValid = false;
    }

    if (shippingDetails.stateUTCCode.trim() === "") {
      newErrors.stateUTCCode = "UTC Code is required";
      formIsValid = false;
    }

    if (!shippingDetails.signature) {
      newErrors.signature = "Signature is required";
      formIsValid = false;
    }

    if (formIsValid) {
      setData({ shippingDetails: shippingDetails });
      onNext();
    } else {
      setErrors(newErrors);
    }
  };

  const handleBack = () => {
    setShippingDetails({
      name: "",
      companyName: "",
      streetAddress: "",
      city: "",
      state: "",
      postalCode: "",
      stateUTCCode: "",
      signature: null,
    });
    onBack();
  };

  return (
    <form>
      <div className="space-y-12 m-8">
        <div className="pb-12">
          <h1 className="text-base font-semibold text-center leading-7 text-gray-900">
            Shipping Address *
          </h1>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={shippingDetails.name}
                  onChange={handleChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.name && (
                  <p className="text-red-500 mt-2">{errors.name}</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company Name *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  value={shippingDetails.companyName}
                  onChange={handleChange}
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.companyName && (
                  <p className="text-red-500 mt-2">{errors.companyName}</p>
                )}
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-3 text-gray-900"
              >
                Street Address *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  value={shippingDetails.streetAddress}
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
                  value={shippingDetails.city}
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
                  value={shippingDetails.state}
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
                  value={shippingDetails.postalCode}
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
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                UTC Code *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="stateUTCCode"
                  id="stateUTCCode"
                  value={shippingDetails.stateUTCCode}
                  onChange={handleChange}
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.stateUTCCode && (
                  <p className="text-red-500 mt-2">{errors.stateUTCCode}</p>
                )}
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="signature"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Signature *
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  name="signature"
                  id="signature"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:border-indigo-600"
                />
                {errors.signature && (
                  <p className="text-red-500 mt-2">{errors.signature}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormButtons onClick={handleSubmit} steps={steps} onBack={handleBack} />
    </form>
  );
}
