import React from 'react';
import OverviewSection from "./sections/OverviewSection";
import ProjectsSection from "./sections/Projects/ProjectsSection";
import {Box} from "@mui/material";
import "./homepage.css"

function Homepage(props) {
    return (
        <>
                <OverviewSection/>
                <ProjectsSection/>
        </>
    );
}

export default Homepage;