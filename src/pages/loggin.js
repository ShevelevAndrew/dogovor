
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Spinner} from 'react-bootstrap';
import { getLogin } from "../store/login"

export const LoginPage = () => {
  const [authMode, setAuthMode] = useState("signin")
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")

  const { error, pending } = useSelector((state) => state.login)
  const dispatch = useDispatch();

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getLogin({
      email: mail,
      password: password
    }));
  }

 if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit} >
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary curs" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                onChange={(e) => setMail(e.target.value)}
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              {!pending ?
                <button type="submit" className="btn btn-primary">
                  Войти
                </button>
                :
                <Spinner animation="border" variant="primary" />
              }
            </div>

            {error && `Ошибка: ${error.status} ${error.statusText}`}
            <p className="text-center mt-2">
              {/* Forgot <a href="#">password?</a> */}
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="curs link-primary " onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {/* <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        </div>
      </form>
    </div>
  )
}



