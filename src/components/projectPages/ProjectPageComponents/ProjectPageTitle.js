import React, {useEffect, useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

function ProjectPageTitle(props) {

    const size = useWindowSize();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <motion.div initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    transition={{duration: 0.2}}
                    variants={{
                        visible: {opacity: 1, y: 0},
                        hidden: {opacity: 0, y: -50}
                    }}>
        <Box pt={3} width={"100%"}>
            <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} p={2} spacing={4}>
                <Grid item md={3} lg={2}>
                    <Link to={"/"} style={{textDecoration: 'none'}}>
                        <Box sx={{
                            '&:hover': {
                                backgroundColor: "#202020",
                            }
                        }}
                             bgcolor={"#303030"}
                             display={(size.width > 900) ? "block" : "none"}
                        >
                            <Typography color={"#ffffff"} variant={"h4"} textAlign={"center"} p={2}>
                                Back
                            </Typography>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Typography variant={"h2"} textAlign={"center"} style={{border: "2px solid #202020"}} p={2}>
                        {props.title}
                    </Typography>
                </Grid>
                <Grid item xs={0} md={3} lg={2} display={(props.demoLink || size.width > 900) ? "block" : "none"}>
                    {props.demoLink ?
                        <a href={ props.demoLink } target="_blank" rel="noopener noreferrer"  style={{textDecoration: 'none'}}>
                            <Box sx={{
                                '&:hover': {
                                    backgroundColor: "#202020",
                                }
                            }}
                                 width={size.width < 900 ? "90vw" : "auto"}
                                 bgcolor={"#303030"}
                            >
                                <Typography color={"#ffffff"} variant={"h4"} textAlign={"center"} p={2}>
                                    Demo
                                </Typography>
                            </Box>
                        </a>
                        :
                        <>
                        </>
                    }
                </Grid>
            </Grid>
        </Box>
        </motion.div>
    )
        ;
}

export default ProjectPageTitle;