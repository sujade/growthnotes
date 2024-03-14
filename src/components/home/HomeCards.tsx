import {SlNotebook} from "react-icons/sl";
import {AiOutlineLock} from "react-icons/ai";
import {PiFlowerLotusLight} from "react-icons/pi";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

const HomeCards = () => {
    return (
        <div>
            <Container>
                <div className='text-center'>
                    <h2>Why GrowthNotes?</h2>
                </div>
                <Row className="text-center mt-4 mb-5">
                    <Col md="4">
                        <SlNotebook size={100} color='#4CB944' className='mb-3'/>
                        <h4>Efficient and clear note-taking</h4>
                        <p className="text-muted">With set titles and reminders,
                            keep your session<br/> history in check and go back to your notes anytime.</p>
                    </Col>
                    <Col md="4">
                        <AiOutlineLock size={100} color="#F06543" className='mb-3'/>
                        <h4>Your data is safe and sound.</h4>
                        <p className="text-muted">You can be sure that your notes are safe and for <br/>
                            your eyes only. Your data is not only locked behind<br/>
                            your Google account, but it's also heavily encrypted.</p>
                    </Col>
                    <Col md="4">
                        <PiFlowerLotusLight size={100} color="#246EB9" className='mb-3'/>
                        <h4>Well-being comes first.</h4>
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