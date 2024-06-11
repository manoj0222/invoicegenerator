import React, { useState } from "react";
import FormButtons from "./FormButtons";
import { CiCircleRemove } from "react-icons/ci";
import saveInvoice from "../api/api";

export default function ItemDetails({ onNext,onBack, setData, data }) {
  const postObject = {};

  const [itemDetails, setItemDetails] = useState([
    {
      description: "",
      unitPrice: "",
      quantity: "",
      discount: "",
      taxRate: "",
      taxType: "",
    },
  ]);

  const [errors, setErrors] = useState([
    {
      description: "",
      unitPrice: "",
      quantity: "",
      discount: "",
      taxRate: "",
      taxType: "",
    },
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newItems = [...itemDetails];
    newItems[index] = { ...newItems[index], [name]: value };
    setItemDetails(newItems);
    setErrors((errors) => {
      const newErrors = [...errors];
      newErrors[index] = { ...newErrors[index], [name]: "" };
      return newErrors;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = [];

    itemDetails.forEach((item, index) => {
      const currentItemErrors = {};

      // Validate each field in the current item
      for (const key in item) {
        if (item[key].trim() === "") {
          currentItemErrors[key] = `${
            key.charAt(0).toUpperCase() + key.slice(1)
          } is required`;
          formIsValid = false;
        }
      }

      newErrors.push(currentItemErrors);
    });

    // Update errors state with the newErrors array
    setErrors(newErrors);

    if (formIsValid) {
      try {

        const updatedData = { ...data, itemDetails: itemDetails };
        // Perform POST request with updatedData
        console.log(updatedData)
        const response = await saveInvoice(updatedData);
        setData(updatedData);
        // Proceed to the next step
        onNext();
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleCreateItem = () => {
    setItemDetails([
      ...itemDetails,
      {
        description: "",
        unitPrice: "",
        quantity: "",
        discount: "",
        taxRate: "",
        taxType: "",
      },
    ]);
    setErrors([
      ...errors,
      {
        description: "",
        unitPrice: "",
        quantity: "",
        discount: "",
        taxRate: "",
        taxType: "",
      },
    ]);
  };

  const handleRemoveItem = (indexToRemove) => {
    setItemDetails(
      itemDetails.filter((item, index) => index !== indexToRemove)
    );
    setErrors(errors.filter((error, index) => index !== indexToRemove));
  };

  return (
    <div className="flex flex-col m-10">
      <section className="flex justify-between">
        <button
          onClick={handleCreateItem}
          className="mt-4 
          w-1/4
          bg-gray-300 
          text-black
          font-semibold
          py-2 px-4 
          rounded 
          hover:bg-gray-600 
          focus:outline-none
          focus:bg-gray-600"
        >
          + Add Item
        </button>
      </section>
      <h2 className="text-2xl font-bold mb-2 text-center">Item Details</h2>
      {itemDetails.map((item, index) => (
        <form
          key={index}
          onSubmit={(e) => handleSubmit(e, index)}
          className="p-3 py-4 border-2 flex flex-row flex-wrap rounded-md  mb-3 shadow-lg"
        >
          {/* Description */}
          <section className="w-full p-2">
            <strong>Item{index + 1}:</strong>
          </section>
          <section className="w-full p-2">
            <CiCircleRemove
              onClick={() => handleRemoveItem(index)}
              className="p-2 ml-auto text-red-500 hover:text-red-700 cursor-pointer"
              size={36} // Increase the size of the icon to 36 pixels
              style={{
                padding: "0.25rem",
                fontSize: "1.5rem",
                cursor: "pointer",
              }} // Add padding and increase font size
            />
          </section>
          <section className="w-1/2 p-2">
            <label
              htmlFor={`description${index}`}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description
            </label>
            <input
              id={`description${index}`}
              name="description"
              type="text"
              placeholder="Description"
              value={item.description}
              onChange={(e) => handleChange(e, index)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors[index].description && (
              <p className="text-red-500 mt-1">{errors[index].description}</p>
            )}
          </section>
          {/* Unit Price */}
          <section className="w-1/2 p-2">
            <label
              htmlFor={`unitPrice${index}`}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Unit Price
            </label>
            <input
              id={`unitPrice${index}`}
              name="unitPrice"
              type="text"
              placeholder="Unit Price"
              value={item.unitPrice}
              onChange={(e) => handleChange(e, index)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors[index].unitPrice && (
              <p className="text-red-500 mt-1">{errors[index].unitPrice}</p>
            )}
          </section>
          {/* Quantity */}
          <section className="w-1/2 p-2">
            <label
              htmlFor={`quantity${index}`}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Quantity
            </label>
            <input
              id={`quantity${index}`}
              name="quantity"
              type="text"
              placeholder="Quantity"
              value={item.quantity}
              onChange={(e) => handleChange(e, index)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors[index].quantity && (
              <p className="text-red-500 mt-1">{errors[index].quantity}</p>
            )}
          </section>
          {/* Discount */}
          <section className="w-1/2 p-2">
            <label
              htmlFor={`discount${index}`}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Discount
            </label>
            <input
              id={`discount${index}`}
              name="discount"
              type="text"
              placeholder="Discount"
              value={item.discount}
              onChange={(e) => handleChange(e, index)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors[index].discount && (
              <p className="text-red-500 mt-1">{errors[index].discount}</p>
            )}
          </section>
          {/* Tax Rate */}
          <section className="w-1/2 p-2">
            <label
              htmlFor={`taxRate${index}`}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Tax Rate
            </label>
            <input
              id={`taxRate${index}`}
              name="taxRate"
              type="text"
              placeholder="Tax Rate"
              value={item.taxRate}
              onChange={(e) => handleChange(e, index)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors[index].taxRate && (
              <p className="text-red-500 mt-1">{errors[index].taxRate}</p>
            )}
          </section>
          {/* Tax Type */}
          <section className="w-1/2 p-2">
            <label
              htmlFor={`taxType${index}`}
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Tax Type
            </label>
            <input
              id={`taxType${index}`}
              name="taxType"
              type="text"
              placeholder="Tax Type"
              value={item.taxType}
              onChange={(e) => handleChange(e, index)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors[index].taxType && (
              <p className="text-red-500 mt-1">{errors[index].taxType}</p>
            )}
          </section>
        </form>
      ))}
      <FormButtons onBack={onBack} onClick={handleSubmit} />
    </div>
  );
}
