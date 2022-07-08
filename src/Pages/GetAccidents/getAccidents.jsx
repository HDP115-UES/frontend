import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Container, Table, Row, Col } from "react-bootstrap";
import BackButton from "../../Components/BackButton/BackButton";
import "./getAccidentes.css";
import { Link } from "react-router-dom";
export const GetAccidents = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getReportAccidents = async () => {
      const { data } = await axios
        .get("http://127.0.0.1:8000/Reporte/Reportes/")
        .catch((e) => {
          setError("No server response");
        });
      setData(data);
    };
    getReportAccidents();
  }, []);
  return (
    <>
      <BackButton />
      <Container className="mt-4">
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
                          <Link to={`${accidente.id_reporte}`}>Ver más</Link>
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
