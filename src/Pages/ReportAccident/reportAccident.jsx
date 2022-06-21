import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import BackButton from "../../Components/BackButton/BackButton";
import "./report.css";

export const ReportAccident = () => {
  return (
    <>
      <BackButton />
      <Container className="signupContainer d-flex flex-column align-items-center justify-content-center mt-4 ">
        <h1 className="mb-4">Añadir un reporte</h1>
        <Form className="w-100 formContainer p-4 d-flex flex-column justify-content-center">
          <Row>
            <Col sm={12} md={6}>
              <Form.Group
                className="mb-3 text-start"
                controlId="formBasicFistName"
              >
                <Form.Label>Caracteristica: </Form.Label>
                {["radio"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Simple"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Multiple"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </Form.Group>
              <Form.Group className="mb-3 text-start" controlId="formBasicTipo">
                <Form.Label>Tipo de accidente </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Selecciona una opción</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 text-start" controlId="formBasicInvo">
                <Form.Label>N° de vehiculos involucrados</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Selecciona una opción</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">More</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3 text-start" controlId="formBasicDepartamento">
                <Form.Label>Departamento</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Selecciona una opción</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 text-start" controlId="formBasicMunicipio">
                <Form.Label>Municipio</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Selecciona una opción</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 text-start" controlId="formBasicDesc">
                <Form.Label>Descripcion</Form.Label>
                <Form.Group className="Descripcion" controlId="descripcion">
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form.Group>
            </Col>
          </Row>
          <Button
            type="submit"
            style={{
              backgroundColor: "var(--bgContainer)",
              border: "none",
              fontWeight: "600",
              width: "40%",
              margin: "0 auto",
            }}
          >
            Guardar
          </Button>
        </Form>
      </Container>
    </>
  );
};
