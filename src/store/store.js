import { configureStore} from '@reduxjs/toolkit';

import {userSlice} from "../client/features/userSlice";
export default () => configureStore({
  reducer: {
    user: userSlice.reducer,
  }
});