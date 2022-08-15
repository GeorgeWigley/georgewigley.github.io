import React from 'react';
import {Grid, Stack, Typography} from "@mui/material";
import { SocialIcon } from 'react-social-icons';

function OverviewSection(props) {
    return (
        <Grid container direction={`column`} justifyContent={`center`} alignItems={`center`}
              minHeight={`100vh`} spacing={3}>
            <Grid item>
                <Typography variant={`h1`} textAlign={`center`}>
                    George Wigley
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant={`h5`} textAlign={`center`} color={"#868686"}>
                    Computer Science Student @ University of Bristol
                </Typography>
            </Grid>
            <br/>
            <Grid item>
                <Stack direction={"row"} spacing={2}>
                    <SocialIcon url={"https://github.com/GeorgeWigley"} bgColor={"#ffffff"}/>
                    <SocialIcon url={"https://linkedin.com/in/george-wigley"}/>
                    <SocialIcon url={"mailto:georgewigley123@gmail.com"}/>
                    <SocialIcon url={"https://www.instagram.com/george_wigley_/"}/>
                </Stack>
            </Grid>
            <br/>
        </Grid>
    );
}

export default OverviewSection;