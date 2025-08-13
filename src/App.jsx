import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login"; // Assuming you have a Login component
import Player from "./pages/Player/Player"; // Importing the Player component
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"; // Importing the Firebase auth instance
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importing the CSS for Toast

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged in");
        navigate("/");
      } else {
        console.log("Logged out");
        navigate("/login");
      }
    });
  }, []);
  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
