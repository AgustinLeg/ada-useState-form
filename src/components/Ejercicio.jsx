import {useState} from 'react'

/* 
  Contador con input
*/

const Ejercicio = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  // console.log(count <= 0)

  // "convertir" a booleano
  // console.log(!!count)
  
  return (
    <div style={{margin: '50px 0'}}>
      <div className='button-container'>
        <button onClick={decrease} disabled={ count <= 0} > - </button>
        <input type="number" value={count} onChange={(e) => {
          // Ver el tipo de dato del valor del input
          // console.log(typeof e.target.value)
          setCount(parseInt(e.target.value))
        }} />
        <button onClick={increment}> + </button>
      </div>
      {!!count && <button> Agregar al carrito 😊 </button> }
      
    </div>
  )
}

export { Ejercicio }