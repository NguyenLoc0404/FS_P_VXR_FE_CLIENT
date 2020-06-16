const initialState = {};
const tripReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TRIPS":
      {
        console.log("vao get trips");
        return action.payload;
      }
    case "GET_TRIP_BY_ID":
      {
        console.log("GET_TRIP_BY_ID");
        return action.payload;
      }
    case 'RESET_TRIP': 
        return state = {};
    default:
      return state;
  }
};
export default tripReducer;
