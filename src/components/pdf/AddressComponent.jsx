import React from "react";
const AddressComponent = ({ title,address,end,code}) => {
  
  return (
    <article className={end?"w-1/2 flex flex-col mb-1 py-1 items-end":"w-1/2 flex flex-col mb-1 py-1"}>
      <strong className="mb-1">{title}:</strong>
      <address className="not-italic">
        {address.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </address>
      <section>
      {end&&<strong className="flex">State/UT Code:<p>{code}</p></strong>}
      </section>
    </article>
  );
};

export default AddressComponent;
