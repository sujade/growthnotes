import {FaLinkedin} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

function Footer() {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <p className="fw-bold footer-text">Reach Us:</p>
                    <p className="footer-text">Telephone: 123-456789<br/> notareal@email.com</p>
                    <p className="footer-text">GrowthNotes<br/> Lorem Ipsum Street<br/> 123456
                        Dolor</p>
                </Col>
                <Col md={4}>
                    <p className="fw-bold footer-text">Links:</p>
                    <span><a href="url">Home</a></span><br/>
                    <span><a href="url">About</a></span><br/>
                    <span><a href="url">F.A.Q.</a></span>

                </Col>
                <Col md={4}>
                    <p className="fw-bold footer-text">Follow Us!</p>
                    <div>
                        <FaLinkedin size={50}/>
                        <FaInstagramSquare size={50}/>
                        <FaFacebookSquare size={50}/>
                        <FaGithubSquare size={50}/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer