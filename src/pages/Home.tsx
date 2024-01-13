import graphic from '../assets/graphic.png'
export function Home(){
  return(
    <div className="text-center items-center flex mt-[10%] m-10">
      <div className="w-7/12 flex items-center flex-col m-10 ">
        <h1 className="text-4xl">¡Empieza a hablar el ingles con confianza! </h1>
        <div className="flex justify-between w-[70%] m-5 text-3xl text-blue-200">
           <h1>LEER</h1>
           <h1>HABLAR</h1>
           <h1>ESCRIBIR</h1>
        </div>
        <button className="rounded-lg bg-blue-200 text-xl p-5 w-[20%] m-10" >EMPIEZA YA!</button>
      </div>
      <img className='w-[35%]'src={graphic}></img>
  </div>
  )
}
