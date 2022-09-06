import React from 'react';
import {Box, Grid} from "@mui/material";
import {motion} from "framer-motion";

function ProjectPageImageTextOne(props) {
    return (
        <Grid container direction={"row"} justifyContent={"center"} spacing={4}>

            <Grid item xs={12} md={6} lg={4}>
                <motion.div initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                            transition={{duration: 0.3}}
                            variants={{
                                visible: {opacity: 1, y: 0},
                                hidden: {opacity: 0, y: -50}
                            }}>
                    <Box style={{border: "2px solid #202020"}} p={2}>
                        <h2>
                            {props.subTitle}
                        </h2>
                        <p>
                            {props.subText}
                        </p>
                    </Box>
                </motion.div>
            </Grid>
            <Grid item xs={12} md={6} lg={4} p={2}>
                <motion.div initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                            transition={{duration: 0.3, delay: 0.1}}
                            variants={{
                                visible: {opacity: 1, x: 0},
                                hidden: {opacity: 0, x: -50}
                            }}>
                <img
                    width={"100%"}
                    src={props.image} alt={"Project image"}/>
                </motion.div>
            </Grid>
            <br/>
        </Grid>);
}

export default ProjectPageImageTextOne;