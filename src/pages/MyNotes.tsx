import Navigation from "../components/Navigation.tsx";
import NoteWelcome from "../components/NoteWelcome.tsx";
import Footer from "../components/Footer.tsx";

const MyNotes = () => {
    return (
        <div>
           <Navigation/>
            <NoteWelcome/>
            <Footer/>
        </div>
    );
};

export default MyNotes;