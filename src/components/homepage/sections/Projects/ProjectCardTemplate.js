import React, {useState} from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid
} from "@mui/material";
import ProjectCardContent from "./ProjectCardContent";




function ProjectCardTemplate(props) {
    const [currentImage, setCurrentImage] = useState(props.static)

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} >
            <Card style={{backgroundColor: "#101010", minHeight: "30vh", border: "3px solid #202020"}}
                  onMouseEnter={() => {
                      setCurrentImage(props.animated)
                  }}
                  onMouseLeave={() => {
                      setCurrentImage(props.static)
                  }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="100%"
                        image={currentImage}
                        alt="project image"
                    />
                    <CardContent>
                        <ProjectCardContent name={props.name} tools={props.tools}/>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
        ;
}

export default ProjectCardTemplate;