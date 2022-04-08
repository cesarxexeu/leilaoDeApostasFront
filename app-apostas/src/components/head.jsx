import React from "react";
import logo from "../images/logo.jpeg";
import { Link } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import User from "./user"
import { getAuth, onAuthStateChanged } from "firebase/auth";

class Head extends React.Component {
    constructor() {
      super();
      this.state = {
        validateUser: false,
        email: '',
      }
    }

    componentDidMount() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
      if (user) {
      const email = user.email;
      this.setState({
        validateUser: true,
        email,
      })
      } else {
      this.setState({
        validateUser: false,
      })
      }
});
    }

    render() {
      const { email, validateUser } = this.state;
      return(
        <header id="header">         
          <img alt="logo" id="logo" src={ logo }/>
          <section id="sections">
            <Link class="link" to="/"><h2>Futebol</h2></Link>
            <Link class="link" to="/regulament"><h2>Regulamento</h2></Link>
            <Link class="link" to="/bilhete"><h2>Bilhete</h2></Link>
            {validateUser === true ? <User email={email}/> : (
              <div id="theButtons">
                <Login />
                <Register />
              </div>
            )}
          </section>
        </header>
      );
    }
  }
  
  export default Head;


