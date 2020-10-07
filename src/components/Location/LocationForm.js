import React, { useContext, useRef, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { LocationContext } from "../Location/LocationProvider"
import "./Location.css"

export const LocationForm = (props) => {
    const { locations, getLocation, addLocation } = useContext(LocationContext)

    const name = useRef(null)
    const location = useRef(null)

    useEffect(() => {
        getLocation()
    }, [])

    const constructNewLocation = () => {
        const locationId = location.current.value

        if (!locationId) {
            window.alert("Must enter Location.")
        }else if(!name.current.value) {
            window.alert("Must enter name of location.")
        } else {
            addLocation({
                name: name.current.value,
                address: locationId
            })
                .then(() => history.push("/locations"))
        }
    }

    const history = useHistory();

    return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationName">Location name: </label>
                    <input type="text" id="locationName" ref={name} required autoFocus className="form-control" placeholder="Location name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationAddress">Location address: </label>
                    <input type="text" id="locationAddress" ref={location} required autoFocus className="form-control" placeholder="Address" />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewLocation()
                }}
                className="btn btn-primary">
                Save Location
        </button>
        </form>
    )
}