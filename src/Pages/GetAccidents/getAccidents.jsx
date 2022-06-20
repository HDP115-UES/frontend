import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Table,
  Row,
  Col,
  Button,
  Form,
  Pagination,
} from "react-bootstrap";
import BackButton from "../../Components/BackButton/BackButton";
import "./getAccidentes.css";
export const GetAccidents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios
        .get("http://127.0.0.1:8000/Departamento/Departamentos/")
        .catch((error) => {
          console.log(error);
        });
        setData(response.data);
      console.log(response.data);
      console.log(data);
    };
    getData();
  }, []);
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
          <div className="selectFilter">
            <Form.Select aria-label="Default select example">
              <option>Selecciona una opción</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </div>
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Accidente</th>
                </tr>
              </thead>
              <tbody>
                {/*    {data.map((accidente, accidenteId) => {
                  <tr key={accidenteId}>
                    <td>{accidente.name}</td>
                  </tr>;
                })} */}
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
