import React from 'react';

import {BrowserRouter} from "react-router-dom";
import PagesRoutes from "./pages/PagesRoutes";

function App() {
  return (
      <BrowserRouter >
        <PagesRoutes />
      </BrowserRouter>
  );
}

export default App;
