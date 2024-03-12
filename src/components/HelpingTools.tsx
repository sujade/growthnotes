import Accordion from 'react-bootstrap/Accordion';

function HelpingTools() {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Helping Tools</Accordion.Header>
                <Accordion.Body>

                    <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Breathing</Accordion.Header>
                        <Accordion.Body>
                            Breathe in slowly for 4 seconds, hold it in for 7 seconds, and release it 8 seconds.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>

                    <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Grounding</Accordion.Header>
                        <Accordion.Body>
                            Try touching something with a texture, or try something that smells different than your surroundings.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>

                    <Accordion>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Senses</Accordion.Header>
                        <Accordion.Body>
                            Look around and focus on these one by one: 5 things you see, 4 things you feel, 3 things you hear, 2 things you smell, and 1 thing you taste.

                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default HelpingTools;