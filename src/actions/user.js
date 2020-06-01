import {callApi} from "./../api";



export const getUser = (userId) => (dispatch) => {
    return callApi(`/users/${userId}`)
        .getItem(userId)
        .then(user => {
            dispatch({
                type: "GET_USER_BY_ID",
                payload: user
            })
        })

}

export const putUser = (user) => (dispatch) => {
    return callApi(`/users/${user._id}`)
        .updateItem(user)
        .then(() => {
            dispatch({
                type: "PUT_USER",
                payload: user
            })
        })
        .catch(err => Promise.reject(err))
}

export const patchUser = (user) => (dispatch) => {
    return callApi(`/users/${user._id}`)
        .patchItem(user)
        .then(user => {
            dispatch({
                type: "PATCH_USER_PW",
                payload: user
            })
        })

}

export const createAvatar = (data) => (dispatch) => {
    return callApi(`/users/avatar`)
        .createImage(data)
        .then(user => {
            dispatch({
                type: "CREATE_AVATAR",
                payload: user
            })
        })
        .catch(err => Promise.reject(err))

}
