import LoggedFooter from "../components/LoggedFooter.tsx";
import Container from "react-bootstrap/Container";
import NavigationNotes from "../components/NavigationNotes.tsx";
import HelpingTools from "../components/HelpingTools.tsx";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const MyNotes = () => {
    return (
        <div>
            <NavigationNotes/>
            <Container className='border border-2 border-success rounded-2 mb-5 pt-3'>
                <Row>
                    <Col md={2}>
                        <Button className='btn-light btn-outline-primary fw-bold'>New</Button>
                        <span className='p-2'></span>
                        <Button className='btn-light btn-outline-primary fw-bold'>Previous</Button>
                    </Col>

                    <Col md={8}></Col>

                    <Col md={2}>
                        <HelpingTools/>
                    </Col>
                </Row>

            </Container>
            <LoggedFooter/>
        </div>
    );
};

export default MyNotes;