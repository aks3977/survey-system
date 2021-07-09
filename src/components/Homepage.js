import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
    selectSignedIn,
    selectToken,
    setSignedIn,
    setToken,
    setUserData

} from "../features/userSlice";
import '../styling/Homepage.css';
import Form from './Form';
import AddBoxIcon from '@material-ui/icons/AddBox';
import axios from "axios";



const Homepage = () => {
    const isSignedIn = useSelector(selectSignedIn);
    const token = useSelector(selectToken);
    

    const dispatch = useDispatch();
    const login = (response) => {
        // e.preventDefault();
        console.log(response);
        console.log(response.tokenObj.access_token);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
        dispatch(setToken(response.tokenObj.access_token));

        axios.post("http://localhost:4000/users",{token:token})
        .then(response => {
            console.log(response);
        })
        
    };
    // useEffect((e)=>{
    //     axios.post("http://localhost:4000/users",token)
    //     .then(response => {
    //         console.log(response);
    //     })
    // },[login])
    




        

    return (
        <div className="home__page">
            {!isSignedIn ? (
                <div className="login__message" style={{ display: isSignedIn ? "none" : "" }}>
                    <h2>📗</h2>
                    <h2>Feedbackr The Survey App!</h2>
                    <p>
                        please login to give the survey!! your feedback is valuable to us.
                    </p>
                    <GoogleLogin
                        clientId="1009837170906-ju2ajv85p1c0bct4v91cas5hd4jhkm0h.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="login__button"
                            >
                                Login with Google
                            </button>
                        )}
                        onSuccess={login}
                        onFailure={login}
                        isSignedIn={true}
                        cookiePolicy={"single_host_origin"}
                    />
                </div>

            ) : ("")

            }

        </div>
    );
};

export default Homepage;
