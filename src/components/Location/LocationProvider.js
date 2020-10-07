import React, { useState, createContext } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const LocationContext = createContext()

/*
 This component establishes what data can be used.
 */
export const LocationProvider = (props) => {
    const [locations, setLocation] = useState([])

    const getLocation = () => {
        return fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then(setLocation)
    }

    const addLocation = location => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
            .then(getLocation)
    }

    const getLocationById = (id) => {
        return fetch(`http://localhost:8088/locations/${id}`)
            .then(res => res.json())
    }

    const releaseLocation = locationId => {
        return fetch(`http://localhost:8088/locations/${locationId}`, {
            method: "DELETE"
        })
            .then(getLocation)
    }

    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <LocationContext.Provider value={{
            locations, getLocation, addLocation, getLocationById, releaseLocation
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}