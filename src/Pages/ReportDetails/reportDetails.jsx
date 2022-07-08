import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imgid from "../../Assets/Images/2.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

export const ReportDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios
        .get(`http://127.0.0.1:8000/Reporte/Reporte/${id}/`)
        .catch((e) => {
          console.log(e);
        });
      setData(response.data);
    };
    getData();
    console.log(data);
  }, [id]);
  return (
    <Container
      className="mt-5 p-3"
      style={{
        backgroundColor: "#ececec",
      }}
    >
      <h1 style={{ color: "var(--fontContainer)", fontSize: "2rem" }}>
        {data.tipo_accidente}
      </h1>
      <Row>
        <Col md={6} className="d-flex justify-content-end">
          <img src={imgid} alt="wqwws" width={300} height={200}></img>
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-start">
          <p>Descripcion:</p>
          <p>{data.descripción}</p>
          <p>Fecha: {data.fecha_accidente}</p>
          <p>
            Hora: {moment(data.hora_accidente, "HHmmss").format("HH:mm:ss")}
          </p>
          <p>Departamento: {data.departamento}</p>
          <p>Numero involucrados: {data.numero_involucrados}</p>
          <p>Tipo de vehículos: {data.tipo_vehiculo}</p>

          {/*   <Table striped bordered hover responsive>
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
            </Table> */}
        </Col>
      </Row>
    </Container>
  );
};
