import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Container, Table, Row, Col, Button, Form } from "react-bootstrap";
import BackButton from "../../Components/BackButton/BackButton";
import "./getAccidentes.css";
export const GetAccidents = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios
        .get("http://127.0.0.1:8000/Reporte/Reportes/")
        .catch((e) => {
          setError("No server response");
          console.log(e);
        });
      setData(response.data);
    };
    if (!data.length) getData();
    console.log(data);
  }, [data]);
  return (
    <>
      <BackButton />
      <Container className="mt-4">
        <div className="filterContainer d-flex justify-content-end mb-3">
          <div className="filterButton me-3">
            <Button
              style={{ backgroundColor: "var(--bgContainer)", border: "none" }}
            >
              Filtrar
            </Button>
          </div>
          <div className="selectFilter d-sm-flex">
            <Form.Select className="me-2" aria-label="Default select example">
              <option>Departamento</option>
              <option value="1">Santa Ana</option>
              <option value="2">Sonsonate</option>
              <option value="3">Ahuachapán</option>
              <option value="4">Chalatenango</option>
              <option value="5">La Libertad</option>
              <option value="6">Cabañas</option>
              <option value="7">Cuscatlán</option>
              <option value="8">La Paz</option>
              <option value="9">San Salvador</option>
              <option value="10">San Vicente</option>
              <option value="11">San Miguel</option>
              <option value="12">Usulután</option>
              <option value="13">Morazán</option>
              <option value="14">La unión</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
              <option>Tipo Accidente</option>
              <option value="1">Tonel</option>
              <option value="2">Vuelta de campana</option>
              <option value="3">Volteo</option>
              <option value="4">Choque</option>
              <option value="5">Colision</option>
              <option value="6">Alcance</option>
              <option value="7">Atropello</option>
              <option value="8">Embestimiento</option>
              <option value="9">Arrastre</option>
              <option value="10">Aplastamiento</option>
              <option value="11">Accidente Combinado</option>
              <option value="12">Accidente multiple</option>
              <option value="13">Colsión fontral</option>
              <option value="14">Colisión lateral</option>
              <option value="15">Colisión mixta</option>
            </Form.Select>
          </div>
        </div>
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tipo Accidente</th>
                  <th>Departamento</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Detalles</th>
                </tr>
              </thead>
              <tbody>
                {error ? (
                  <tr>
                    <td colSpan={6}>{error}</td>
                  </tr>
                ) : (
                  data.map((accidente) => {
                    return (
                      <tr key={accidente.id_reporte}>
                        <td>{accidente.id_reporte}</td>
                        <td>{accidente.tipo_accidente}</td>
                        <td>{accidente.departamento}</td>
                        <td>{accidente.fecha_accidente}</td>
                        <td>
                          {moment(accidente.hora_accidente, "HHmmss").format(
                            "HH:mm:ss"
                          )}
                        </td>
                        <td>
                          <a href="#vermas">Ver más</a>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};
