import React, {useState, useEffect} from 'react';
import styled from "@emotion/styled";
import Frase from './components/Frase';

function App() {

  const [frase, setFrase] = useState({})

  useEffect(() => {

    consultarAPI()
  }, [])

  const consultarAPI = async() => {
    const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    // the api call return a promise
    const frase = api.then(respuesta => respuesta.json());
    frase.then(res => setFrase(res[0]));

    // const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    // // the api call return a promise
    // const frase = await api.json();
    // console.log(frase)

    // setFrase()
  }

  return (
    <Contenedor>
      <Frase frase={frase}></Frase>
      <Boton onClick={consultarAPI}>
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  :hover {
    cursor:pointer;
    background-size: 400px;
  }
`

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`

export default App;
