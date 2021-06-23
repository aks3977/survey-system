import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import React from 'react';

// function ProtectedRoute({ children, isSignedIn, ...rest }) {
//     console.log(isSignedIn);
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         isSignedIn ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
    
//   );
// }
const ProtectedRoute = ({ component: Component, isSignedIn, ...rest}) => (
    <Route
      {...rest}
      render={props => (
        isSignedIn
        ? (
           <Component {...props} />
        )
        : (<Redirect to={{ pathname: '/', state: { from: props.location} }} />)
      )}
    />
    );

const mapStateToProps = (state) => {
console.log(state);
console.log(state.user.isSignedIn);
  return { isSignedIn: state.user.isSignedIn };
  
};

export default connect(mapStateToProps)(ProtectedRoute);
