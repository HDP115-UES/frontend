import React from "react";
import {
  Container,
  Table,
  Row,
  Col,
  Button,
  Pagination,
} from "react-bootstrap";
import BackButton from "../../Components/BackButton/BackButton";
import "./getAccidentes.css";

export const UserReport = () => {
  return (
    <>
      <BackButton />
      <Container className="mt-4">
        <Row>
          <Col>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Accidente</th>
                  <th>Departamento</th>
                  <th>Fecha/Hora reporte</th>
                  <th>Descripcion</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>*Carburo</td>
                  <Button variant="light">Editar</Button>{" "}
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end">
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Col>
        </Row>
      </Container>
    </>
  );
};
