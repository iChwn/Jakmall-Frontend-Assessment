import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routeUrl } from "constant";
import { LoadingComponent } from "components";

const HomePage = React.lazy(() => import("page/home"))

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route path={routeUrl.home} exact element={<HomePage/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
 
export default Router