import React, {memo, useMemo} from 'react'
const ContadorHijo = ({contador, sumar, restar}) => {
  
  // let superNumero = 0
  // for (let index = 0; index < 1000000000; index++) {
  //   superNumero ++    
  // }
  const superNumero = useMemo(() => {
    let numero = 0
    for (let index = 0; index < 1000000000; index++) {
      numero ++    
      }

      return numero
  }, [])

  console.log("hijo de contador se renderiza")
  return (
    <div  style={{border:"thin solid #000", margin:"1rem", padding:"1rem"}}>
        <h2>ContadorHijo</h2>
        <h3>{contador}</h3>
        <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        </nav>
        <h3>{superNumero}</h3>
    </div>
  )
}

export default memo(ContadorHijo)