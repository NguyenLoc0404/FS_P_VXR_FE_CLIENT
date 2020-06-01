import {callApi} from "./../api";
export const deleteTicket = (id)=>dispatch => 
//dispatch => 
{    console.log('deleteTicket');
    return callApi(`/tickets/${id}`)
        .deleteItem()
        .then(() => {
            dispatch({
                type: "DELETE_TICKET",
                payload: id
            })
        })
        .catch(err => Promise.reject(err))

}

export const setCartApi = (id) => (dispatch) => {
    console.log('setCartApi===========');
    return callApi(`/tickets/all/${id}`)
        .getItem(id)
        .then(res => {
            console.log("vao set cart api");
            console.log(res);
            dispatch({
                type: "SET_TICKETS",
                payload: res
            })
            return;
        })
        .catch(err => Promise.reject(err))
}