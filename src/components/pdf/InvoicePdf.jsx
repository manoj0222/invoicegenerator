import InvoiceCompany from "./InvoiceCompany";
import useFetch from "../../Hooks/useFecth";
import { useNavigate } from "react-router-dom";

const InvoicePdf = () => {
  const { invoices, isLoading, error } = useFetch();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if(error){
  return <div>Error Has Occured</div>;
  }

  const handleClick =()=>{
    navigate("/")
  }
  return (
    <>
      <button
          className="bg-gray-200 flex items-center justify-center  rounded-xl m-2 p-2"
          onClick={handleClick}
        >
          Home
        </button>
      {invoices.length>0?invoices.map((company, index) => (
        <InvoiceCompany key={index} company={company} index={index} />
      )):<div>Data Not Found</div>}
    </>
  );
};

export default InvoicePdf;
