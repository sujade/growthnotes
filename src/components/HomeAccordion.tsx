import Accordion from 'react-bootstrap/Accordion';
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

function HomeAccordion() {
    return (
        <Container className='mb-5'>
            <div className='text-center mb-3'>
                <h2>Frequently Asked Questions</h2>
            </div>
            <Row>
                <Col md={3}></Col>
            <Col md={6}><Accordion>

                <Accordion.Item eventKey="0">
                    <Accordion.Header><span className='fw-bold'>Who is GrowthNotes for?</span></Accordion.Header>
                    <Accordion.Body>
                        For everyone who is or has been on therapy! GrowthNotes is here so that you can take notes of
                        your sessions, observations, therapy homeworks and even more.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header><span className='fw-bold'>Does it actually do anything for the user?</span></Accordion.Header>
                    <Accordion.Body>
                        That is up to the individual. If you are a person who retains information better by taking
                        notes, then GrowthNotes is definitely for you!
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header><span className='fw-bold'>Why do I have to sign in to use GrowthNotes?</span></Accordion.Header>
                    <Accordion.Body>
                        Because GrowthNotes takes your personal notes and encrypts them. This way, your notes
                        stay for your eyes only, and safe in our database. No one else but you can read them!
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion></Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    );
}

export default HomeAccordion;