import { useState } from "react"

// Renderizado: Se vuelve a renderizar el componente cuando cambia una prop o un estado

const Form = () => {
  // Estado para manejar el input "mensaje"
  const [mensaje, setMensaje] = useState("")

  // Funciona que se ejecuta caundo enviamos el formulario con el evento onSubmit
  const mostrarMensaje = () => {
    // Si el mensaje incluye saludar hay una alerta con el mensaje
    if(mensaje.includes('saludar')){
      alert(`Hola ${mensaje}`)
    }
  }
  
  // Condicion que se ejecuta cada vez que se renderiza el componente
  if(mensaje.toLowerCase().includes('borrar')) {
    setMensaje('')
  }

  return (
    <div style={{marginTop: 50}}>
      <form onSubmit={(e) => {
        e.preventDefault()
        mostrarMensaje()
      }}>
        <input type="text" name="inputMensaje" value={mensaje} autoComplete="off" onChange={(e) => {
          // e.target.value = valor del input
          setMensaje(e.target.value)
        }}/>
        <button type="submit">Enviar</button>
      </form>
      {/* Mostrar el valor del evento */}
      <h2>valor del input: {mensaje}</h2>
    </div>
  )
}

export {Form}