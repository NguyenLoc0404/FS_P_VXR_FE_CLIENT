export const setSelectedUser = (user) => (dispatch) => {
    dispatch({
        type: "SET_SELECTED_USER",
        payload: user
    })
}

export const setIsLogin = (isLogin) => (dispatch) => {
    dispatch({
        type: "SET_ISLOGIN",
        payload: isLogin
    })
}

