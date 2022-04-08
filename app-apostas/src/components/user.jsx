import PropTypes from "prop-types"
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { Button } from 'react-bootstrap';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  signButton() {
    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
      }).catch((error) => {
    // An error happened.
        console.log(error);
    });
  }

  render() {
    const { email } = this.props;
    return(
      <div id="user-header">
        <p>{`Bem-vindo ${email}!`}</p>
        <Button onClick={this.signButton} variant="danger" id="button-user">Sair</Button>
      </div>
    )
  }   
}

User.propTypes = {
  email: PropTypes.string.isRequired,
}

export default User;