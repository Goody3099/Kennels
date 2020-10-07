import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
   // This state changes when `getEmployee()` is invoked below
    const { employees, getEmployee } = useContext(EmployeeContext)
	console.log(employees)
	//useEffect - reach out to the world for something
    useEffect(() => {
		getEmployee()
		
    }, [])


    const history = useHistory()

    return (
      <>
      <h2>Employee</h2>
  <button onClick={() => {history.push("/employees/create")}}>
          Add Employee
      </button>
      <div className="employees">
      {
    employees.map(employee => {
      return <EmployeeCard key={employee.id} employee={employee} />
    })
      }
      </div>
  </>
    )
}