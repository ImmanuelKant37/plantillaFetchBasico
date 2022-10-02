import { useState, useEffect } from 'react';

function App() {

  const [valores, setValores] = useState([])
  const [recuperado, setRecuperado] = useState(false)

  function mostrarTabla() {
    const {find} = valores
    console.log(valores)
    const values= ""
   
    return (
      <p>
        {(String(Array.from(find.Estilo)))}
     
        </p>
    )}
  
  useEffect(() => {
    const ur = 'https://serverbackendikant.herokuapp.com/api/login/'
    const url= 'https://serverbackendikant.herokuapp.com/api/get/buscarForm'
    const body = {
      "Codigo":-2
    } 
        fetch(url, {
        method: 'POST',
        body: JSON.stringify(body ),
      headers:{
        'Content-Type': 'application/json'
      }
      })
      .then(response =>  response.json())
      .then(setRecuperado(true))
      .then(response=> setValores(response) )
      .catch(error => console.error('Error:', error))
  }, [])


  if (recuperado)
    return mostrarTabla()
  else
    return (<div>recuperando datos...</div>)
}

export default App