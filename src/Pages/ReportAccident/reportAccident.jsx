import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import BackButton from "../../Components/BackButton/BackButton";
import axios from "axios";
import "./report.css";

export const ReportAccident = () => {
  const [show, setShow] = useState(true);
  const [post, setPost] = useState(false);
  const [formData, setFormData] = useState({
    tipoAccidente: "",
    tipoVehiculo: "",
    numeroInvolucrados: "",
    departamento: "",
    descripcion: "",
  });
  const handleFormData = (e) => {
    const newData = { ...formData };
    newData[e.target.id] = e.target.value;
    setFormData(newData);
    console.log(newData);
  };
  const submitForm = (e) => {
    e.preventDefault();
    e.target.reset();

    try {
      axios
        .post("http://localhost:8000/Reporte/Reportes/", {
          numero_involucrados: Number(formData.numeroInvolucrados),
          tipo_vehiculo: Number(formData.tipoVehiculo),
          tipo_accidente: Number(formData.tipoAccidente),
          departamento: Number(formData.departamento),
          descripción: formData.descripcion,
        })
        .then((res) => {
          console.log(res.data);
        });
      setPost(true);
      setFormData({});
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <BackButton />
      <Container className="signupContainer d-flex flex-column align-items-center justify-content-center mt-4 ">
        <h1 className="mb-4">Añadir un reporte</h1>
        <Form
          className="w-100 formContainer p-4 d-flex flex-column justify-content-center"
          onSubmit={(e) => submitForm(e)}
        >
          {post && show && (
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
              Registrado existosamente
            </Alert>
          )}
          <Row>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3 text-start" controlId="tipoAccidente">
                <Form.Label>Tipo de accidente </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => handleFormData(e)}
                >
                  <option>Selecciona una opción</option>
                  {[
                    "Tonel",
                    "Vuelta de campana",
                    "Volteo",
                    "Choque",
                    "Colision",
                    "Alcance",
                    "Atropello",
                    "Embestimiento",
                    "Arrastre",
                    "Aplastamiento",
                    "Accidente combinado",
                    "Accidente multiple",
                    "Colision frontal",
                  ].map((tipoAccidente, id) => {
                    return (
                      <option key={id} value={id + 1}>
                        {tipoAccidente}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 text-start" controlId="tipoVehiculo">
                <Form.Label>Tipo de vehículo</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => handleFormData(e)}
                >
                  <option>Selecciona una opción</option>
                  {[
                    "Automovil",
                    "Autobus",
                    "Motocicleta",
                    "Pick up",
                    "Bicicleta",
                    "Scooter",
                    "Patineta",
                    "Microbus",
                    "Camión",
                  ].map((Tipovehiculos, id) => {
                    return (
                      <option key={id} value={id + 16}>
                        {Tipovehiculos}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3 text-start"
                controlId="numeroInvolucrados"
              >
                <Form.Label>N° de vehiculos involucrados</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => handleFormData(e)}
                />
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3 text-start" controlId="departamento">
                <Form.Label>Departamento</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => handleFormData(e)}
                >
                  <option>Selecciona una opción</option>
                  {[
                    "Santa Ana",
                    "Sonsonate",
                    "Ahuchapan",
                    "Chalatenango",
                    "La libertad",
                    "Cabañas",
                    "Cuscatlán",
                    "La Paz",
                    "San Salvador",
                    "San Vicente",
                    "San Miguel",
                    "Usulután",
                    "Morazán",
                    "La Unión",
                  ].map((departamentos, id) => {
                    return (
                      <option key={id} value={id + 1}>
                        {departamentos}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 text-start" controlId="descripcion">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => handleFormData(e)}
                />
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
