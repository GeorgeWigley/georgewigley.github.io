import React from 'react';
import {Box, Divider, Grid, Paper, Typography} from "@mui/material";

function Navbar(props) {
    return (
        <Box sx={{ boxShadow: 3, backgroundColor: "#ffffff"}} position={`fixed`} width={`100vw`}>
            <Grid container p={2} just>
                <Grid item>
                    <Typography variant={`h3`}>
                        George Wigley
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant={`h3`}>
                        About
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant={`h3`}>
                        Projects
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Navbar;