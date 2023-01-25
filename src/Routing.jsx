import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routeUrl } from "constant";

const AuthPage = React.lazy(() => import("page/authentication"))
const HomePage = React.lazy(() => import("page/home"))

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading... </div>}>
        <Routes>
          <Route path={routeUrl.home} exact element={<HomePage/>} />
          <Route path={routeUrl.authentication} exact element={<AuthPage/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
 
export default Router