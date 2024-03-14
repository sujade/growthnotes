import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SVG from "../../images/logo.png"
import {Col, Row} from "react-bootstrap";
import {generateQuote} from "../../functions/generateQuote.tsx";
import Button from "react-bootstrap/Button";
import {googleLogout} from "@react-oauth/google";
import {useNavigate} from "react-router-dom";

function Navigation() {
    const navigate = useNavigate()
    const logOut = () => {
        googleLogout();
        navigate('/');
    };

    return (
        <Navbar id="navbar" data-bs-theme="light">
            <Container>
                <Navbar.Brand className="text-center"><img width={80} src={SVG} alt="logo"/> <p
                    className="fw-bold">GrowthNotes</p></Navbar.Brand>

                <Col>
                    <Row className='text-start'><h2>Welcome! How are you today?</h2></Row>
                    <Row><span>{generateQuote()}</span></Row>
                </Col>

                <Col md={1}>
                    <Row><Button onClick={logOut} className='btn-light btn-outline-danger fw-bold'>Logout</Button></Row>
                </Col>
            </Container>
        </Navbar>
    )
}

export default Navigation