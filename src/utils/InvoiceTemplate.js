const InvoiceTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Invoice Template</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet" />
</head>
<body>
  <main class="m-2">
    <section class="flex items-center justify-between p-1 border">
      <span><img class="w-60 h-20" alt="logo" src="{{Company.Logo}}" /></span>
      <article class="flex flex-col items-end">
        <strong class="font-mono">Tax Invoice/Bill of Supply/Cash Memo</strong>
        <h4>(Original Recipient)</h4>
      </article>
    </section>
    <section class="flex items-center justify-between px-1 py-1 border seller-billing-address">
      <article class="w-1/2 flex flex-col mb-1 py-1">
        <h3 class="text-l font-semibold mb-1">Sold By:</h3>
        <address class="not-italic">
          {{Company.Name}}<br>
          {{Company.Address}}
        </address>
        <p class="mb-1"><strong>PAN Number:</strong> {{Company.PAN}}</p>
        <p class="mb-1"><strong>GST Registration Number:</strong> <span class="font-mono p-1 uppercase">{{Company.GST}}</span></p>
      </article>
      <article class="w-1/2 flex flex-col items-end mb-1 py-1">
        <h3 class="text-l font-semibold mb-1">Billing Address:</h3>
        <address class="not-italic">{{Contact.BillingAddress}}</address>
        <p><strong>State/UT Code:</strong> {{Contact.BillingStateCode}}</p>
      </article>
    </section>
    <section class="flex items-end flex-col border mb-1 p-1 shipping-address">
      <h3 class="text-l font-semibold mb-1">Shipping Address:</h3>
      <address class="not-italic">{{Contact.ShippingAddress}}</address>
      <p><strong>State/UT Code:</strong> {{Contact.ShippingStateCode}}</p>
    </section>
    <section class="order-details flex align-center justify-between p-1 border">
      <article class="w-1/2 flex flex-col justify-end">
        <p><strong>Order Number:</strong> {{Deal.OrderNumber}}</p>
        <p><strong>Order Date:</strong> <time datetime="{{Deal.OrderDate}}">{{Deal.OrderDate}}</time></p>
      </article>
      <article class="w-1/2 flex items-end flex-col">
        <p><strong>Place of Supply:</strong> {{Deal.PlaceOfSupply}}</p>
        <p><strong>Place of Delivery:</strong> {{Deal.PlaceOfDelivery}}</p>
        <p><strong>Invoice Number:</strong> {{Invoice.InvoiceNumber}}</p>
        <p><strong>Invoice Details:</strong> {{Invoice.Details}}</p>
        <p><strong>Invoice Date:</strong> <time datetime="{{Invoice.InvoiceDate}}">{{Invoice.InvoiceDate}}</time></p>
      </article>
    </section>
  </main>
  <section class="m-2 overflow-x-auto">
    <table class="min-w-full bg-white border border-black">
      <thead>
        <tr class="bg-gray-400 text-black border border-black">
          <th class="border border-black px-2 py-2">Sl no.</th>
          <th class="border border-black px-2 py-2">Description</th>
          <th class="border border-black px-2 py-2">Unit Price</th>
          <th class="border border-black px-2 py-2">Qty</th>
          <th class="border border-black px-2 py-2">Net Amount</th>
          <th class="border border-black px-2 py-2">Tax Rate</th>
          <th class="border border-black px-2 py-2">Tax Type</th>
          <th class="border border-black px-2 py-2">Tax Amount</th>
          <th class="border border-black px-2 py-2">Total Amount</th>
        </tr>
      </thead>
      <tbody class="border border-black">
        {% for item in Invoice.Items %}
        <tr class="border border-black">
          <td class="border border-black px-2 py-2">{{ loop.index }}</td>
          <td class="border border-black px-2 py-2">{{ item.Description }}</td>
          <td class="border border-black px-2 py-2">{{ item.UnitPrice }}</td>
          <td class="border border-black px-2 py-2">{{ item.Quantity }}</td>
          <td class="border border-black px-2 py-2">{{ item.NetAmount }}</td>
          <td class="border border-black px-2 py-2">{{ item.TaxRate }}</td>
          <td class="border border-black px-2 py-2">{{ item.TaxType }}</td>
          <td class="border border-black px-2 py-2">{{ item.TaxAmount }}</td>
          <td class="border border-black px-2 py-2">{{ item.TotalAmount }}</td>
        </tr>
        {% endfor %}
        <tr class="border border-black">
          <td class="border border-black px-3 py-2" colspan="7">Total:</td>
          <td class="border border-black px-3 py-2">₹{{ Invoice.TotalTaxAmount }}</td>
          <td class="border border-black px-3 py-2">₹{{ Invoice.TotalAmount }}</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section class="border flex flex-col m-2 p-1">
    <h3 class="text-l font-semibold mb-1 px-2">Amount In Words:</h3>
    <p>{{ Invoice.AmountInWords }}</p>
  </section>
  <section class="m-2 border flex align-center justify-end p-1">
    <article class="flex flex-col items-end">
      <h3 class="text-l font-semibold mb-1">For {{Company.Name}}</h3>
      <span class="border"><img class="w-40 h-10" alt="signature" src="{{Company.Signature}}" /></span>
      <h3 class="text-l font-semibold mb-1">Authorized Signatory</h3>
    </article>
  </section>
  <footer class="flex align-start justify-start mx-2">
    <h4 class="text-sl font-semi">Whether tax is payable under reverse charge - No</h4>
  </footer>
</body>
</html>
`;

export default InvoiceTemplate;
