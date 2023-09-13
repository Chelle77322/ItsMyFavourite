import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const registerUser  = createAsyncThunk (signUp)
console.log(registerUser)
async({id, first_name, last_name, password}, thunkAPI)=> {
try {
  const response = await fetch ('https://localhost:8080/api/users/',
  {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      first_name, last_name,
      password,
    }),
  }
  );
  let data = await response.json();
  console.log('data', data);

  if (response.status === 200){
    if (!window) {
      require('localstorage-polyfill');
  }
    localStorage.setItem('token', data.token);
    return {...data,_id: _id};
  }else {
    return thunkAPI.rejectWithValue(data);
  }
} catch (error){
  console.log('Error', error.response.data);
  return thunkAPI.rejectWithValue(error.response.data);
}
}

const loginUser = createAsyncThunk(
  'users/login',
  async({_id, firstName, lastName,password}, thunkAPI) => {
    try{
      const response = await fetch(
        'https://localhost:8080/auth',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            _id,
            firstName, lastName,
            password,
          }),
        }
      );
      let data = await response.json();
      console.log('response', data);
      if(response.status === 200){
        if (!window) {
          require('localstorage-polyfill');
      }
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
const fetchUserByToken = createAsyncThunk('users/fetchUserByToken',
async ({token}, thunkAPI) => {
  try{
    const response = await fetch(
      'https://localhost:8080/api/users',
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
const userSlice = createSlice({
  name: 'user',
  initialState: {
    _id: '',
    firstName: '',
    lastName: '',
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
      state._id = payload.user._id;
      state.firstName = payload.user.firstName;
      state.lastName = payload.user.lastName;
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
      state._id = payload._id;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [loginUser.rejected]: (state,{payload}) => {
      console.log('payload', payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchUserByToken.pending]: (state) => {
      state.isFetching = true;
    },
    [fetchUserByToken.fulfilled]: (state, {payload})=> {
      state.isFetching = false;
      state.isSuccess = true;
      
      state._id = payload._id;
      state.firstName = payload.firstName;
    },
    [fetchUserByToken.rejected]: (state) => {
      console.log(fetchUserByToken);
      state.isFetching = false;
      state.isError = true;
    },
  },
});
export const { setValue } = userSlice.actions;
export const userSelector = (state) => state.user;
export default userSlice.reducer;