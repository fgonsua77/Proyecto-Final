import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import authReducer from "./user/auth/authReducer";
import cardReducer from "./card/cardReducer";

const rootReducer = combineReducers({
  user: userReducer,
  card: cardReducer,
  auth: authReducer,
});

export default rootReducer;
