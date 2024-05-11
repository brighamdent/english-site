import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function UpdateProfile() {
  const { currentUser, logout, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    const email = event.target.email.value;

    if (currentUser && email != currentUser.email) {
      try {
        updateEmail(email);
        setMessage(
          "Por favor dirigete al inbox para verificar tu nuevo correo y completar la actualizacion",
        );
      } catch {
        setError("Failed to update email");
        console.log("Error", error);
      }
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center pt-12 pb-12 p-4 sm:bg-white rounded-[10px] sm:w-[70vw] sm:shadow-sm text-2xl sm:text-3xl max-w-[500px]">
      {loading && (
        <div className="fixed bg-black/50 left-0 z-[1000]  top-0 w-full h-full flex items-center justify-center">
          <FontAwesomeIcon
            className="fixed top-1/2 text-6xl"
            icon={faSpinner}
            spinPulse
          />
        </div>
      )}
      {message ? (
        <div>
          <h1 className="text-center text-lg mb-6">{message}</h1>
          <Link className="w-full" to="/login">
            <button
              onClick={async () => await logout()}
              className="w-full bg-blue-200 rounded-lg h-14"
            >
              Iniciar Sesion
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <div>
            <h2 className="text-center mb-14 text-4xl ">Actualizar Correo</h2>
            {message && <h1>{message}</h1>}
            {error && <h1>{error}</h1>}
            <form onSubmit={handleSubmit}>
              <fieldset className="mb-6">
                <label className="block text-left">
                  <h1 className="mb-2 text-xl">Email</h1>
                  {currentUser && currentUser.email && (
                    <input
                      className="border-2 border-black/25 rounded-[10px] h-14 p-6"
                      type="email"
                      name="email"
                      defaultValue={currentUser.email}
                    />
                  )}
                </label>
              </fieldset>
              <div className="flex justify-between">
                <Link className="w-[48%]" to="/account">
                  <button className="w-full bg-blue-200 rounded-lg h-14">
                    Cancelar
                  </button>
                </Link>
                <button
                  className="w-[48%] bg-blue-200 rounded-lg h-14"
                  disabled={loading}
                >
                  Actualizar
                </button>
              </div>
            </form>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
}
