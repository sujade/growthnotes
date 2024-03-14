import profile from "../Login.tsx";
import {generateQuote} from "../../functions/generateQuote.tsx";
import {Col, Row} from "react-bootstrap";

const NoteWelcome = () => {
    return (
        <Row className="text-start mb-5 mt-5">
            <Col>
                <Row><h2>Welcome, {profile.name}! How are you today?</h2></Row>
                <Row><span>{generateQuote()}</span></Row>
            </Col>

            <Col>

            </Col>
        </Row>
    );
};

export default NoteWelcome;