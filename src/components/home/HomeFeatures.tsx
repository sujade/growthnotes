import {Col, Row} from "react-bootstrap";
import Bike from '../../images/bike.jpeg'

const HomeFeatures = () => {
    return (
        <div className='container'>
            <Row>
                <Col className="d-flex justify-content-center" md={6}><img className='border border-3 border-black rounded-3' src={Bike}
                                 alt='bicycle'></img></Col>
                <Col className='text-center text-md-start' md={6}><h2 className="mt-5 mt-md-0">How do we tailor <br/>your note-taking categories?</h2>
                    <h5 className='mt-3 text-muted'>We customize and personalize <br/>your note-taking
                    field based on your choices!</h5>
                    <ul className='mt-3'>
                        <li><h4>General Notes</h4></li>
                        <li><h4>Observations</h4></li>
                        <li><h4>Patterns</h4></li>
                        <li><h4>Homeworks</h4></li>
                        <li><h4>...and more!</h4></li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
};

export default HomeFeatures;