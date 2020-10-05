import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"

export const EmployeeList = () => {
   // This state changes when `getEmployee()` is invoked below
    const { employee, getEmployee } = useContext(EmployeeContext)
	
	//useEffect - reach out to the world for something
    useEffect(() => {
		getEmployee()
		
    }, [])


    return (	
		<div className="employee">
        {
			employee.map(employee => {
				return <EmployeeCard key={employee.id} location={employee.store} employee={employee} />
			})
        }
        </div>
    )
}