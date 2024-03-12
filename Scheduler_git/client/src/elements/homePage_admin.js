import React, { useEffect } from "react";
import NavBar_admin from './NavBar_admin'
import Empty from "./empty";
import PrivateRoute from '../auth/PrivateRoute'
const HomePage_admin = ()=>{
    const {CheckToken} = PrivateRoute()
    // useEffect(()=>{
    //     CheckToken()
    // },[])
    CheckToken()
    return(
        <div>

            <NavBar_admin/>

            
        </div>
    )
}

export default HomePage_admin;