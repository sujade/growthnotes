import Navigation from "../components/home/Navigation.tsx";
import HomePageContent from "../components/home/HomePageContent.tsx";
import LoggedFooter from "../components/layout/Footer.tsx";
const Home = () => {
    return (
        <div>
            <Navigation/>
            <HomePageContent/>
            <LoggedFooter/>
        </div>
    );
};

export default Home;