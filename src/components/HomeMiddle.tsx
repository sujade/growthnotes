import {Col, Row} from "react-bootstrap";
import Bike from '../images/bike.jpeg'

const HomeMiddle = () => {
    return (
        <div className='d-flex align-content-center justify-content-evenly pt-5 pb-3 mb-5'>
            <Row>
                <Col md={5}><img className='border border-3 border-black rounded-3' src={Bike}
                                 alt='bicycle'></img></Col>
                <Col md={2}></Col>
                <Col md={5}><h2>How do we tailor <br/>your note-taking categories?</h2>
                    <ul className='mt-5 pt-3'>
                        <li><h4>General Notes</h4></li>
                        <li><h4>Observations</h4></li>
                        <li><h4>Patterns</h4></li>
                        <li><h4>Homeworks</h4></li>
                        <li id='andmore'><h4>...and more!</h4></li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
};

export default HomeMiddle;