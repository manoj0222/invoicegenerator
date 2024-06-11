import { useEffect, useState } from "react";
import axios from "axios";

 const useFetch = () => {
    const [invoices, setInvoices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInvoices = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('http://localhost:5001/invoices');
                // console.log(response.data)
                setInvoices([...response.data]);
            } catch (error) {
                setError('There was a problem fetching the data');
                console.error('There was a problem fetching the data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInvoices();
    }, []);
    return {invoices, isLoading, error };
}

export default useFetch;