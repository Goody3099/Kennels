import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { EmployeeProvider } from "./Employee/EmployeeProvider"
import { EmployeeList } from "./Employee/EmployeeList"
import { CustomerProvider } from "./Customer/CustomerProvider"
import { CustomerList } from "./Customer/CustomerList"
import { CustomerForm } from "./Customer/CustomerForm"
import { LocationProvider } from "./Location/LocationProvider"
import { LocationList } from "./Location/LocationList"
import { LocationForm } from "./Location/LocationForm"
import { EmployeeForm } from "./Employee/EmployeeForm"
import { EmployeeDetail } from "./Employee/EmployeeDetail"
import { LocationDetail } from "./Location/LocationDetail"


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

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <AnimalProvider>
                <Route exact path="/animals/detail/:animalId(\d+)">
                    <AnimalDetail />
                </Route>
            </AnimalProvider>

            {/* Render the locations list when http://localhost:3000/locations */}
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>

            <LocationProvider>
                <Route exact path="/locations/create">
                    <LocationForm />
                </Route>
            </LocationProvider>

            <LocationProvider>
                <Route exact path="/locations/detail/:locationId(\d+)">
                    <LocationDetail />
                </Route>
            </LocationProvider>

            {/* Render the employees list when http://localhost:3000/employee */}
            <EmployeeProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <Route exact path="/employees/create">
                        <EmployeeForm />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>

            <EmployeeProvider>
                <Route exact path="/employees/detail/:employeeId(\d+)">
                    <EmployeeDetail />
                </Route>
            </EmployeeProvider>

            {/* Render the customers list when http://localhost:3000/customer */}
            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <CustomerProvider>
                <LocationProvider>
                    <Route exact path="/customer/create">
                        <CustomerForm />
                    </Route>
                </LocationProvider>
            </CustomerProvider>
        </>
    )
}