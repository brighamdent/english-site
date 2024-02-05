import portrait from '../assets/portrait.jpg'
export function About(){
  const h1 = 'lg:m-3 text-lg text-center font-bold mt-6'
  return(
  <div className='flex flex-col lg:flex-row items-center justify-around lg:items-start'>
      <h1 className='text-4xl  lg:hidden'>Quiénes Somos</h1>
<div className='bg-white rounded-lg shadow p-4 m-2'>
        <img className='w-72 lg:w-[450px] ' src={portrait} />
      </div>
      <div className='text-start lg:text-start flex flex-col  justify-around lg:pr-8 lg:pl-8 lg:w-[60%]'>
      <h1 className='text-4xl  hidden lg:block text-center'>Quiénes Somos</h1>
        <h1 className={h1}>¡Bienvenidos a English Direct!</h1>
        <p>
          ¡Hola a todos! Soy John, el fundador de English Direct, un apasionado profesor de inglés con más de cuatro años de experiencia enseñando. Soy originario de Arizona, Estados Unidos, y estoy emocionado de compartir mi amor por el inglés contigo a través de este espacio educativo.
        </p>
        <h1 className={h1}>¿Quién Soy?</h1>
        <p>
          Mi nombre es John, y mi viaje con los idiomas no ha sido solo como profesor, sino también como estudiante. Decidí aventurarme en el aprendizaje del español, lo que me ha brindado una perspectiva única sobre los desafíos y la emoción de dominar un nuevo idioma.
        </p>
        <h1 className={h1}>English Direct - Tu Destino para Aprender Inglés</h1>
        <p>
          Bienvenidos a English Direct, tu destino en línea para mejorar tus habilidades en inglés. He desarrollado un enfoque único y personalizado que se adapta a las necesidades individuales de cada estudiante. Mis métodos de enseñanza buscan hacer del aprendizaje del inglés una experiencia divertida, desafiante y gratificante.
        </p>
        <h1 className={h1}>Nuestra Misión</h1>
        <p className='mb-3'>
          En English Direct, nuestra misión es brindarte las herramientas necesarias para que alcances tus metas lingüísticas. Creemos en un enfoque práctico y amigable para el aprendizaje del inglés, inspirado por mi propia travesía en el aprendizaje del español.
        </p>
        <p className='mb-3'>
          Únete a nosotros en este emocionante viaje hacia la fluidez en inglés. ¡Estoy ansioso por ser parte de tu éxito!
        </p>
        <p>¡Gracias por elegir English Direct!</p>
      </div>
    </div>
  )
}
