import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeProvider } from "./Employee/EmployeeProvider"
import { EmployeeList } from "./Employee/EmployeeList"
import { CustomerProvider } from "./Customer/CustomerProvider"
import { CustomerList } from "./Customer/CustomerList"
import { LocationCard } from "./Location/LocationCard"


export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render the home list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>

            {/* Render the locations list when http://localhost:3000/locations */}
            <Route path="/locations">
                <LocationCard />
            </Route>

            {/* Render the employees list when http://localhost:3000/employee */}
            <EmployeeProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>

            {/* Render the customers list when http://localhost:3000/customer */}
            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
        </>
    )
}