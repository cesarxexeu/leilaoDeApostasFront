import React, { useState } from "react";
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap";

function Register () {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const renderRegister = (
          <>
          <Button type="button" id="button-login" variant="danger" onClick={handleShow}>
            <h2>Cadastre-se</h2>
          </Button>
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Página de Registro</Modal.Title>
          </Modal.Header>
          <Modal.Body>Login</Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <FormControl aria-label="Text input with checkbox" />
          </InputGroup>
          <Modal.Body>Senha</Modal.Body>
          <InputGroup>
            <InputGroup.Radio aria-label="Radio button for following text input" />
            <FormControl aria-label="Text input with radio button" />
          </InputGroup>
          <Modal.Body>Confirme a senha</Modal.Body>
          <InputGroup>
            <InputGroup.Radio aria-label="Radio button for following text input" />
            <FormControl aria-label="Text input with radio button" />
          </InputGroup>
          <Modal.Footer>
            <Button variant="secondary">
              Cadastre-se
            </Button>
          </Modal.Footer>
        </Modal>
        </>
        );

    // const renderLogin = (
    //     <>
    //     <Button type="button" id="button-login" variant="success" onClick={handleShow}>
    //       <h2>Login</h2>
    //     </Button>
    //     <Modal show={show} onHide={handleClose}>
    //     <Modal.Header closeButton>
    //       <Modal.Title>Página de Login</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>Login</Modal.Body>
    //     <InputGroup className="mb-3">
    //       <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    //       <FormControl aria-label="Text input with checkbox" />
    //     </InputGroup>
    //     <Modal.Body>Senha</Modal.Body>
    //     <InputGroup>
    //       <InputGroup.Radio aria-label="Radio button for following text input" />
    //       <FormControl aria-label="Text input with radio button" />
    //     </InputGroup>
    //     <Modal.Footer>
    //       <Button variant="secondary">
    //         Login
    //       </Button>
    //     </Modal.Footer>
    //     <Modal.Body>Ainda não é cadastrado?</Modal.Body>
    //       <Button variant="primary" >
    //         Cadastre-se aqui
    //       </Button>
    //   </Modal>
    //   </>
    // )

    return(
      <>
        {renderRegister} 
      </>
    )
}

export default Register;