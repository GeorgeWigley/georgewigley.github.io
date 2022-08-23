import React from 'react';
import {Grid, Typography} from "@mui/material";
import {motion} from "framer-motion";

function AboutSection(props) {


    return (
        <>
            <Grid container direction={"row"} justifyContent={"space-around"} alignItems={"flex-start"} pt={6}>
                <Grid item xs={12} md={5} p={2} m={1} style={{border: "2px solid #202020"}}>
                    <motion.div initial="hidden"
                                whileInView="visible"
                                viewport={{once: true}}
                                transition={{duration: 0.3}}
                                variants={{
                                    visible: {opacity: 1, y: 0},
                                    hidden: {opacity: 0, y: -50}
                                }}
                    >
                        <Typography variant="h3">
                            About me
                        </Typography>
                        <ul>
                            <li>
                                I am a third-year MEng Computer Science undergraduate who is passionate about
                                programming and
                                solving problems using technology.
                            </li>
                            <li>
                                In addition to programming, I have experience leading a
                                team
                                and presenting complex technical ideas in a straightforward way from programmer to
                                director
                                level.
                            </li>
                        </ul>
                    </motion.div>
                </Grid>
                <Grid item xs={12} md={5} p={2} m={1} style={{border: "2px solid #202020"}}>
                    <motion.div initial="hidden"
                                whileInView="visible"
                                viewport={{once: true}}
                                transition={{duration: 0.3}}
                                variants={{
                                    visible: {opacity: 1, y: 0},
                                    hidden: {opacity: 0, y: -50}
                                }}
                    >
                        <Typography variant="h3">
                            Skills
                        </Typography>
                        <ul>
                            <li>
                                Fluency and experience using Python, C, C++, C#, Java, Go, Haskell and SQL.
                            </li>
                            <li>
                                Experience using Git, Github, Unity, Blender, AWS, IBM Cloud and Linux (Including
                                scripting and usage of Bash).
                            </li>
                            <li>
                                Experience with 3D modelling, usage of inverse kinematics, animation, texturing,
                                materials and rendering.
                            </li>
                            <li>
                                Knowledge of algorithmic design including runtime analysis, graph theory and the
                                usage
                                of data structures for solving problems.
                            </li>
                        </ul>
                    </motion.div>
                </Grid>
            </Grid>
        </>
    );
}

export default AboutSection;