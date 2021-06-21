import React from 'react';
import '../styling/Header.css';
import {useDispatch, useSelector} from 'react-redux';
import {selectSignedIn, selectUserData, setSignedIn, setUserData} from '../features/userSlice';
import { Avatar } from '@material-ui/core';
import { GoogleLogout } from 'react-google-login';

function Header() {
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);

    const dispatch = useDispatch()

    const logout = (response) =>{
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
    }
    return (
        <div className="header">
        <h1>Feedbackr</h1>
        {isSignedIn && (
            <div className="user_data">
                <Avatar src={userData?.imageUrl} alt={userData?.name}/>
                <h1 className="signedin">{userData?.givenName}</h1>
                <GoogleLogout clientId="1009837170906-ju2ajv85p1c0bct4v91cas5hd4jhkm0h.apps.googleusercontent.com"
                render={(renderProps) => (
                    <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="logout__button"
                    >
                        Logout
                    </button>
                )}
                onLogoutSuccess={logout}/>
            </div>
        )}
        </div>

        

    
    )
}

export default Header
