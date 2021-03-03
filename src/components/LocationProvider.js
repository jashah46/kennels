import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const LocationContext = createContext()

// This component establishes what data can be used. Why do we pass through "props" & why is useState an empty array on line 8. 
export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations?_expand=location")
        .then(res => res.json())
        .then(setLocations)
    }

    const addLocation = LocationsObj => {
        return fetch("http://localhost:8088/Locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationObj)
        })
        .then(getLocations)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <LocationContext.Provider value={{
            Location, getLocations, addLocations
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}