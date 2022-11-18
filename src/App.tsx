import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import {RouteList} from "./utilities/appRoute/basePath";

function App() {
  return (
      <BrowserRouter >
          <Routes>
              <Route element={<Layout />}>
                  {RouteList.map((route) => (
                      <Route
                          path={route.path}
                          element={<route.element />}
                      />
                  ))}
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
