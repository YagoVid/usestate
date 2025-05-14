import { useState } from 'react'
export function App() {
  const  [numero, setNumero] = useState(100);
  const [textnone, setTextnone] = useState(false);
  const Mostrar = textnone ? 'Esconder' : 'Mostrar';
  function aumentar() {
    setNumero(numero + 100);
  }
  return (
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold underline'>Numero = {numero}</h1>
        <button onClick={aumentar} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Aumentar</button>


        <p className='text-3xl font-bold hidden' style={{display: textnone ? 'none' : 'block'}}>oi</p>
        <button className='bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={() => setTextnone(!textnone)}>{Mostrar}</button>
      </div>
  )
 

}