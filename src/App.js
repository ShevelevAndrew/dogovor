
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { AccessPage, HomePage, LoginPage, Out } from "./pages"
import { Header } from "./components";
import { PrivateRoute, PublicRoute } from "./components";


function App() {
  const [session, setSession] = useState(null);
  const { auth } = useSelector((state) => state.login)
  const isAuth = !!session;

  useEffect(() => {
    const user = auth
      if (user.token) {
        setSession(user);
      } else {
        setSession(null);
      }

  }, [auth]);
  return (
    <>
      <BrowserRouter>
        <Header session={session} />
        <Routes>
          <Route
            path="/access"
            element={
              <PrivateRoute isAuth={isAuth}>
                <AccessPage />
              </PrivateRoute>
            }
          />
          {isAuth ?
          <Route path="/" element={<HomePage />} />
          :
          <Route path="/" element={<LoginPage />}/>
          }
          <Route
            path="/sign-up"
            element={
              <PublicRoute isAuth={isAuth}>
                {/* <SignUpPage /> */}
              </PublicRoute>
            }
          />
          <Route
            path="/out"
            element={
              <PrivateRoute isAuth={isAuth}>
                <Out />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<h1>Page not found 404</h1>} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
