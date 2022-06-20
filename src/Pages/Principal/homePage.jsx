import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./homePage.css";
import reportAccident from "../../Assets/Images/reportAccident.svg";
import getAccident from "../../Assets/Images/get-reports.svg";
import { Link } from "react-router-dom";
export const HomePage = () => {
  return (
    <Container className="seccionPrincipal" fluid>
      <Container className="textContainer d-flex align-items-center w-100 h-100">
        <h1>Reporta un accidente</h1>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col xs={12} sm={6}>
            <Row className="containerReport ">
              <Col className="d-flex align-items-center justify-content-center">
                <Link
                  to="/addReport"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <img src={reportAccident} alt="addReport-img"></img> Reportar
                  un accidente
                </Link>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6}>
            <Row className="containerReport">
              <Col className="d-flex align-items-center justify-content-center">
                <img src={getAccident} alt="getReport-img"></img>{" "}
                <Link
                  to="/getAccidents"
                  className="ms-4 text-white"
                  style={{ textDecoration: "none" }}
                >
                  Consultar un accidente
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
