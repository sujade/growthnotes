import {PropsWithChildren} from "react";
import {Card} from "react-bootstrap";
import Logo from "../images/logo.png"
import Container from "react-bootstrap/Container";

interface Props extends PropsWithChildren {
}

const LoginForm = ({children}: Props) => {
    return (
        <div className="d-flex align-items-center text-center mb-5 mt-5 pt-5 pb-5">
            <Container>
                <Card id='index' className="border border-3 border-black">
                    <Card.Body>
                        <img className="mt-5 mb-3" id="logo" src={Logo} alt="logo"/>
                        <Card.Title className=" fs-1 fw-bolder mb-2">Welcome to GrowthNotes!</Card.Title>
                        <Card.Subtitle className="text-muted fs-4 mb-5">Supporting growth, every step of the
                            way.</Card.Subtitle>
                        <div className="mt-5 mb-2">{children}</div>
                        <p className='text-muted mb-5 pb-5'>Currently, we do not offer our separate registration service. <br/>
                            To continue, please sign in with your Google account.</p>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default LoginForm;