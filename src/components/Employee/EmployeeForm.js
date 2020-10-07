import React, { useContext, useRef, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { EmployeeContext } from '../Employee/EmployeeProvider'
import { LocationContext } from '../Location/LocationProvider'
import './Employee.css'

export const EmployeeForm = (props) => {
    const { employees, getEmployee, addEmployee } = useContext(EmployeeContext)
    const { locations, getLocation } = useContext(LocationContext)

    const name = useRef(null)
    const location = useRef(null)

    useEffect(() => {
        getEmployee().then(getLocation)
    }, [])

    const constructNewEmployee = () => {
        const locationId = parseInt(location.current.value)

        if(locationId === 0) {
            window.alert("Please select a location.")
        }else {
            addEmployee({
                name: name.current.value,
                locationId
            })
            .then(() => history.push("/employees"))
        }
    }

    const history = useHistory()

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewEmployee()
                }}
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}