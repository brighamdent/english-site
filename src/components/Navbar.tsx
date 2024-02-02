import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import longLogo from "../assets/longLogo.svg" 
import { faBars, faX} from "@fortawesome/free-solid-svg-icons"; 

export function Navbar() {
  const { currentUser, subscribed } = useAuth();
  const [isOpened, setIsOpened] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()

  const toggleModal = () => {
    setIsOpened(!isOpened);
  };

  useEffect(() => {
    setIsOpened(false);
  }, [location.pathname]);

  return (
    <div className="fixed z-50 w-full">
      <div className=" top-0 p-2 bg-white drop-shadow-sm h-24 lg:h-16 px-4 text-2xl mb-10 sm:z-30">
        <div className="flex justify-between">
          <div className="flex text-right items-center pr-3 lg:hidden m-2">
            <button className="text-[40px] p-4" onClick={toggleModal}>
              {isOpened ? <FontAwesomeIcon icon={faX} />:
              <FontAwesomeIcon icon={faBars} />
              }
            </button>
            <img src={longLogo} className="h-10 ml-2"/>
          </div>
        </div>

        <div className="hidden lg:flex justify-between items-center">
          <img src={longLogo} className="h-12 cursor-pointer" onClick={() => navigate('/')}/>
          <div className="flex justify-between w-[45%]">
            <Link to="/">Inicio</Link>
            {subscribed ? (
              <Link to="dashboard">Dashboard</Link>
            ) : (
                <Link to="/pricing">Costo</Link>
              )}
            <Link to="/about">Quiénes Somos</Link>
          </div>
          {currentUser ? (
            <Link className="text-sm" to="/account">
              Tu Cuenta
            </Link>
          ) : (
            <Link className="text-sm" to="signup">
              Iniciar Sesión/Registrarse
            </Link>
          )}
        </div>
      </div>

      {isOpened && (
        <div className=" fixed w-[100vw] h-[calc(100vh-96px)] lg:h-[calc(100vh-48px)] text-2xl  text-left top-24 lg:top-12 lg:hidden">
          <ul className="p-4 bg-white z-20 sm:fixed right-0 sm:h-[100%] ">
            <li className="p-2">
              <Link to="/">Inicio</Link>
            </li>
            <li className="p-2">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="p-2">
              <Link to="/pricing">Costo</Link>
            </li>
            <li className="p-2">
              <Link to="/about">Quiénes Somos</Link>
            </li>
            {currentUser ? (
              <li className="p-2">
                <Link to="/account">Cuenta</Link>
              </li>
            ) : (
              <li className="p-2">
                <Link to="/login">Ingresa/Inscribirse</Link>
              </li>
            )}
          </ul>
          <div
            onClick={toggleModal}
            className="fixed w-[100vw] h-full bg-black/50 z-10"
          />
        </div>
      )}
    </div>
  );
}
