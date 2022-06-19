import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import BackButton from "../../Components/BackButton/BackButton";
import "./signup.css";

export const SignUp = () => {
  return (
    <>
      <BackButton />
      <Container className="signupContainer d-flex flex-column align-items-center justify-content-center mt-4 ">
        <h1 className="mb-4">Registro de datos</h1>
        <Form className="formContainer p-4 d-flex flex-column justify-content-center">
          <Row>
            <Col sm={12} md={6}>
              <Form.Group
                className="mb-3 text-start"
                controlId="formBasicFistName"
              >
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group
                className="mb-3 text-start"
                controlId="formBasicLastName"
              >
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Apellido" />
              </Form.Group>
              <Form.Group
                className="mb-3 text-start"
                controlId="formBasicEmail"
              >
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Correo electrónico" />
              </Form.Group>
              <Form.Group
                className="mb-3 text-start"
                controlId="formBasicPassword"
              >
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3" controlId="formBasicDepartamento">
                <Form.Label>Departamento</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Selecciona una opción</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMunicipio">
                <Form.Label>Municipio</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Selecciona una opción</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Button
            type="submit"
            style={{
              backgroundColor: "var(--bgContainer)",
              border: "none",
              fontWeight: "600",
            }}
          >
            Guardar
          </Button>
        </Form>
      </Container>
    </>
  );
};
