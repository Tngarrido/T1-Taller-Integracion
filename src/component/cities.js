import React, { useEffect , useState} from 'react';
import {NavLink, useParams} from 'react-router-dom';
const Cities = () => {
  const [cities, setCities] = useState([]);
  const [buscar, setFilter] = useState("");
  const getCities = async ()=>{
    const data = await fetch('https://us-central1-taller-integracion-310700.cloudfunctions.net/tarea-1-2021-2/1251/cities?_page=1');
    const data2 = await fetch('https://us-central1-taller-integracion-310700.cloudfunctions.net/tarea-1-2021-2/1251/cities?_page=2');
    const data3 = await fetch('https://us-central1-taller-integracion-310700.cloudfunctions.net/tarea-1-2021-2/1251/cities?_page=3');
    const data4 = await fetch('https://us-central1-taller-integracion-310700.cloudfunctions.net/tarea-1-2021-2/1251/cities?_page=4');
    const data5 = await fetch('https://us-central1-taller-integracion-310700.cloudfunctions.net/tarea-1-2021-2/1251/cities?_page=5');
    const data6 = await fetch('https://us-central1-taller-integracion-310700.cloudfunctions.net/tarea-1-2021-2/1251/cities?_page=6');
    const data7 = await fetch('https://us-central1-taller-integracion-310700.cloudfunctions.net/tarea-1-2021-2/1251/cities?_page=7');
    const data8 = await fetch('https://us-central1-taller-integracion-310700.cloudfunctions.net/tarea-1-2021-2/1251/cities?_page=8');
    const data9 = await fetch('https://us-central1-taller-integracion-310700.cloudfunctions.net/tarea-1-2021-2/1251/cities?_page=9');
    const data10 = await fetch('https://us-central1-taller-integracion-310700.cloudfunctions.net/tarea-1-2021-2/1251/cities?_page=10');
    let u = await data.json();
    const u2 = await data2.json();
    const u3 = await data3.json();
    const u4 = await data4.json();
    const u5 = await data5.json();
    const u6 = await data6.json();
    const u7 = await data7.json();
    const u8 = await data8.json();
    const u9 = await data9.json();
    const u10 = await data10.json();
    u = u.concat(u2);
    u = u.concat(u3);
    u = u.concat(u4);
    u = u.concat(u5);
    u = u.concat(u6);
    u = u.concat(u7);
    u = u.concat(u8);
    u = u.concat(u9);
    u = u.concat(u10);
    setCities(u);
  }

  useEffect(()=>{
        getCities();
    }, []);

  function Item(props) {
      return <li >
      <NavLink to={`/cities/${props.value[0]}`} className="App-link2" style={{ textDecoration: 'none' }}>
          {props.value[1]}; {props.value[2]} 
      </NavLink>
        </li>;
    }

  if (cities.length == 0) {
    return (
      <div className="container">
        <h4>Cargando datos ...</h4>
      </div>
      )
  }
  else{
    return (
      <div className="container">
        <input
            type="text"
            placeholder="Search cities..."
            onChange={(event)=>{
              setFilter(event.target.value);
            }}
          />
      <ul>
        {cities.filter((item)=>{
          if(buscar==""){
            return item
          } else if(item.name.toLowerCase().includes(buscar.toLowerCase())){
            return item
          }
        }).map((item) => 
            <Item  key={item.id} value={[item.id, item.name, item.country, item.users]}  />)
        }
    </ul>
  </div>   
    )
  }
 ;
}

export default Cities;