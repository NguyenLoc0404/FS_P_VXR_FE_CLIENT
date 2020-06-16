const initialState = {
    selectedTrip: {},
    selectedTicket: {},
    selectedUser: {},
    isDelete: false,
    isUpdate: false,
    isLogin: false,
};
const layoutReducer = (state = initialState, action) => {
    //console.log("vao layout reducer");
    //console.log(action);

    switch (action.type) {
        case "SET_SELECTED_USER":
            //console.log("vao set selectedUser tren layout");
            return {
                ...state,
                selectedUser: action.payload,
            };

        case "SET_ISLOGIN":
            //console.log("vao set selectedUser tren layout");
            return {
                ...state,
                isLogin: action.payload,
            };  
        default:
            return state;
    }
};


export default layoutReducer;
