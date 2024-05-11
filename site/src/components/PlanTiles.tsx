import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export function PlanTiles(props:any) {
  const { data } = useAuth();
  const pricingStuctures = [
    {
      plan: 1,
      name: "Base",
      price: "600 MXN",
      classes: "Incluye 2 clases grupales por semana.",
      duration: "1 hora",
    },
    {
      plan: 2,
      name: "Estudiante+",
      price: "900 MXN",
      classes: " 2 Clases grupales por semana",
      duration: "1 hora",
      bonus: "1 Clase privada al mes",
    },
    {
      plan: 3,
      name: "Estudiante Privado",
      price: "1200 MXN",
      classes: "1 clase privada por semana",
      duration: "1 hora",
      bonus: "Un plan de aprendizaje personalizado",
    },
  ];

  return (
    <div className="flex flex-col items-center lg:flex-row justify-evenly">
      {pricingStuctures.map((p, index) => (
        <div
          className="flex flex-col justify-between items-center h-[400px] lg:h-[500px] m-4 w-[300px] text-center rounded-lg p-8
                         bg-white shadow-lg"
        >
          <div className="h-20 border-b border-gray-300 w-full">
            <h2 className=" text-2xl ">{p.name}</h2>
          </div>
          <h1 className="text-5xl">{p.price}</h1>
          <div className="text-left">
            <p className="mb-4">{p.classes}</p>
            {p.bonus && <p className="border-t pt-3 border-gray-300">{`Bono: ${ p.bonus }`}</p>}
          </div>
          {props.pricingPage && (
            <Link
              className="rounded bg-blue-200 hover:bg-blue-300 text-2xl p-3 flex justify-center items-center"
              to="/payment"
              state={{ data: pricingStuctures[index] }}
            >
              <button>Seleccionar Plan</button>
            </Link>
          )}
          {props.manageSubscriptionPage && (
            <div
              className={
                data &&
                p.name == data.subscriptionType
                  ? "rounded bg-gray-300 text-black/50 text-2xl p-3 flex justify-center items-center"
                  : "rounded bg-blue-200 hover:bg-blue-300 text-2xl p-3 flex justify-center items-center"
              }
            >
              <button
                disabled={data ? p.name == data.subscriptionType : false}
                onClick={() => props.handleChangeSubscription(p.plan)}
              >
                {p.name == data && data.subscriptionType ? "Plan Actual" : "Cambiar Plan"}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
