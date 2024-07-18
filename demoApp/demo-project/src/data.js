let invoices = [
    {
        name: 'Thanh Trung',
        number: 2024,
        ammount: "100.000.000",
        due: "18/07/2024"
    },
    {
        name: 'Test 2',
        number: 2025,
        ammount: "100.000.000",
        due: "18/07/2024"
    },
    {
        name: 'Test 3',
        number: 2026,
        ammount: "100.000.000",
        due: "18/07/2024"
    }
]

export function getInvoices() {
    return invoices;
}

export function getInvoiceByNumber(number){
    return invoices.find((invoice) => invoice.number === number)
}