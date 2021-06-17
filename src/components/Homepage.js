import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
    selectSignedIn,
    setSignedIn,
    setUserData
    
} from "../features/userSlice";
import '../styling/Homepage.css'
import Form from './Form';



const Homepage = () => {
    const isSignedIn = useSelector(selectSignedIn);

    const dispatch = useDispatch();
    const login = (response) => {
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    };

    return (
        <div className="home__page">
            {!isSignedIn ?(
                <div className="login__message">
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

            ):(
                <Form/>
            )

            }
                
        </div>
    );
};

export default Homepage;
