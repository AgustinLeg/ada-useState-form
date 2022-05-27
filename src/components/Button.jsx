const Button = ({setColor}) => {

    // si color es rojo cambiar a verde
    const cambiarColorTitulo = () => {
      // Opcion 1
      // if(color === 'red'){
      //   setColor("green")
      // }else{
      //   setColor('red')
      // }
  
      // Opcion 2
      // color === 'red' ? setColor('green') : setColor('red')
  
      // Opcion 3
      // setColor(color === 'red' ? 'green': 'red')

      // PrevState(convencion) obtenemos el valor del estado
      setColor((prevState) => {
        // Tenemos que retornar el nuevo valor
        if(prevState === 'red'){
          return "green"
        }else{
          return "red"
        }
        // return prevState === 'red' ? 'green' : 'red'
      }) 
    }
  
  return (
    <>
    <button onClick={cambiarColorTitulo}> Cambiar color titulo</button>
    </>
  )
}

export default Button