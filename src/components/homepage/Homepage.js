import React from 'react';
import OverviewSection from "./sections/Overview/OverviewSection";
import ProjectsSection from "./sections/Projects/ProjectsSection";
import {Box} from "@mui/material";
import "./homepage.css"
import Navbar from "./Navbar";

function Homepage(props) {
    return (
        <>
            <OverviewSection/>
            <ProjectsSection/>
        </>
    );
}

export default Homepage;