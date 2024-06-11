import React, { useState } from "react";
import FormButtons from "../components/FormButtons";
import StatusTracker from "../components/StatusTracker";
import Logo from "../components/Logo";
import SellerDetails from "../components/SellerDetails";
import BillingDetails from "../components/BillingDetails";
import ShippingDetails from "../components/ShippingDetails";
import OrderDetails from "../components/OrderDetails";
import InvoiceDetails from "../components/InvoiceDetails";
import ItemDetails from "../components/ItemDetails";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const description = [
  "Logo",
  "Seller Details",
  "Billing Details",
  "Shipping Details",
  "Order Details",
  "Invoice Details",
  "Item Details",
];

export default function HomePage() {
  const [steps, setSteps] = useState(0);
  const [data, setData] = useState({});
  const navigate = useNavigate(); 
  
  const handleNext = () => {
    if (steps === description.length - 1) {
      navigate("/pdfgenerator"); // Navigate to pdfgenerator when the last step is reached
    } else {
      setSteps((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setSteps((prev) => Math.max(prev - 1, 0));
  };

  const updateData = (newData) => {
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  const detailsForm = (steps) => {
    switch (steps) {
      case 0:
        return <Logo onNext={handleNext} steps={steps} setData={updateData} />;
      case 1:
        return (
          <SellerDetails
            onNext={handleNext}
            onBack={handleBack}
            steps={steps}
            setData={updateData}
          />
        );
      case 2:
        return (
          <BillingDetails
            onNext={handleNext}
            onBack={handleBack}
            steps={steps}
            setData={updateData}
          />
        );
      case 3:
        return (
          <ShippingDetails
            onNext={handleNext}
            onBack={handleBack}
            steps={steps}
            setData={updateData}
          />
        );
      case 4:
        return (
          <OrderDetails
            onNext={handleNext}
            onBack={handleBack}
            steps={steps}
            setData={updateData}
          />
        );
      case 5:
        return (
          <InvoiceDetails
            onNext={handleNext}
            onBack={handleBack}
            steps={steps}
            setData={updateData}
          />
        );
      case 6:
        return (
          <ItemDetails
            onNext={handleNext}
            onBack={handleBack}
            steps={steps}
            setData={updateData}
            data={data}
          />
        );
      default:
        return <></>;
    }
  };

  console.log(data);
  return (
    <div className="p-4 flex align-center justify-center">
      <div className="bg-gray:200 rounded-sm border rounded-xl w-3/4 ">
        <StatusTracker statusName={description} currentstep={steps} />
        {detailsForm(steps)}
      </div>
    </div>
  );
}
