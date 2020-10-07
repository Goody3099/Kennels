import React, { useState, createContext } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const EmployeeContext = createContext()

/*
 This component establishes what data can be used.
 */
export const EmployeeProvider = (props) => {
    const [employees, setEmployee] = useState([])

    const getEmployee = () => {
        return fetch("http://localhost:8088/employees?_expand=location")
            .then(res => res.json())
            .then(setEmployee)
    }

    const addEmployee = location => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
            .then(getEmployee)
    }

    const getEmployeeById = (id) => {
        return fetch(`http://localhost:8088/employees/${id}?_expand=location`)
            .then(res => res.json())
    }

    const releaseEmployee = employeeId => {
        return fetch(`http://localhost:8088/employees/${employeeId}`, {
            method: "DELETE"
        })
            .then(getEmployee)
    }

    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <EmployeeContext.Provider value={{
            employees, getEmployee, addEmployee, getEmployeeById, releaseEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}