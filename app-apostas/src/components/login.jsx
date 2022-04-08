import React, { useState } from "react";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function LoginUser() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, login, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, 'vai ser usado no back');
        alert(`bem vindo ao leilão ${user.email}!`);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  const renderLogin = (
    <>
      <Button
        type="button"
        id="button-login"
        variant="success"
        onClick={handleShow}
      >
        <h2>Login</h2>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Página de Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Login</Modal.Body>
        <InputGroup className="mb-3">
          <InputGroup.Checkbox aria-label="Checkbox for following text input" />
          <FormControl
            aria-label="Text input with checkbox"
            onChange={(e) => setLogin(e.target.value)}
          />
        </InputGroup>
        <Modal.Body>Senha</Modal.Body>
        <InputGroup>
          <InputGroup.Radio aria-label="Radio button for following text input" />
          <FormControl
            type="password"
            aria-label="Text input with radio button"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>
        <Modal.Footer>
          <Button variant="secondary" onClick={LoginUser}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

  return <>{renderLogin}</>;
}

export default Login;
