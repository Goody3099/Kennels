import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { CustomerCard} from "./Customer/Customer"
import { LocationCard } from "./Location/Location"
import { EmployeeCard } from "./Employee/Employee"

export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalCard />
            </Route>

            {/* Render the animal list when http://localhost:3000/locations */}
            <Route path="/locations">
                <LocationCard />
            </Route>

            {/* Render the animal list when http://localhost:3000/employee */}
            <Route path="/employees">
                <EmployeeCard />
            </Route>

            {/* Render the animal list when http://localhost:3000/customer */}
            <Route path="/customers">
                <CustomerCard />
            </Route>
        </>
    )
}