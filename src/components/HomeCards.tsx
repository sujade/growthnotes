import {SlNotebook} from "react-icons/sl";
import {AiOutlineLock} from "react-icons/ai";
import {PiFlowerLotusLight} from "react-icons/pi";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

const HomeCards = () => {
    return (
        <div>
            <Container>
            <Row className="text-center mt-5">
                <Col md="4">
                    <SlNotebook size={150} color='#4CB944' className='mb-3'/>
                    <h3>Efficient and clear note-taking</h3>
                    <p className="text-muted">With set titles and reminders,
                        keep your session<br/> history in check and go back to your notes anytime.</p>
                </Col>
                <Col md="4">
                    <AiOutlineLock size={150} color="#F06543" className='mb-3'/>
                    <h3>Your data is safe and sound.</h3>
                    <p className="text-muted">You can be sure that your notes are safe and for <br/>
                        your eyes only. Your data is not only locked behind<br/>
                        your Google account, but it's also heavily encrypted.</p>
                </Col>
                <Col md="4">
                    <PiFlowerLotusLight size={150} color="#246EB9" className='mb-3'/>
                    <h3>Well-being comes first.</h3>
                    <p className="text-muted">With breathing-exercises. calming notes and more<br/>
                        methods embedded in our web-app, we aim to give<br/>
                        you a safe space for you to reflect about your sessions.</p>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default HomeCards;