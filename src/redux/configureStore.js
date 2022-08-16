import { configureStore} from '@reduxjs/toolkit';
import userSlice from "../client/features/userSlice";
import rootReducer from "../client/reducers/index";



const configuredStore = configureStore({
  reducer: {
    reducer:rootReducer,
    user: userSlice,
  }
});
export default configuredStore