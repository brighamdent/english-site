import { useEffect } from "react";

export default function Schedule({
  schedule,
  setSchedule,
  pricingStructure,
}: any) {
  const handleClick = (e: any) => {
    e.preventDefault();
    setSchedule(e.target.textContent);
  };
  console.log(pricingStructure);
  useEffect(() => {
    console.log(schedule);
  }, [schedule]);

  return (
    <div className="md:w-[70%]flex flex-col items-center pl-4">
      <h1 className="hidden md:block text-3xl text-center mb-6">
        Horarios Disponibles
      </h1>
      {pricingStructure && pricingStructure.plan != 3 ? (
        <ul className="flex flex-col p-6">
          <li
            onClick={handleClick}
            className="p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer"
          >
            Lunes y Miercoles 6 PM (Principiante)
          </li>
          <li
            onClick={handleClick}
            className="p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer"
          >
            Lunes y Miercoles 7 PM (Intermedio)
          </li>
          <li
            onClick={handleClick}
            className="p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer"
          >
            Lunes y Miercoles 8 PM (Avanzado)
          </li>
          <li
            onClick={handleClick}
            className="p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer"
          >
            Sabado 9 AM / Domingo 6 PM (Avanzado)
          </li>
          <li
            onClick={handleClick}
            className="p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer"
          >
            Sabado 10 AM / y Domingo 7 PM (Principiante)
          </li>
          <li
            onClick={handleClick}
            className="p-2 pb-4  text-xl hover:bg-gray-200 cursor-pointer"
          >
            Sabado 11 AM / y Domingo 8 PM (Intermedio)
          </li>
        </ul>
      ) : (
        <ul className="flex flex-col p-6">
          <li
            onClick={handleClick}
            className="p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer"
          >
            Lunes 5 PM
          </li>
          <li
            onClick={handleClick}
            className="p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer"
          >
            Miercoles 5 PM
          </li>
          <li
            onClick={handleClick}
            className="p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer"
          >
            Jueves 6 PM
          </li>
          <li
            onClick={handleClick}
            className="p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer"
          >
            Jueves 7 PM
          </li>
          <li
            onClick={handleClick}
            className="p-2 pb-4 border-b border-gray-300 text-xl hover:bg-gray-200 cursor-pointer"
          >
            Sabado 8 AM
          </li>
          <li
            onClick={handleClick}
            className="p-2 pb-4  text-xl hover:bg-gray-200 cursor-pointer"
          >
            Sabado 12 PM
          </li>
        </ul>
      )}
    </div>
  );
}
