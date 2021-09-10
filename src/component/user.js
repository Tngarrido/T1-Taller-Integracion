import { NavLink, useParams } from 'react-router-dom';
import React, { useEffect , useState} from 'react';
const User = () => {
    const [user, setUser] = useState({});
    const [tarjets, setTarjet] = useState([]);
    const [directions, setDirect] = useState([]);
    const {id} = useParams();
    const getInformation = async (id)=>{
        const data = await fetch(`https://us-central1-taller-integracion-310700.cloudfunctions.net/tarea-1-2021-2/1251/users/${id}`);
        const user = await data.json();
        setUser(user);
        //obtenemsos sus tarjetas
        const data2 = await fetch(`https://us-central1-taller-integracion-310700.cloudfunctions.net/tarea-1-2021-2/1251/users/${id}/credit-cards`);
        const tarjets = await data2.json();
        setTarjet(tarjets);
        //obtenemos direcciones registradas
        const data3 = await fetch(`https://us-central1-taller-integracion-310700.cloudfunctions.net/tarea-1-2021-2/1251/users/${id}/addresses`);
        const directions = await data3.json();
        console.log(directions);
        setDirect(directions);
    }

    useEffect(()=>{
        getInformation(id);
    }, []);

    function ItemAdress(props) {
        return <li >
            <NavLink to={`/cities/${props.value[0]}`} className="App-link2" style={{ textDecoration: 'none' }}>
            {props.value[1]}; {props.value[2]}; {props.value[3]} 
            </NavLink>
          </li>;
      }

    function ItemTargets(props) {
        return <li >
            id:{props.value[0]}; userId: {props.value[1]}; creditCard: {props.value[2]}, CVV:{props.value[3]} 
          </li>;
      }


  return (
      <div className="container">
          <h2>usuario id: {user.id}</h2>
          <p>nombre: {user.name}</p>
          <p>apellido: {user.lastName}</p>
          <p>email: {user.email}</p>
          <p>avatar: {user.avatar}</p>
          <p>fecha de nacimiento: {user.birthdate}</p>
          <h2>Direcciones registradas:</h2>
            <ul>
            {
            directions.map((item) => 
                <ItemAdress  key={item.id} value={[item.city.id, item.address, item.city.name, item.city.country]}  />)
            }
            </ul>
          <h2>Tarjetas registradas:</h2>
          <ul>
            {
            tarjets.map((item) => 
                <ItemTargets  key={item.id} value={[item.id, item.userId, item.creditCard, item.CVV]}  />)
            }
            </ul>
      </div>
  );
}

export default User;