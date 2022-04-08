import React, { useState } from "react";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Register () {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirm] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function createUser () {
    if (password !== confirmPassword || login.length < 4) alert("campos invalidos");
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, login, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    alert(`bem vindo ao leilão ${user.email}!`);
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
  setLogin('');
  setPassword('');
  setConfirm('');
  }

    const renderRegister = (
          <>
          <Button type="button" id="button-login" variant="danger" onClick={handleShow}>
            <h2>Cadastre-se</h2>
          </Button>
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Página de Registro</Modal.Title>
          </Modal.Header>
          <Modal.Body>Email</Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <FormControl aria-label="Text input with checkbox" value={login} onChange={(e) => setLogin(e.target.value)}/>
          </InputGroup>
          <Modal.Body>Senha</Modal.Body>
          <InputGroup>
            <InputGroup.Radio aria-label="Radio button for following text input" />
            <FormControl type="password" aria-label="Text input with radio button" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </InputGroup>
          <Modal.Body>Confirme a senha</Modal.Body>
          <InputGroup>
            <InputGroup.Radio aria-label="Radio button for following text input" />
            <FormControl type="password" aria-label="Text input with radio button" value={confirmPassword} onChange={(e) => setConfirm(e.target.value)}/>
          </InputGroup>
          <Modal.Footer>
            <Button variant="secondary" onClick={createUser}>
              Cadastre-se
            </Button>
          </Modal.Footer>
        </Modal>
        </>
        );

    return(
      <>
        {renderRegister} 
      </>
    )
}

export default Register;