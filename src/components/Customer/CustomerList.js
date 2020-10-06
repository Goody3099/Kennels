import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCard } from "./CustomerCard"
import { useHistory } from 'react-router-dom'
import "./Customer.css"

export const CustomerList = () => {
   // This state changes when `getCustomers()` is invoked below
    const { customers, getCustomers } = useContext(CustomerContext)
	
	//useEffect - reach out to the world for something
    useEffect(() => {
		getCustomers()
		
    }, [])


    const history = useHistory()

    return (
      <>
          <h2>Customer</h2>
      <button onClick={() => {history.push("/customer/create")}}>
              Add Customer
          </button>
          <div className="customer">
          {
        customers.map(customer => {
          return <CustomerCard key={customer.id} customer={customer} />
        })
          }
          </div>
      </>
  )
}