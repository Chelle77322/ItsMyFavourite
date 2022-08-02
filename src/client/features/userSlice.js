import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const registerUser  = createAsyncThunk ('./features/signUp.js', 
async({id, first_name, last_name}, thunkAPI)=> {
try {
  const response = await fetch ('https://itsmyfavourite.herokuapp.com/api/users/',
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      booking_id,
      full_name,
      password,
    }),
  }
  );
  let data = await response.json();
  console.log('data', data);

  if (response.status === 200){
    localStorage.setItem('token', data.token);
    return {...data, booking_id: booking_id};
  }else {
    return thunkAPI.rejectWithValue(data);
  }
} catch (error){
  console.log('Error', error.response.data);
  return thunkAPI.rejectWithValue(error.response.data);
}
}
);
export const loginUser = createAsyncThunk(
  'users/login',
  async({booking_id, password}, thunkAPI) => {
    try{
      const response = await fetch(
        'https://itsmyfavourite.herokuapp.com/api/auth',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            booking_id,
            password,
          }),
        }
      );
      let data = await response.json();
      console.log('response', data);
      if(response.status === 200){
        localStorage.setItem('token'.data.token);
        return data;
      } else{
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error){
      console.log('Error', error.response.data);
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const fetchUserBytoken = createAsyncThunk('users/fetchUserByToken',
async ({token}, thunkAPI) => {
  try{
    const response = await fetch(
      'https://itsmyfavourite.herokuapp.com/api/users',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      }
    );
    let data = await response.json();
    console.log('data', data.response.status);

    if(response.status === 200){
      return {...data };
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (error){
    console.log('Error', error.response.data);
    return thunkAPI.rejectWithValue(error.response.data);
  }
}
);
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    booking_id: '',
    full_name: '',
    email: '',
    password: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    [registerUser.fulfilled] : (state, {payload}) => {
      console.log('payload', payload);
      state.isFetching = false;
      state.isSuccess = true;
      state.id = payload.user.id;
      state.first_name = payload.user.first_name;
      state.last_name = payload.user.last_name;
    },
    [registerUser.pending]: (state) => {
      state.isFetching = true;
    },
    [registerUser.rejected]: (state, {payload}) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [loginUser.fulfilled]: (state,{payload}) => {
      state.booking_id = payload.booking_id;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [loginUser.rejected]: (state,{payload}) => {
      console.log('payload', payload);
      state.isFetchhing = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchUserBytoken.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchUserBytoken.fulfilled]: (state, {payload})=> {
      state.isFetching = false;
      state.isSuccess = true;
      
      state.booking_id = payload.booking_id;
      state.full_name = payload.full_name;
    },
    [fetchUserBytoken.rejected]: (state) => {
      console.log('fetchUserBytoken');
      state.isFetching = false;
      state.isError = true;
    },
  },
});
export const { clearState } = userSlice.actions;
export const userSelector = (state) => state.user;