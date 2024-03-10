import Navigation from "../components/Navigation.tsx";
import NoteWelcome from "../components/NoteWelcome.tsx";
import LoggedFooter from "../components/LoggedFooter.tsx";

const MyNotes = () => {
    return (
        <div>
           <Navigation/>
            <NoteWelcome/>
            <LoggedFooter/>
        </div>
    );
};

export default MyNotes;