import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pricing } from "./pages/Pricing";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Payment } from "./pages/Payment";
import { SignIn } from "./pages/SignIn";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Account from "./pages/Account";
import PrivateRoutes from "./components/PrivateRoutes";
import ForgotPassword from "./pages/ForgotPassword";
import UpdateProfile from "./pages/UpdateProfile";
import DashBoard from "./pages/Dashboard";
import { ManageSubscription } from "./pages/ManageSubscription";
import ChangePassword from "./pages/ChangePassword";

function App() {
  useEffect(() => {
    axios
      .get("https://english-site-server.onrender.com/warmup")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error warming up the server:", error);
      });
  }, []);
  return (
    <>
      <AuthProvider>
        <Navbar />
        <div className=" pt-28 flex justify-center align-center ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/payment"
              element={
                <PrivateRoutes>
                  <Payment />
                </PrivateRoutes>
              }
            />
            <Route path="/signup" element={<SignIn />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/account"
              element={
                <PrivateRoutes>
                  <Account />
                </PrivateRoutes>
              }
            />
            <Route
              path="/update-profile"
              element={
                <PrivateRoutes>
                  <UpdateProfile />
                </PrivateRoutes>
              }
            />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoutes>
                  <DashBoard />
                </PrivateRoutes>
              }
            />
            <Route
              path="/manage-subscription"
              element={
                <PrivateRoutes>
                  <ManageSubscription />
                </PrivateRoutes>
              }
            />
            <Route
              path="/change-password"
              element={
                <PrivateRoutes>
                  <ChangePassword />
                </PrivateRoutes>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
