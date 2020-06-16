import api from "../../api";
const setHeader = (token) => {
    console.log(token);
    if (token) {
        console.log("vao set token")
        console.log(api.defaults)
        api.defaults.headers.common["token"] = token;
        console.log(api.defaults);
    }
    else {
        console.log("vao xoa token")
        delete api.defaults.headers.common['token'];
    }
}

export default setHeader;

