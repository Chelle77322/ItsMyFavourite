/* eslint-disable react-hooks/exhaustive-deps */
import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userSelector, fetchUserBytoken, clearState} from "../Features/userSlice.jsx";

import * as Loader from "react-loader-spinner";
import {default as createBrowserHistory} from "../Helpers/history.js"

const Dashboard = () => {
    const history = createBrowserHistory()
    const dispatch = useDispatch()

    const {isFetching, isError} = useSelector(userSelector)
    
    useEffect(()=> {
        dispatch(fetchUserBytoken({
            token: localStorage.getItem("token")
        }))
    }, [])
    const {id} = useSelector(userSelector)

    useEffect(() => {
        if(isError){
            dispatch(clearState())
            history.push("/login")
        }
    }, [isError])
    const onLogOut = () => {
      if (!window) {
        require('localstorage-polyfill');
    }
        localStorage.removeItem("token")
        history.push("/login")
    }
    return (
        <div className="container mx-auto">
      {isFetching ? (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      ) : (
        <Fragment>
          <div className="container mx-auto">
            Welcome back <h3>{id}</h3>
          </div>
          <button
            onClick={onLogOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Log Out
          </button>
        </Fragment>
      )}
    </div>

    )
}
export default Dashboard;