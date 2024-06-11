export const numberToWords = (number) => {
    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    const convert = (num) => {
        if (num < 10) return units[num];
        if (num < 20) return teens[num - 10];
        if (num < 100) return tens[Math.floor(num / 10)] + ' ' + convert(num % 10);
        if (num < 1000) return units[Math.floor(num / 100)] + ' Hundred ' + convert(num % 100);
        if (num < 1000000) return convert(Math.floor(num / 1000)) + ' Thousand ' + convert(num % 1000);
        if (num < 1000000000) return convert(Math.floor(num / 1000000)) + ' Million ' + convert(num % 1000000);
        return 'Number too large';
    };

    if (number === 0) return 'Zero';
    if (number < 0) return 'Minus ' + convert(-number);
    return convert(number);
};


export function extractDate(input) {
    const date = new Date(input);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }


