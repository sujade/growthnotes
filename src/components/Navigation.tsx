import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SVG from "../images/logo.png"

function Navigation() {
    return (
        <>
            <Navbar id="navbar" data-bs-theme="light" sticky="top">
                <Container>
                    <Navbar.Brand href="#home" className="text-center"><img width={80} src={SVG} alt="logo"/> <p
                        className="fw-bold">GrowthNotes</p></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/index">Home</Nav.Link>
                        <Nav.Link href="/mynotes">My Notes</Nav.Link>
                        <Nav.Link href="/about">Who are we?</Nav.Link>
                        <Nav.Link href="/faq">F.A.Q.</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation