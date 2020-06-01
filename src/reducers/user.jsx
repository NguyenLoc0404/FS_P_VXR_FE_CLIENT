const initialState = {};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        // case "GET_USERS":
        //     return action.payload;
        case "GET_USER_BY_ID":
            {   console.log("vao get user by id");
                return action.payload;
            } 
        // case "PUT_USER":
        //     return action.payload;
        default:
            return state;
    }
};
export default userReducer;
