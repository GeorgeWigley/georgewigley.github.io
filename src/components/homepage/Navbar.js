import React from 'react';
import {Box, Divider, Grid, Paper, Typography} from "@mui/material";

function Navbar(props) {
    return (
        <Box sx={{boxShadow: 3, backgroundColor: "#141414", zIndex: 10}} position={`fixed`} width={`100vw`}>
            <Grid container p={2} justifyContent={"flex-start"} alignItems={"center"} spacing={2}>
                <Grid item>
                    <Typography variant={`h4`}>
                        George Wigley
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant={`h6`}>
                        About
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant={`h6`}>
                        Projects
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Navbar;