import { useState } from 'react'
export function App() {
  const  [numero, setNumero] = useState(100);
  const [mostraresconder, setMostraresconder ] = useState(false);
  function aumentar() {
    setNumero(numero + 100);
  }
  function handleMostarEsconder() {
    if (mostraresconder === true) {
      setMostraresconder(false);
      return
    }
    setMostraresconder(true)
  }
  return (
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold underline'>Numero = {numero}</h1>
        <button onClick={aumentar} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Aumentar</button>


        {mostraresconder === true ? <p className='text-3xl font-bold'>Yago Vidal</p> : ""}
        <button className='bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={handleMostarEsconder}>{mostraresconder === true ? "Esconder" : "Mostrar"}</button>
      </div>
  )
 

}