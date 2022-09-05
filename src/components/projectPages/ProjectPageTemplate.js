import React from 'react';
import {Box, Grid, Stack, Typography} from "@mui/material";
import {ImCross} from "react-icons/im";

function ProjectPageTemplate(props) {
    return (
        <Box pt={5} width={"100%"}>
            <Typography variant={"h2"} textAlign={"center"}>
                {props.title}
            </Typography>
            <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} mt={5} width={"100%"}
                   p={2}>
                <Grid container direction={"row"} justifyContent={"center"} spacing={4}>
                    <Grid item xs={12} md={4}>
                        <h2>
                            {props.subTitleOne}
                        </h2>
                        <p>
                            {props.subTextOne}
                        </p>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img
                            width={"100%"}
                            src={props.imageOne}/>
                    </Grid>
                    <br/>
                </Grid>
                <Grid container direction={"row"} justifyContent={"center"} spacing={4}>
                    <Grid item xs={12} md={4}>
                        <img
                            width={"100%"}
                            src={props.imageTwo}/>
                    </Grid>
                    <Grid item xs={12} md={4} p={2}>
                        <h2>
                            {props.subTitleTwo}
                        </h2>
                        <p>
                            {props.subTextTwo}
                        </p>
                    </Grid>
                </Grid>
                <Grid container direction={"row"} justifyContent={"center"} spacing={4}>
                    <Grid item xs={12} md={4}>
                        <h2>
                            {props.subTitleThree}
                        </h2>
                        <p>
                            {props.subTextThree}
                        </p>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img
                            width={"100%"}
                            src={props.imageThree}/>
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    );
}

export default ProjectPageTemplate;