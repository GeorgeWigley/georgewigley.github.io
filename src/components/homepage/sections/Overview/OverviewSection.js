import React from 'react';
import {Box, Divider, Grid, Stack, Typography} from "@mui/material";
import {SocialIcon} from 'react-social-icons';
import Contours from "./contours.svg";

function OverviewSection(props) {
    return (
        <Grid container direction={`column`} justifyContent={`center`} alignItems={`center`} spacing={3}
              style={{
                  backgroundImage: "url(" + Contours + ")",
                  backgroundSize: "cover",
                  height: "100vh",
                  width: "100vw",
                  marginTop: 0,
                  marginBottom: 0,
              }}>
            <Grid item>
                <Typography variant={`h1`} textAlign={`center`} fontWeight={500} >
                    George Wigley
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant={`h5`} textAlign={`center`} color={"#868686"}>
                    Computer Science Student @ <a href={"https://www.bristol.ac.uk/"}
                                                  style={{textDecoration: "none", color: "#868686"}}>University of
                    Bristol</a>
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
            <Divider />
        </Grid>
);
}

export default OverviewSection;