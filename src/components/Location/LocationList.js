import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"

export const LocationList = () => {
   // This state changes when `getLocation()` is invoked below
    const { locations, getLocation } = useContext(LocationContext)
	
	//useEffect - reach out to the world for something
    useEffect(() => {
		getLocation()
		
    }, [])


    return (	
		<div className="locations">
        {
			locations.map(location => {
				return <LocationCard key={location.id} address={location.address} location={location} />
			})
        }
        </div>
    )
}