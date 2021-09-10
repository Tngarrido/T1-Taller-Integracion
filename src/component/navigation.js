import React, {useState} from 'react';
import {Link, Redirect, browserHistory} from 'react-router-dom';
//import {browserHistory} from 'react-router';
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();
        return <Redirect to="/users/"/>;
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Buscar:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  class MyComponent extends React.Component {
    state = {
      redirect: false
    }
  
    handleSubmit () {
        this.setState({ redirect: true });
    }
  
    render () {
      const { redirect } = this.state;
       if (redirect) {
         return <Redirect to='/users/'/>;
       }
       return <NameForm/>;
  }
}





function NavigationBar() {

    const [busqueda,setBusqueda ] = useState({value:''});
    const [red, setRed] = useState(false);
    const handleChange = (event) => {
        setBusqueda({value: event.target.value });
      }

    const handleSubmit = (event) =>{
        console.log(busqueda);
        setRed(true);
        event.preventDefault();
    }

    return (
        <div>
            <nav>
            <div className="flexbox-container">
                <div> <Link to={`/users/`} className="App-link">¿Usuarios?  </Link></div>
                <div><Link to="/cities/" className="App-link"> ¿Ciudades? </Link></div> 
            </div>
            </nav>
            
        </div>
    
    );
}

export default NavigationBar;