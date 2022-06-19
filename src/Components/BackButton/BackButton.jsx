import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import arrowBack from "../../Assets/Images/arrow-back.svg";
import "./BackButton.css"

const BackButton = () => {
  return (
    <Container fluid className="d-flex justify-content-start arrowContainer">
    <Link to="/" className="link">
      <img src={arrowBack} alt="arrow" className="arrowBack"></img>
      Regresar
    </Link>
  </Container>
  )
}

export default BackButton