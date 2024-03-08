import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SVG from "../images/logo.png"

function Navigation() {
    return (
        <>
            <Navbar id="navbar" data-bs-theme="light" sticky="top">
                <Container>
                    <Navbar.Brand href="#home" className="text-center"><img width={80} src={SVG} alt="logo"/> <p
                        className="fw-bold">GrowthNotes</p></Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation