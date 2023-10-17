import React, { useEffect, useState } from 'react';


const Table = () => {
    // const mainData = deepCopy(data);
    const [allData, setAllData] = useState(data);
    const [showItem, setShowItem] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalDue, setTotalDue] = useState(0);

    const [test, setTest] = useState(0);
      
  const  handleChange=(e,id) =>{
        let data_index = allData.findIndex(x=>x.id==id);
        let data_object = allData[data_index];

        if(e.target.value>0 && data_object.payableAmount>=e.target.value)
        {   
            data_object.invoiceDetail.amountDue = data_object.payableAmount-e.target.value;
            allData[data_index] = data_object;
            if(data_object.payableAmount==e.target.value)
            data_object.paymentStatus='Done';
            else
            {
                data_object.paymentStatus='Pending';
            }
            setAllData(allData);

        }
        else if(e.target.value=='')
        {   
            data_object.paymentStatus='Pending';
         data_object.invoiceDetail.amountDue = data_object.payableAmount;
         allData[data_index] =data_object;
            setAllData(allData);
        }
        else{}
        const total_amount = allData.reduce((acc,item)=>acc+item.payableAmount,0);
        const total_due = allData.reduce((acc,item)=>acc+item.invoiceDetail.amountDue,0);
        setTotalPrice(total_amount);
        setTotalDue(total_due);
            }
       
    

    useEffect(()=>{
        const total_amount = allData.reduce((acc,item)=>acc+item.payableAmount,0);
        const total_due = allData.reduce((acc,item)=>acc+item.invoiceDetail.amountDue,0);
        setTotalPrice(total_amount);
        setTotalDue(total_due);       
       
    },[test,allData,setTotalPrice,setTotalDue]);
    
    return (

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Company Name</th>
                    <th>Payment Status</th>
                    <th>Due Amount</th>
                    <th className='btn'>Action</th>
                </tr>
            </thead>
            <tbody>
                {allData.map((list, index) => {
                    return (
                        <>
                            <tr key={`list-${index}`} className={`${list.paymentStatus == "Pending" && list.amountDue != 0 ? "red" : "green"}`}>
                                <td>{list.id}</td>
                                <td>{list.companyName}</td>
                                <td >{list.paymentStatus}</td>
                                <td>{list.invoiceDetail.amountDue}</td>
                                <td className='btn'>
                                    <button onClick={() => setShowItem(list.id)}>+</button>
                                    {showItem === list.id ?
                                        <>
                                            <input type="text" onChange={(event)=>handleChange(event,list.id)} placeholder={list.invoiceDetail.amountDue} />
                                            <button >pay</button>
                                        </>
                                        : ""}
                                </td>
                            </tr>

                        </>
                    )
                })}
                <tr>
                    <td>Total payable amount</td>
                    <td>{totalPrice}</td>
                </tr>
                <tr>
                    <td>Total dues pending</td>
                    <td>{totalDue}</td>
                </tr>
            </tbody>

        </table>



    )
}

export default Table



const data =
    [
        {
            id: "1",
            invoiceId: [],
            bookingCode: [
                "YW-YPBP-BKNG-652-23-02",
                "YW-YPBP-BKNG-662-23-02"
            ],
            resourceAlias: [
                "PBPOFD-5",
                "PBPOFD-6",
                "PBPOFD-7",
            ],
            isEmailSent: true,
            paymentDetails: [],
            paymentStatus: "Done",
            bookingAmount: 7260,
            payableAmount: 8566,
            taxInvoiceCode: null,
            taxInvoiceDate: null,
            taxes: [
                {
                    name: "CGST",
                    percentage: 9,
                    value: 653
                },
                {
                    name: "SGST",
                    percentage: 9,
                    value: 653
                }
            ],
            isCombined: false,
            type: "Single",
            status: "Active",
            companyName: "Duss Technologies",
            locationName: "“Duss Andheri - Pinnacle Business Park",
            bookingQuantity: 3,
            resourceName: "3 - Seater Cabin",
            resourceType: "3 - Seater Cabin",
            code: "PI-414/YSPL/22-23",
            fiscalYear: "22-23",
            invoiceDetail: {
                customerName: "Duss Technologies",
                billingPeriod: "01 Dec 2022",
                reference: "“Duss Andheri - Pinnacle Business Park",
                invoiceNo: "PI-414/YSPL/22-23",
                invoiceType: "PROFORMA",
                invoiceDate: "01-12-2022",
                paymentDueDate: "08-12-2022",
                items: [
                    {
                        description: "Open Fixed Desk",
                        price: 550,
                        quantity: 9
                    },
                    {
                        description: "3 - Seater Cabin",
                        price: 2310,
                        quantity: 1
                    }
                ],
                taxes: [
                    {
                        name: "CGST",
                        percentage: 9,
                        value: 653
                    },
                    {
                        name: "SGST",
                        percentage: 9,
                        value: 653
                    }
                ],
                from: 1669852800000.0,
                to: 1672531140000.0,
                payableAmount: 8566,
                bookingAmount: 7260,
                amountDue: 0,
                customerEmail: "“soumil@dusstechnologies.com”",
                customerGstNumber: "06AABCW5990R1ZF",
                customerPan: "AABCW5990R",
                customerPhone: "8097776925",
                customerAddress: "3rd floor, Unit no 31, 22002",
                bankName: "HDFC Bank",
                branchName: "Kamala Mills",
                accountName: "YesssWorks Spaces Pvt. Ltd",
                accountNumber: "YESSSW427PIN",
                ifsc: "HDFC0000542"
            },

        },
        {
            id: "2",
            invoiceId: [],
            bookingCode: [
                "YW-YPBP-BKNG-652-23-02",
                "YW-YPBP-BKNG-662-23-02"
            ],
            resourceAlias: [
                "PBPOFD-5",
                "PBPOFD-6",
                "PBPOFD-7",
                "PBPOFD-2",
                "PBPOFD-1",
                "PBPOFD-3",
                "PBPOFD-4",
                "PBPOFD-8",
                "PBPOFD-9",
                "3 Seater Cabin-1"
            ],
            isEmailSent: true,
            paymentDetails: [],
            paymentStatus: "Pending",
            bookingAmount: 72600,
            payableAmount: 85668,
            taxInvoiceCode: null,
            taxInvoiceDate: null,
            taxes: [
                {
                    name: "CGST",
                    percentage: 9,
                    value: 6534
                },
                {
                    name: "SGST",
                    percentage: 9,
                    value: 6534
                }
            ],
            isCombined: false,
            ype: "Single",
            status: "Active",
            companyName: "Duss Digital Infra Pvt Ltd",
            locationName: "“Duss Andheri - Pinnacle Business Park",
            bookingQuantity: 10,
            resourceName: "3 - Seater Cabin",
            resourceType: "3 - Seater Cabin",
            code: "PI-414/YSPL/22-23",
            fiscalYear: "22-23",
            invoiceDetail: {
                customerName: "Duss Digital Infra Pvt Ltd",
                billingPeriod: "01 Dec 2022",
                reference: "“Duss Andheri - Pinnacle Business Park",
                invoiceNo: "PI-414/YSPL/22-23",
                invoiceType: "PROFORMA",
                invoiceDate: "01-12-2022",
                paymentDueDate: "08-12-2022",
                items: [
                    {
                        description: "Open Fixed Desk",
                        price: 5500,
                        quantity: 9
                    },
                    {
                        description: "3 - Seater Cabin",
                        price: 23100,
                        quantity: 1
                    }
                ],
                taxes: [
                    {
                        name: "CGST",
                        percentage: 9,
                        value: 6534
                    },
                    {
                        name: "SGST",
                        percentage: 9,
                        1: "",
                        2: "",
                        3: "",
                        4: "",
                        5: "",
                        6: "",
                        7: "",
                        1: "",
                        2: "",
                        value: "6534"
                    }
                ],
                from: 1669852800000.0,
                to: 1672531140000.0,
                payableAmount: 85668,
                bookingAmount: 72600,
                amountDue: 85668,
                customerEmail: "“soumil@dussdigitalinfra.com",
                customerGstNumber: "06AABCW5990R1ZF",
                customerPan: "AABCW5990R",
                customerPhone: "8097776925",
                customerAddress: "3rd floor, Unit no 31, 22002",
                bankName: "HDFC Bank",
                branchName: "Kamala Mills",
                accountName: "YesssWorks Spaces Pvt. Ltd",
                accountNumber: "YESSSW427PIN",
                ifsc: "HDFC0000542"
            },
        }
    ]
// Table columns
// Id / Serial Number
// Company Name
// Quantity of resourceAlias booked ( show the list of resourceAlias on
// hover - optional )
// Payment Status
//
// Due / Pending Amount
// + Action button
// Following are the operations to be done :-
// Iterate the data provided below in a table with the columns mentioned
// above
// Show a + action button on the end of the row and on click of the
// action button the user should be able to enter a amount which will be
// deducted from the payable amount and the new amount ( post
// deduction from the payable amount ) is to be displayed in the due

// 3.
// 4.
// 1.
// 2.
// amount table element
// For the invoices that are paid the table row should have a green
// background and for those pending with red background
// Need to show 2 fields anywhere on the page which will be showing the
// following
// Total payable amount for all the invoices
// Total dues pending for all ha