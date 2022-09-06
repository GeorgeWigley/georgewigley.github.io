import React from 'react';
import OverviewSection from "./sections/Overview/OverviewSection";
import ProjectsSection from "./sections/Projects/ProjectsSection";
import "./homepage.css"
import AboutSection from "./sections/About/AboutSection";

function Homepage(props) {

    return (
        <>
            <OverviewSection/>
            <AboutSection/>
            <ProjectsSection/>
        </>
    );
}

export default Homepage;