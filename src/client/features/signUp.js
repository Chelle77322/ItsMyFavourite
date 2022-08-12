/* eslint-disable react-hooks/exhaustive-deps */
import  React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { useSelector, useDispatch} from 'react-redux';
import {registerUser, userSelector, clearState} from "./userSlice";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";


const signUp = () => {
  const dispatch = useDispatch ();
  const {handleSubmit} = useForm();

const history = useNavigate();
const {isSuccess, isError, errorMessage } = useSelector( userSelector);

const onSubmit = (data) => {
  dispatch(registerUser(data));
};

useEffect(() => {
  return() => {
    dispatch(clearState());
  };
  
}, []);
useEffect (() => {
  if(isSuccess) {
    dispatch(clearState());
    history.push('/');
  }
  if (isError){
    toast.error(errorMessage);
    dispatch(clearState());
  }
}, [isSuccess, isError]);
return (
  <Fragment>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up to create your new account with Its My Favourite
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
            >
             
            </form>
            <div class="mt-6">
              <div class="relative">
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-gray-500">
                    Or <Link to="login"> Login</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>

);
};
export default signUp;