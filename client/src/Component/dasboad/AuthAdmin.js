import React, {Component} from "react"
import LoginForm from '../login/LoginForm'
import {isAuthenticated} from '../helpers/index'
import {Route} from "react-router-dom"


 const AuthAdmin = ({
  component: Component,
  exact,
  path,
}) => (
  <Route
    exact
    path={path}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <LoginForm />
      )
    }
  />
)
export default AuthAdmin;