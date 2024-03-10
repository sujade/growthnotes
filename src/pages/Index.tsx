import Navigation from "../components/Navigation.tsx";
import Main from "../components/Main.tsx";
import LoggedFooter from "../components/LoggedFooter.tsx";
const Index = () => {
    return (
        <div id="index">
            <Navigation/>
            <Main/>
            <LoggedFooter/>
        </div>
    );
};

export default Index;