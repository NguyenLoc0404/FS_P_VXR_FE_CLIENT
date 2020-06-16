import { callApi } from "./../api";
export const getTrips = () => (dispatch) => {
    console.log("vao getTrips action")
    return callApi("/trips")
        .getItems()
        .then(trip => {
            dispatch({
                type: "GET_TRIPS",
                payload: trip
            })
        })
        // .catch(err => Promise.reject(err.response.data))
}

export const SearchApi = (content) => (dispatch) => {
    console.log("vao search")
    return callApi(`/trips/search/${content}`)
        .getItem(content)
        .then(trip => {
            dispatch({
                type: "GET_TRIPS_SEARCH",
                payload: trip
            })
        })
        .catch(err => Promise.reject(err.response.data))
}

export const getTripbyId = (tripId) => (dispatch) => {
    console.log("vao getTripbyId")
    return callApi(`/trips/${tripId}`)
        .getItem(tripId)
        .then(trip => {
            dispatch({
                type: "GET_TRIP_BY_ID",
                payload: trip
            })
        })
        // .catch(err => Promise.reject(err.response.data))

}

export const resetTripStateWhenSwitch = () => (dispatch) => {
    dispatch({
        type: 'RESET_TRIP',
    })
}