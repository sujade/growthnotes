import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Row} from "react-bootstrap";

function NoteBox() {
    return (
        <Form className="m-5">
            <Row>
                <Col md={2}>
                <Form.Group className="mb-3" controlId="formDate">
                    <Form.Label className="fw-bold">Date</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group></Col>
            </Row>

            <Row>
                <Col>
                <Form.Group className="mb-3" controlId="formSubject">
                    <Form.Label className="fw-bold">Subject</Form.Label>
                    <Form.Control type="text" placeholder="What was your session about?"/>
                </Form.Group></Col>

                <Col>
                <Form.Group className="mb-3" controlId="formInformation">
                    <Form.Label className="fw-bold">New Information</Form.Label>
                    <Form.Control type="text" placeholder="What have you learned during your session?"/>
                </Form.Group></Col>
            </Row>

            <Row>
                <Col>
            <Form.Group className="mb-3" controlId="formHomeworks">
                <Form.Label className="fw-bold">Homeworks</Form.Label>
                <Form.Control type="text"
                              placeholder="Do you have any therapy homeworks? If yes, note them down here."/>
            </Form.Group></Col>

                <Col>
            <Form.Group className="mb-3" controlId="forOpinion">
                <Form.Label className="fw-bold">Therapy Opinions</Form.Label>
                <Form.Control type="text" placeholder="How did your therapy go? What do you feel about it?"/>
            </Form.Group></Col>
            </Row>

            <Row>
                <Col md={6}>
            <Form.Group className="mb-3" controlId="forFree">
                <Form.Label className="fw-bold">Free Input</Form.Label>
                <Form.Control type="text"
                              placeholder="Is there anything else you would like to add?"/>
            </Form.Group></Col>
            </Row>

            <Button className="btn-light btn-outline-success" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default NoteBox;
