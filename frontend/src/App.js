import React, { useContext, useEffect } from "react";
import { Context } from "./context";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Confirmation from "./pages/Confirmation";

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
      </Routes>
    </>
  );
};

export default App;
