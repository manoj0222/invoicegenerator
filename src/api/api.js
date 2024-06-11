import axios from "axios"



const saveInvoice = async (company) => {
  try {
    const response = await axios.post("http://localhost:5001/invoice", {
      company: company
    });
    response = await response.data;
    return response;
  }
  catch (Error) {
    console.log(Error);
  }
}

export default saveInvoice;