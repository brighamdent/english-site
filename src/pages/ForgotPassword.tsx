import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ForgotPassword() {
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setMessage("");
    const email = event.target.email.value;

    try {
      setError("");
      setLoading(true);
      resetPassword(email);
      setMessage("Email sent, check your inbox to reset password.");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  };
  return (
    <div className="flex flex-col items-center pt-12 pb-12 p-4 sm:bg-white rounded-[10px] sm:w-[70vw] sm:shadow-sm text-2xl sm:text-3xl max-w-[500px]">
      <div className="mb-8">
        <h2 className="text-center mb-14 text-3xl">Restablecer Contraseña</h2>
        {error && <h1>{error}</h1>}
        {message && <h1>{message}</h1>}
        <form onSubmit={handleSubmit}>
          <fieldset className="mb-6 flex flex-col">
            <label className="block text-left">
              <h1 className="mb-2 text-xl">Correo Electronico</h1>
              <input
                className="border-2 border-black/25 rounded-[10px] h-14 p-6"
                type="email"
                name="email"
                required
              />
            </label>
          </fieldset>
          <button
            disabled={loading}
            className="w-full bg-blue-200 rounded-lg h-14"
          >
            Restablecer Contraseña
          </button>
        </form>
      </div>
      <div className="mb-2 text-xl">
        <strong>¿No Tienes Cuenta? </strong>
        <Link className="text-blue-600 " to="/signup">
          Registrarse
        </Link>
      </div>
    </div>
  );
}
