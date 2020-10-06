import React, { useContext, useRef, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { LocationContext } from "../Location/LocationProvider"
import { CustomerContext } from "../Customer/CustomerProvider"
//import { AnimalContext } from "../animal/AnimalProvider"
import "./Customer.css"

export const CustomerForm = (props) => {
    const { addCustomers } = useContext(CustomerContext)
    const { locations, getLocation } = useContext(LocationContext)
    //const { animals, getAnimals } = useContext(AnimalContext)


    const name = useRef(null)
    const location = useRef(null)
    //const animal = useRef(null)

    useEffect(() => {
        getLocation()
    }, [])

    const constructNewCustomer = () => {
        const locationId = location.current.value
        //const animalId = parseInt(animal.current.value)

        if (!locationId) {
            window.alert("Please add Address")
        } else {
            addCustomers({
                name: name.current.value,
                address: locationId,
                //animalId
            })
                .then(() => history.push("/customers"))
        }
    }

    const history = useHistory();

    return (
        <form className="customerForm">
            <h2 className="customerForm__title">New Customer</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customerName">Customer name: </label>
                    <input type="text" id="customerName" ref={name} required autoFocus className="form-control" placeholder="Customer name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customerAddress">Customer address: </label>
                    <input type="text" id="customerAddress" ref={location} required autoFocus className="form-control" placeholder="Address" />
                </div>
            </fieldset>
            
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="animal">Animal: </label>
                    <select defaultValue="" name="Animal" ref={animal} id="animalCustomer" className="form-control" >
                        <option value="0">Select a animal</option>
                        {customers.map(a => (
                            <option key={a.id} value={a.id}>
                                {a.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset> */}
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewCustomer()
                }}
                className="btn btn-primary">
                Save customer
            </button>
        </form>
    )
}