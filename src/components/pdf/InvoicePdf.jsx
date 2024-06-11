import InvoiceCompany from "./InvoiceCompany";
import useFetch from "../../Hooks/useFecth";

const InvoicePdf = () => {
  const { invoices, isLoading, error } = useFetch();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if(error){
  return <div>Error Has Occured</div>;
  }
  return (
    <>
      {invoices.length>0?invoices.map((company, index) => (
        <InvoiceCompany key={index} company={company} index={index} />
      )):<div>Data Not Found</div>}
    </>
  );
};

export default InvoicePdf;
