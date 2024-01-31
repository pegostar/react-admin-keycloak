import './App.css'
import React, { Suspense, lazy, useState } from "react";
import {AuthContext, AuthProvider} from "react-oauth2-code-pkce";
import LayoutMain from "./components/LayoutMain.jsx";
import {
    createBrowserRouter,
    HashRouter as Router,
    Route, RouterProvider,
    Routes,
} from "react-router-dom";
import Login from "./pages/login/index.jsx";
import Detail from "./pages/Detail.jsx";
import Error404 from "./components/Error404.jsx";


const authConfig= {
    clientId: 'connectorweb',
    authorizationEndpoint: 'http://localhost:8080/realms/notifier/protocol/openid-connect/auth',
    tokenEndpoint: 'http://localhost:8080/realms/notifier/protocol/openid-connect/token',
    logoutEndpoint: 'http://localhost:8080/realms/notifier/protocol/openid-connect/logout',
    redirectUri: 'http://localhost:5173',
    scope: 'openid',
    onRefreshTokenExpire: (event) => window.confirm('Session expired. Refresh page to continue using the site?') && event.login(),
}
function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <LayoutMain Components={Login}/>,
        },
        {
            path: "/detail",
            element: <LayoutMain Components={Detail}/>,
        },
        {
            path: "*",
            element: <LayoutMain Components={Error404}/>,
        },
    ]);

  return (
      <>
          <AuthProvider authConfig={authConfig}>
              <RouterProvider router={router} />
          </AuthProvider>
      </>
  )
}

export default App
