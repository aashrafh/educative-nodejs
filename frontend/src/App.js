import React, { useContext, useEffect } from "react";
import { Context } from "./context";
import Navbar from "./components/Navbar";

const App = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    
  }, []);
  return (
    <>
      <Navbar auth={false} />
    </>
  );
};

export default App;
