import _ from "lodash"
const initialState = {
  cart: []
}

const ticketReducer = (state = initialState, action) => {

  switch (action.type) {
    case "SET_TICKETS":
      console.log("Set ticket");
      console.log(action.payload);
      return {
        ...state,
        cart: action.payload
      };
    case "DELETE_TICKET":
      return {
        ...state,
        cart: state.cart.filter((t) => t._id !== action.payload)
      }

    default:
      return state;
  }
}
export default ticketReducer;
// cho nao a