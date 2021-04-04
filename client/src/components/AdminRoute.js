import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function AdminRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser && currentUser.email === 'abv@abv.bgr' ? <Component {...props} /> : <Redirect to="/error" />
      }}
    ></Route>
  )
}