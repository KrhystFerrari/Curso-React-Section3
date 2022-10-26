import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  //const name = 'Joaquim';
  const [userName] = useState("Maria");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234},
  ];

  function showMessage() {
    console.log('Evento do componente pai!')
  }

  const [message, setMessage] = useState('')
  
  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const users = [      

    { id: 1, name: 'João', job: 'Pedreiro', age: 18 }, 
    { id: 2, name: 'Pedro', job: 'Bancario', age: 20 }, 
    { id: 3, name: 'José', job: 'Metalurgico', age: 30 }, 
    { id: 4, name: 'Jeremias', job: 'Engenheiro', age: 16 }, 
    
  ];

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem"/>
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={1000000} color="Azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" color="Vermelho" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} 
        />
      ))};
      {/* fragment */}
      <Fragments propFragment='teste' />
      {/* children */}
      <Container myValue='teste1'>
        <p>E este é o conteudo</p>
      </Container>
      <Container myValue='teste2'>
        <h5>Testando o container</h5>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} /> 
      <UserDetails />
      <ChangeMessageState handleMessage={handleMessage} /> 
      {/* Desafio */}
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} job={user.job} age={user.age}/>
      ))}
    </div>
  );
}

export default App;
