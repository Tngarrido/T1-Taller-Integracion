import { useParams, NavLink } from 'react-router-dom';
import React, { useEffect , useState} from 'react';
const City = () => {
    const [city, setCity] = useState({});
    const [users, setUser] = useState([]);
    const {id} = useParams();
    const getInformation = async (id)=>{
        const data = await fetch(`https://us-central1-taller-integracion-310700.cloudfunctions.net/tarea-1-2021-2/1251/cities/${id}`);
        const city = await data.json();
        let array = [];
        setCity(city);
        for (let index = 0; index < city.users.length; index++) {
            let id_user = city.users[index];
            console.log(id_user);
            let data2 =  await fetch(`https://us-central1-taller-integracion-310700.cloudfunctions.net/tarea-1-2021-2/1251/users/${id_user}`);
            array[index] = await data2.json();
            
        }
        setUser(array);
   
    }

    useEffect(()=>{
        getInformation(id);
    }, []);

    function Item(props) {
        return <li >
        <NavLink to={`/user/${props.value[0]}`} className="App-link2">
            {props.value[1]} {props.value[2]}
        </NavLink>
          </li>;
        }
    
  return (
      <div className="container">
          <h3>ciudad id: {city.id}</h3>
          <p>nombre: {city.name}</p>
          <p>country: {city.country}</p>
          <h3>Usuarios que tienen direcciones registradas en esta ciudad:</h3>
          <ul>
            {users.map((item) => 
             
                <Item  key={item.id} value={[item.id, item.name, item.lastName]}  />)
            
            }
        </ul>
      </div>
  );
}

export default City;