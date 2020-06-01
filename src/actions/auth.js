
import setHeader from "./../components/ultils/setHeader";
import api from "./../api";
import jwtDecode from "jwt-decode";

//credentials {email, password}
export const login = (credentials) => (dispatch) => {
    return api.post("/users/login", credentials)
        .then(res => {
            // console.log(res.data);
            const { token } = res.data;
            //decoded
            const decoded = jwtDecode(token);
            console.log(decoded);
            console.log(decoded.userType);
        

            //lưu vô local storage
            localStorage.setItem("token", token);

           
            setHeader(token)
           

            dispatch(setCurrentUser(decoded));
            return;
        })
        .catch(err => Promise.reject(err))
}

export const setCurrentUser = (decoded) => {
    return ({
        type: "SET_CURRENT_USER",
        payload: decoded
    })
}

export const logout = () => dispatch => {
    console.log("vao log out");
    localStorage.removeItem("token");
    setHeader();
    dispatch(setCurrentUser({}));
}



