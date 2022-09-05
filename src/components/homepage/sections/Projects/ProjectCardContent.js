import {Box, Grid, Tooltip, Typography} from "@mui/material";
import {SiAmazonaws, SiGnubash, SiGo} from "react-icons/si";
import React from "react";

export default function ProjectCardContent(props) {

    function generate() {
        let result = []
        for (const tool of props.tools) {
            result.push(
                <Grid item key={result.length}>
                    <Tooltip  title={tool.type.name.substring(2)}>
                        <div>
                            {tool}
                        </div>
                    </Tooltip>
                </Grid>
            )
        }
        return result
    }

    return <>
        <Typography variant={"h4"} width={"100%"} textAlign={"center"}>
            {props.name}
        </Typography>
        <br/>
        <Grid container direction={"row"} justifyContent={"center"} alignItems={"flex-start"} spacing={2} pl={3} pr={3}>
            {generate()}
        </Grid>
    </>;
}