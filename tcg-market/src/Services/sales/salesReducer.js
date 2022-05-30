import { SALES_SAVED, SALES_REQUEST, SALES_SUCCESS, SALES_FAILURE, SALES_DELETE_REQUEST } from "./salesTypes";

const initialState = {
  sales : [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SALES_SAVED:
    case SALES_REQUEST:
      return {
        ...state,
      };
    case SALES_SUCCESS:
    case  SALES_FAILURE:
      return {
        sales : action.payload,
      };
    default:
      return state;
  }
};

export default reducer;