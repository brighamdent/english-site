import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock,faRightFromBracket, faGear, faGraduationCap} from "@fortawesome/free-solid-svg-icons";

export default function Account() {
  const [error, setError] = useState("");
  const { currentUser, subscribed, logout, data } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  };
  return (
    <div className="fixed z-0 top-24 text-2xl md:text-3xl lg:bg-white lg:rounded-2xl lg:p-6">
      <div className="bg-blue-200 max-w-[640px] lg:rounded-2xl rounded-bl-2xl rounded-br-2xl mb-5 p-6 pl-10 w-[100vw] p-5">
        <h1 className="text-lg md:text-xl border-b border-black/30 mb-4">Tu Cuenta</h1>
        {error && <h1>{error}</h1>}
        {currentUser && <h1 className="mb-4">{currentUser.email}</h1>}
        {subscribed ? (
          <div className="flex items-center">
            <FontAwesomeIcon icon={faGraduationCap} />
            <h1 className="text-xl md:text-2xl pl-5">{data.subscriptionType}</h1>
          </div>
        ) : (
          <div className="text-blue-600 text-lg">
            <Link to="/pricing">Hazte estudiante hoy</Link>
          </div>
        )}
      </div>
      <div className="p-2 lg:p-8">
        <Link to="/update-profile">
          <div className="flex justify-between items-center border-b border-gray-300 p-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope}  />
              <h1 className="pl-5">Actualizar Correo</h1>
            </div>
            <h1 className="text-3xl">{">"}</h1>
          </div>
        </Link>
        <Link to="/change-password">
          <div className="flex justify-between items-center border-b border-gray-300 p-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faLock} />
              <h1 className="pl-5">Cambiar Contraseña</h1>
            </div>
            <h1 className="text-3xl">{">"}</h1>
          </div>
        </Link>
        {subscribed && (
          <Link to="/manage-subscription">
            <div className="flex justify-between items-center border-b border-gray-300 p-4">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faGear} />
                <h1 className="pl-5">
                  Administrar Subscripción
                </h1>
              </div>
              <h1 className="text-3xl">{">"}</h1>
            </div>
          </Link>
        )}
        <div
          onClick={handleLogout}
          className="flex justify-between items-center p-4 hover:cursor-pointer"
        >
          <div className="flex items-center">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <h1 className="pl-5">Cerrar Sesión</h1>
          </div>
          <h1 className="text-3xl">{"x"}</h1>
        </div>
      </div>
    </div>
  );
}
