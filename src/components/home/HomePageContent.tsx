import HomeCards from "./HomeCards.tsx";
import HomeHeader from "./HomeHeader.tsx";
import HomeFeatures from "./HomeFeatures.tsx";
import QuestionsAccordion from "./QuestionsAccordion.tsx";
import HomeLogin from "./HomeLogin.tsx";

const HomePageContent = () => {
    return (
        <>
            <HomeHeader/>
            <HomeCards/>
            <HomeFeatures/>
            <HomeLogin/>
            <QuestionsAccordion/>
        </>
    );
};
export default HomePageContent;