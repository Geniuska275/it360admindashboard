

import React from 'react'
import Button from './components/Button'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Layout,
  Signup
  // DashboardLayout,
  // PrivateRoute
} from "./router/index.js";

function App() {
  

  return (
 <>
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Signup />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                {/* <Login /> */}
              </Layout>
            }
          />
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
