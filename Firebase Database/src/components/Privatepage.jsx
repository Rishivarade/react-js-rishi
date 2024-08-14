import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';

import { Navigate } from 'react-router-dom';
import { auth } from '../Firebase/Firebase';
const Privatepage = ({children}) => {
    const [user] = useAuthState(auth);
    if (!user){
        return <Navigate to={"/login"}/>
    }
    return children 

}

export default Privatepage
