import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./CustomerProvider"
import { LocationProvider } from "./LocationProvider"
import { EmployeeProvider } from "./EmployeeProvider"
import { CustomerList } from "./CustomerList"
import { LocationList } from "./LocationList"
import { EmployeeList } from "./EmployeeList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
                <h2>Animals</h2>
                <AnimalProvider>
                    <AnimalList />
                </AnimalProvider>
            </Route>

            {/* Render the customer list when http://localhost:3000/customers */}
            <Route path="/customers">
                <h2>Customers</h2>
                <CustomerProvider>
                    <CustomerList />
                </CustomerProvider>
            </Route>

            {/* Render the locations list when http://localhost:3000/locations */}
            <Route path="/locations">
                <h2>Locations</h2>
                <AnimalProvider>
                <LocationProvider>
                    <LocationList />
                </LocationProvider>
                </AnimalProvider>
            </Route>

            {/* Render the employees list when http://localhost:3000/employees */}
            <Route path="/employees">
                <h2>Employees</h2>
                <EmployeeProvider>
                    <EmployeeList />
                </EmployeeProvider>
            </Route>
        </>
    )
}