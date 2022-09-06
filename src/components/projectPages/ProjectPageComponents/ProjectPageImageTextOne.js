import React from 'react';
import {Box, Grid} from "@mui/material";

function ProjectPageImageTextOne(props) {
    return (
        <Grid container direction={"row"} justifyContent={"center"} spacing={4}>
            <Grid item xs={12} md={6} lg={4}>
                <Box style={{border: "2px solid #202020"}} p={2}>
                    <h2>
                        {props.subTitle}
                    </h2>
                    <p>
                        {props.subText}
                    </p>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4} p={2}>
                <img
                    width={"100%"}
                    src={props.image} alt={"Project image"}/>
            </Grid>
            <br/>
        </Grid>);
}

export default ProjectPageImageTextOne;