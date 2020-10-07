import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import { useHistory } from 'react-router-dom'
import "./Location.css"

export const LocationList = () => {
   // This state changes when `getLocation()` is invoked below
    const { locations, getLocation } = useContext(LocationContext)
	
	//useEffect - reach out to the world for something
    useEffect(() => {
		getLocation()
		
    }, [])


    const history = useHistory()

    return (
      <>
          <h2>Location</h2>
      <button onClick={() => {history.push("/locations/create")}}>
              Add Location
          </button>
          <div className="locations">
          {
        locations.map(location => {
          return <LocationCard key={location.id} location={location} />
        })
          }
          </div>
      </>
  )
}