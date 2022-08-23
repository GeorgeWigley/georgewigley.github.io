import {Button, Grid} from "@mui/material";
import React from "react";

export default function ContactButton() {
    return (
        <Grid container justifyContent={"center"} alignItems={"center"} p={6}>
            <Button style={{minWidth: "300px", minHeight: "60px"}} variant={"contained"}>
                Contact Me
            </Button>
        </Grid>
    );
}