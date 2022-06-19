import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./login.css";
import BackButton from "../../Components/BackButton/BackButton";

export const Login = () => {
  return (
    <>
      <BackButton />
      <Container className="d-flex justify-content-center align-items-center formContainer mt-4">
        <Form className="formInside d-flex flex-column justify-content-center">
          <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button
            type="submit"
            style={{
              backgroundColor: "#F4B41A",
              color: "var(--fontColor)",
              fontWeight: "600",
              border: "none",
            }}
          >
            Iniciar sesión
          </Button>
        </Form>
      </Container>
    </>
  );
};
