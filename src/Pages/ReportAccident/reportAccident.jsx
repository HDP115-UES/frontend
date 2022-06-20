import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import BackButton from "../../Components/BackButton/BackButton";
import "./report.css";

export const ReportAccident = () => {
  return (
    <>
      <BackButton />
      <Container className="signupContainer d-flex flex-column align-items-center justify-content-center mt-4 ">
        <h1 className="mb-4">Reporte de accidentes</h1>
        <Form className="formContainer p-4 d-flex flex-column justify-content-center">
          <Row>
            <Col sm={12} md={6}>
              <Form.Group
                className="mb-3 text-start"
                controlId="formBasicFistName"
              >
                <Form.Label>Caracteristica: </Form.Label>
                
                <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
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
    </Form>
              </Form.Group>
              <Form.Group
                className="mb-3 text-start"
                controlId="formBasicLastName"
              >
                <Form.Label>Tipo de accidente </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Selecciona una opción</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3 text-start"
                controlId="formBasicEmail"
              >
              </Form.Group>
              <Form.Group
                className="mb-3 text-start"
                controlId="formBasicPassword"
              >

                <Form.Group className="mb-3" controlId="formBasicDepartamento">
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

                <Form.Label>Tipo de vehiculo </Form.Label>
                <Form.Group className="TipoVehiculo" controlId="tipoVehiculo">
                <Form.Select aria-label="Default select example">
                  <option>Selecciona una opción</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                </Form.Group>
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
              
              <Form.Label>Descripcion</Form.Label>
                <Form.Group className="Descripcion" controlId="descripcion">
                <Form.Control as="textarea" rows={3} />
                </Form.Group>

            </Col>
          </Row>
        </Form>
      </Container>
      <Button variant="primary" size="lg" active>
        Guardar
      </Button>{' '}
    </>
  );
};
