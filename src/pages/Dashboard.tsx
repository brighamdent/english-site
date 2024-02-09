import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
export default function DashBoard() {
  const { data } = useAuth();

  return (
    <div className="bg-white rounded-xl p-10 flex flex-col items-center">
      <h1 className="text-3xl mb-4 border-b border-gray-300 p-2">Tus Clases</h1>
      <div className="flex items-center text-2xl mb-4">
        <FontAwesomeIcon icon={faGraduationCap} />
        <h1 className="text-xl md:text-2xl pl-8">{data.subscriptionType}</h1>
      </div>
      <h3 className="mb-4">Horario: Lunes y Miercoles a las 7pm</h3>
      <a
        href="https://us06web.zoom.us/j/88265664418?pwd=Y1VQY2ZuVHVnMVNQSng5eUw3N1FUUT09"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="w-full bg-blue-200 hover:bg-blue-300 rounded-lg text-xl h-14 p-4">
          Entrar la Clase
        </button>
      </a>
    </div>
  );
}
