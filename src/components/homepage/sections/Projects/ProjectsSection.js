import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import ProjectCardTemplate from "./ProjectCardTemplate";
import gol_Static from "./gameOfLife/gol_Static.jpg";
import gol_Animated from "./gameOfLife/gol_Animated.gif";

function ProjectsSection(props) {
    return (
        <>
            <Grid container direction={`column`} justifyContent={`center`} alignItems={`center`} width={`100%`}
                  height={`100%`}>
                <Typography variant={`h1`} textAlign={`center`}>
                    Projects
                </Typography>
                <Grid container spacing={2} p={3}>
                    <ProjectCardTemplate static={gol_Static} animated={gol_Animated}/>
                    <ProjectCardTemplate static={gol_Static} animated={gol_Animated}/>
                    <ProjectCardTemplate static={gol_Static} animated={gol_Animated}/>
                    <ProjectCardTemplate static={gol_Static} animated={gol_Animated}/>
                    <ProjectCardTemplate static={gol_Static} animated={gol_Animated}/>
                </Grid>
            </Grid>
        </>
    );
}

export default ProjectsSection;