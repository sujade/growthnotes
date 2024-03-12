import LoggedFooter from "../components/LoggedFooter.tsx";
import Container from "react-bootstrap/Container";
import NavigationNotes from "../components/NavigationNotes.tsx";
import HelpingTools from "../components/HelpingTools.tsx";

const MyNotes = () => {
    return (
        <div>
           <NavigationNotes/>
            <Container className='border border-2 border-success rounded-2 mb-5'>
                <HelpingTools/>
            </Container>
            <LoggedFooter/>
        </div>
    );
};

export default MyNotes;