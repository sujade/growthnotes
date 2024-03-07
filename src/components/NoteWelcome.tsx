import Container from "react-bootstrap/Container";
import profile from "./Login.tsx";
import {generateQuote} from "../functions/generateQuote.tsx";
import Button from "react-bootstrap/Button";

const NoteWelcome = () => {
    return (
            <Container id="#home" className="d-flex flex-row justify-content-evenly mb-5 mt-5">
                <div className="text-start mb-5 mt-5"><h1>Welcome, {profile.name}! <br/>How are you today?</h1>
                    <span>{generateQuote()}</span></div>
                <div className="text-end mb-5 mt-5">
                    <h1>Ready to start?</h1>
                    <Button className="btn btn-primary btn-lg">Let's go!</Button></div>

                <div></div>
            </Container>
    );
};

export default NoteWelcome;