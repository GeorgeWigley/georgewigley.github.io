import React from 'react';
import {Box, Divider, Grid, Stack, Typography} from "@mui/material";
import {SocialIcon} from 'react-social-icons';
import Contours from "./contours.svg";
import {motion} from "framer-motion";

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
                <motion.div
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.3}}>
                    <Typography variant={`h1`} textAlign={`center`} fontWeight={500}>
                        George Wigley
                    </Typography>
                </motion.div>
            </Grid>
            <Grid item>
                <motion.div
                    initial={{opacity: 0, y: -25}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.2, delay: 0.25}}>
                    <Typography variant={`h5`} textAlign={`center`} color={"#868686"}>
                        Computer Science MEng Student @ <a href={"https://www.bristol.ac.uk/"}
                                                      style={{textDecoration: "none", color: "#868686"}}>University of
                        Bristol</a>
                    </Typography>
                </motion.div>
            </Grid>
            <br/>
            <Grid item>
                <Stack direction={"row"} spacing={2}>
                    <motion.div
                        initial={{opacity: 0, x: -15}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.2, delay: 0.3}}>
                        <SocialIcon url={"https://github.com/GeorgeWigley"} bgColor={"#ffffff"}/>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.2, delay: 0.34}}>
                        <SocialIcon url={"https://linkedin.com/in/george-wigley"}/>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, x: -25}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.2, delay: 0.38}}>
                        <SocialIcon url={"mailto:georgewigley123@gmail.com"}/>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, x: -30}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.2, delay: 0.42}}>
                        <SocialIcon url={"https://www.instagram.com/george_wigley_/"}/>
                    </motion.div>
                </Stack>
            </Grid>
            <Divider/>
        </Grid>
    );
}

export default OverviewSection;