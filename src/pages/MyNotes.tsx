import LoggedFooter from "../components/LoggedFooter.tsx";
import Container from "react-bootstrap/Container";
import NavigationNotes from "../components/NavigationNotes.tsx";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import NoteBox from "../components/NoteBox.tsx";
const MyNotes = () => {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    };

    const triggerError = () => {
        alert("Something went wrong!")
    }

    return (
        <div>
            <NavigationNotes/>
            <Container className='border border-2 border-success rounded-2 mb-5'>
                <Row className="pt-3 pb-3">
                    <Col md={2}>
                        <Button onClick={handleClick} className='btn-light btn-outline-primary fw-bold'>New</Button>
                        <span className='p-2'></span>
                        <Button onClick={triggerError} className='btn-light btn-outline-primary fw-bold'>Previous</Button>
                    </Col>

                    <Col md={10}></Col>
                </Row>

                {toggle ?
                    <NoteBox/>
                    :
                    <></>
                }

            </Container>
            <LoggedFooter/>
        </div>
    );
};

export default MyNotes;