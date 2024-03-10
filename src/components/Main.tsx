import HomeCards from "./HomeCards.tsx";
import HomeHeader from "./HomeHeader.tsx";
import HomeMiddle from "./HomeMiddle.tsx";
import HomeAccordion from "./HomeAccordion.tsx";
import HomeLogin from "./HomeLogin.tsx";

const Main = () => {
    return (
        <>
            <HomeHeader/>
            <HomeCards/>
            <HomeMiddle/>
            <HomeLogin/>
            <HomeAccordion/>
        </>
    );
};
export default Main;