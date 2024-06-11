import React from "react";
import { CiCircleRemove } from "react-icons/ci";

export default function Item() {
  return (
    <form onSubmit={handleSubmit}>
      <div className="m-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <input
          id="description"
          name="description"
          type="text"
          placeholder="Description"
          value={itemDetails.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.description && (
          <p className="text-red-500 mt-1">{errors.description}</p>
        )}
      </div>
      <div className="m-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="unitPrice"
        >
          Unit Price
        </label>
        <input
          id="unitPrice"
          name="unitPrice"
          type="text"
          placeholder="Unit Price"
          value={itemDetails.unitPrice}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.unitPrice && (
          <p className="text-red-500 mt-1">{errors.unitPrice}</p>
        )}
      </div>
      <div className="m-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="quantity"
        >
          Quantity
        </label>
        <input
          id="quantity"
          name="quantity"
          type="text"
          placeholder="Quantity"
          value={itemDetails.quantity}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.quantity && (
          <p className="text-red-500 mt-1">{errors.quantity}</p>
        )}
      </div>
      <div className="m-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="discount"
        >
          Discount
        </label>
        <input
          id="discount"
          name="discount"
          type="text"
          placeholder="Discount"
          value={itemDetails.discount}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.discount && (
          <p className="text-red-500 mt-1">{errors.discount}</p>
        )}
      </div>
      <div className="m-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="netAmount"
        >
          Net Amount
        </label>
        <input
          id="netAmount"
          name="netAmount"
          type="text"
          placeholder="Net Amount"
          value={itemDetails.netAmount}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.netAmount && (
          <p className="text-red-500 mt-1">{errors.netAmount}</p>
        )}
      </div>
      <div className="m-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="taxRate"
        >
          Tax Rate
        </label>
        <input
          id="taxRate"
          name="taxRate"
          type="text"
          placeholder="Tax Rate"
          value={itemDetails.taxRate}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.taxRate && (
          <p className="text-red-500 mt-1">{errors.taxRate}</p>
        )}
      </div>
      <div className="m-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="taxType"
        >
          Tax Type
        </label>
        <input
          id="taxType"
          name="taxType"
          type="text"
          placeholder="Tax Type"
          value={itemDetails.taxType}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.taxType && (
          <p className="text-red-500 mt-1">{errors.taxType}</p>
        )}
      </div>
      <FormButtons onNext={handleSubmit} onBack={onBack} />
    </form>
  );
}
