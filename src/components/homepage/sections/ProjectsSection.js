import React from 'react';
import {Grid, Typography} from "@mui/material";

function ProjectsSection(props) {
    return (
        <>
            <Grid container direction={`column`} justifyContent={`center`} alignItems={`center`} width={`100%`}
                  height={`100%`} style={{backgroundColor: "#222c44"}} mt={3}>
                <Typography variant={`h1`} textAlign={`center`}>
                    Projects
                </Typography>
            </Grid>
        </>
    );
}

export default ProjectsSection;