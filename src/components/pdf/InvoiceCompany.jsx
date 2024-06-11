import React, { useRef, useCallback } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import {
  numberToWords,
  extractDate,
  roundToTwoDecimals,
} from "../../utils/util";
import Logo from "./Logo";
import AddressComponent from "./AddressComponent";
import signature from "../../assets/signature.png";
import Brandlogo from "../../assets/Brandlogo.png";

const InvoiceCompany = React.memo(({ company, index }) => {
  const containerRef = useRef();

  const calculateTotals = useCallback(() => {
    let taxAmountTotal = 0;
    let totalAmountTotal = 0;

    company.itemDetails.forEach((item) => {
      const netAmount = item.unitPrice * item.quantity;
      const taxAmount = netAmount * (item.taxRate / 100);
      const totalAmount = netAmount + taxAmount;

      taxAmountTotal += taxAmount;
      totalAmountTotal += totalAmount;
    });

    return { taxAmountTotal, totalAmountTotal };
  }, [company.itemDetails]);

  const { taxAmountTotal, totalAmountTotal } = calculateTotals();

  const downloadPdf = useCallback(async () => {
    const ref = containerRef.current;
    const canvas = await html2canvas(ref);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save(`invoice_${index + 1}.pdf`);
  }, [containerRef, index]);

  return (
    <>
      <section className="w-full p-2 flex justify-end">
        <button
          className="bg-gray-200 flex items-center justify-center  rounded-xl m-2 p-2"
          onClick={downloadPdf}
        >
          Download PDF
        </button>
      </section>
      <div ref={containerRef} className="p-4 border border-black">
        <main className="m-2">
          <section className="flex items-center justify-between p-1">
            <Logo src={Brandlogo} />
            <article className="flex flex-col items-end">
              <h2 className="font-mono text-lg">
                <b>Tax Invoice/Bill of Supply/Cash Memo</b>
              </h2>
              <h4>(Original Recipient)</h4>
            </article>
          </section>
          <section className="flex py-1">
            <div className="w-1/2 ml-1">
              <AddressComponent
                title="Sold By"
                address={[
                  company.sellerDetails.companyName,
                  `${company.sellerDetails.streetAddress}, ${company.sellerDetails.city}, ${company.sellerDetails.state}${company.sellerDetails.postalCode}`,
                ]}
              />
            </div>
            <div className="w-1/2 flex justify-end px-1">
              <AddressComponent
                title="Billing Address"
                address={[
                  `${company.billingDetails.streetAddress}, ${company.billingDetails.city}, ${company.billingDetails.state}`,
                ]}
                code={company.billingDetails.stateUTCCode}
                end={true}
              />
            </div>
          </section>
          <section className="flex justify-between px-1 py-1">
            <div className="w-1/2">
              <AddressComponent
                title="Pan Details"
                address={[
                  `PAN Number: ${company.sellerDetails.panNo}`,
                  `GST Registration Number: ${company.sellerDetails.gstRegistrationNo}`,
                ]}
              />
            </div>
            <div className="w-1/2 w-1/2 flex justify-end px-1">
              <AddressComponent
                title="Shipping Address"
                address={[
                  `${company.shippingDetails.streetAddress}, ${company.shippingDetails.city}, ${company.shippingDetails.state}`,
                ]}
                code={company.shippingDetails.stateUTCCode}
                end={true}
              />
            </div>
          </section>
          <section className="order-details flex align-center justify-between p-1">
            <article className="w-1/2 flex flex-col justify-end">
              <p>
                <strong>Order Number:</strong> {company.orderDetails.orderNo}
              </p>
              <p>
                <strong>Order Date:</strong>{" "}
                <time dateTime={company.orderDetails.orderDate}>
                  {extractDate(company.orderDetails.orderDate)}
                </time>
              </p>
            </article>
            <article className="w-1/2 flex items-end flex-col">
              <p>
                <strong>Place of Supply:</strong>{" "}
                {company.shippingDetails.state}
              </p>
              <p>
                <strong>Place of Delivery:</strong>{" "}
                {company.shippingDetails.state}
              </p>
              <p>
                <strong>Invoice Number:</strong>{" "}
                {company.invoiceDetails.invoiceNo}
              </p>
              <p>
                <strong>Invoice Details:</strong>{" "}
                {company.invoiceDetails.invoiceDetails}
              </p>
              <p>
                <strong>Invoice Date:</strong>{" "}
                <time dateTime={company.invoiceDetails.invoiceDate}>
                  {extractDate(company.invoiceDetails.invoiceDate)}
                </time>
              </p>
            </article>
          </section>
        </main>
        <section className="mt-4">
          <table className="w-full border-collapse border border-black scroll-smooth overflow-auto text-center">
            <thead>
              <tr className="bg-gray-400 text-black">
                <th className="border border-black px-2 py-2">Sl no.</th>
                <th className="border border-black px-2 py-2">Description</th>
                <th className="border border-black px-2 py-2">Unit Price</th>
                <th className="border border-black px-2 py-2">Qty</th>
                <th className="border border-black px-2 py-2">Net Amount</th>
                <th className="border border-black px-2 py-2">Tax Rate</th>
                <th className="border border-black px-2 py-2">Tax Type</th>
                <th className="border border-black px-2 py-2">Tax Amount</th>
                <th className="border border-black px-2 py-2">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {company.itemDetails.map((item, idx) => (
                <tr key={item._id} className="border border-black">
                  <td className="border border-black px-2 py-2">{idx + 1}</td>
                  <td className="border border-black px-2 py-2">
                    {item.description}
                  </td>
                  <td className="border border-black px-2 py-2">
                    {item.unitPrice}
                  </td>
                  <td className="border border-black px-2 py-2">
                    {item.quantity}
                  </td>
                  <td className="border border-black px-2 py-2">
                    {roundToTwoDecimals(item.unitPrice * item.quantity)}
                  </td>
                  <td className="border border-black px-2 py-2">
                    {roundToTwoDecimals(item.taxRate)}%
                  </td>
                  <td className="border border-black px-2 py-2">
                    {item.taxType}
                  </td>
                  <td className="border border-black px-2 py-2">
                    {roundToTwoDecimals(
                      item.unitPrice * item.quantity * (item.taxRate / 100)
                    )}
                  </td>
                  <td className="border border-black px-2 py-2">
                    {roundToTwoDecimals(item.unitPrice * item.quantity) -
                      roundToTwoDecimals(
                        item.unitPrice * item.quantity * (item.taxRate / 100)
                      )}
                  </td>
                </tr>
              ))}
              <tr className="border border-black">
                <td
                  className="border border-black px-3 py-2 text-start"
                  colSpan="7"
                >
                  Total:
                </td>
                <td className="border bg-gray-400 border-black px-3 py-2">
                  {"₹ "}
                  {roundToTwoDecimals(taxAmountTotal)}
                </td>
                <td className="border bg-gray-400 border-black px-3 py-2">
                  {"₹ "}
                  {roundToTwoDecimals(totalAmountTotal)}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="mb-4">
          <h3 className="text-lg font-semibold px-1 py-2 border border-black border-b-[0px]">
            Amount In Words:
          </h3>
          <p className="border border-black py-2 px-1">
            {numberToWords(Math.round(totalAmountTotal))}
            {" Rupees"}
          </p>
        </section>
        <section className="flex justify-end mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">
              For {company.sellerDetails.companyName  }
            </h3>
            <img className="w-40 h-10" alt="signature" src={signature} />
            <h3 className="text-lg font-semibold mb-1">Authorized Signatory</h3>
          </div>
        </section>
        <footer className="mx-3 py-1">
          <h4 className="text-lg font-semibold">
            Whether tax is payable under reverse charge - No
          </h4>
        </footer>
      </div>
    </>
  );
});

export default InvoiceCompany;
