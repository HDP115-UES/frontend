import React from "react";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/logo.svg";
import "./navbar.css";
export const NavbarPage = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Row className="d-flex justify-content-center justify-content-sm-between w-100">
          <Col
            xs={12}
            sm={6}
            className="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <Link to="/ " href="#home" style={{ textDecoration: "none" }}>
              <span
                style={{
                  fontWeight: "bold",
                  color: "var(--fontColor)",
                  textDecoration: "none",
                }}
              >
                {" "}
                Traffic Crash Report
              </span>{" "}
              <img
                alt=""
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Link>
          </Col>
          <Col
            xs={12}
            sm={6}
            className="d-flex align-items-center justify-content-center justify-content-sm-end"
          >
            <Link to="/login">
              <Button
                size="sm"
                className="me-3"
                style={{
                  backgroundColor: "var(--bgColorBtn)",
                  border: "none",
                  fontWeight: "600",
                }}
              >
                Iniciar sesión
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                size="sm"
                variant="outline-warning"
                style={{ color: "var(--fontColor)", fontWeight: "600" }}
              >
                Registrarse
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
