import {FaLinkedin} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {SiKofi} from "react-icons/si";

function Footer() {
    return (
        <Container>
            <Row>
                <Col md={2}></Col>
                <Col md={3}>
                    <p className="fw-bold footer-text">Reach Us:</p>
                    <p className="footer-text">Telephone: 123-456789<br/> notareal@email.com</p>
                    <p className="footer-text">GrowthNotes<br/> Lorem Ipsum Street<br/> 123456
                        Dolor</p>
                </Col>
                <Col md={2}>

                </Col>
                <Col md={3}>
                    <p className="fw-bold footer-text">Follow Us!</p>
                    <div className='mb-3'>
                        <FaLinkedin size={50}/>
                        <FaInstagramSquare size={50}/>
                        <FaFacebookSquare size={50}/>
                        <FaGithubSquare size={50}/>
                    </div>
                    <p className="fw-bold footer-text">Support Us!</p>
                    <div><SiKofi size={50}/>
                    </div>
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
    )
}

export default Footer