import React, {useEffect} from 'react';
import OverviewSection from "./sections/Overview/OverviewSection";
import ProjectsSection from "./sections/Projects/ProjectsSection";
import "./homepage.css"
import AboutSection from "./sections/About/AboutSection";

function Homepage(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <OverviewSection/>
            <AboutSection/>
            <ProjectsSection/>
        </>
    );
}

export default Homepage;