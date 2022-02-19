import React from "react"
import { Route, Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute() {
  const { currentUser } = useAuth()

//   return (
    // <Route
    //   {...rest}
    //   render={props => {
    return currentUser ? <Outlet/> : <Navigate to="/login" />
    //   }}
    // ></Route>
//   )
}