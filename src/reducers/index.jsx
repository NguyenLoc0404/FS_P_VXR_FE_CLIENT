import { combineReducers } from "redux";
import user from "./user";
import layout from "./layout";
import auth from "./auth";
import ticket from "./ticket";
import trip from "./trip";
//store Tổng ứng dụng
     const rootReducer = combineReducers({
    //noi se chua  cac reducer cho nghiep vu ( store con)
    user,layout,auth,ticket,trip
})

export default rootReducer;