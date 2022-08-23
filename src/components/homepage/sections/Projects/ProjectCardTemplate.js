import React, {useState} from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid
} from "@mui/material";
import {motion} from "framer-motion";
import ProjectCardContent from "./ProjectCardContent";


function ProjectCardTemplate(props) {
    const [currentImage, setCurrentImage] = useState(props.static)

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <motion.div initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        transition={{duration: 0.3}}
                        variants={{
                            visible: {opacity: 1, y: 0},
                            hidden: {opacity: 0, y: -50}
                        }}>
                <Card style={{backgroundColor: "#101010", minHeight: "30vh", border: "3px solid #202020"}}
                      onMouseEnter={() => {
                          setCurrentImage(props.animated)
                      }}
                      onMouseLeave={() => {
                          setCurrentImage(props.static)
                      }}
                >
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
            </motion.div>
        </Grid>
    )
}

export default ProjectCardTemplate;