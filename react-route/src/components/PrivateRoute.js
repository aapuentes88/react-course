import { Route, Navigate } from 'react-router-dom'

const PrivateRoute = ({element, ...rest}) => {

    let auth
    auth = true
    // auth = null

    if (!auth) {
        return <Navigate to="/login" replace />;
    }

    return element;
//   react-reouter -v5 
//   return (
//     <Route {...rest} element= {auth ? element : <Navigate to="/login" replace />}/>
//   )
}

export default PrivateRoute