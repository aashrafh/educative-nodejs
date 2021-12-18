import React, { useContext, useEffect } from "react";
import { Context } from "./context";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Confirmation from "./pages/Confirmation";
import Login from "./pages/Login";

const App = () => {
  // eslint-disable-next-line
  const { state, dispatch } = useContext(Context);

  useEffect(() => {}, []);
  return (
    <>
      <Navbar auth={false} />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify/:confirmationToken" element={<Confirmation />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
