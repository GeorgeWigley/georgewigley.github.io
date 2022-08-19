import React, {useEffect, useState} from 'react';
import {Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";


function ProjectCardTemplate(props) {
    const [currentImage, setCurrentImage] = useState(props.static)

    return (
        <Grid item xs={12} lg={3}>
            <Card style={{backgroundColor: "#141414", minHeight: "30vh"}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="100%"
                        image={currentImage}
                        alt="green iguana"
                        onMouseEnter={() => {
                            setCurrentImage(props.animated)
                        }}
                        onMouseLeave={() => {
                            setCurrentImage(props.static)
                        }}
                        style={{opacity: 1}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default ProjectCardTemplate;