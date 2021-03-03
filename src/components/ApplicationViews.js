import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./CustomerProvider"
import { LocationProvider } from "/.LocationProvider"
import { EmployeeProvider } from "/.EmployeeProvider"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalProvider>
                    <AnimalList />
                </AnimalProvider>
            </Route>

            {/* Render the customer list when http://localhost:3000/customers */}
            <Route path="/customers">
                <CustomerProvider>
                    <CustomerList />
                </CustomerProvider>
            </Route>

            {/* Render the locations list when http://localhost:3000/locations */}
            <Route path="/locations">
                <LocationProvider>
                    <LocationList />
                </LocationProvider>
            </Route>

            {/* Render the employees list when http://localhost:3000/employees */}
            <Route path="/employee">
                <EmployeeProvider>
                    <EmployeeList />
                </EmployeeProvider>
            </Route>
        </>
    )
}