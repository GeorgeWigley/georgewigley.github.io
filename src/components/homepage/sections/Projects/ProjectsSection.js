import React, {useEffect} from 'react';
import {Box, Divider, Grid, Tooltip, Typography} from "@mui/material";
import ProjectCardTemplate from "./ProjectCardTemplate";
import gol_Static from "./gameOfLife/gol_Static.jpg";
import gol_Animated from "./gameOfLife/gol_Animated.gif";
import whiplash_Static from "./whiplash/whiplash_Static.gif";
import whiplash_Animated from "./whiplash/whiplash_Animated.gif";
import pdv_Static from "./playlistDataViewer/PDV_Static.jpg";
import scotlandYard_Static from "./scotlandYard/scotlandYard_Static.gif";
import scotlandYard_Animated from "./scotlandYard/scotlandYard_Animated.gif";
import plasticDrift from "./boeingHackathon/plasticWasteDrift.jpg";
import spoonsStats from "./spoonsStats/spoonsStats.png";
import dungeonCrawler from "./dungeonCrawler/dungeonCrawler.png";
import spe from "./spe/spe.png";
import {
    SiAdobephotoshop, SiAmazonaws, SiBlender, SiCplusplus, SiCsharp, SiExpress, SiGnubash, SiGo, SiGooglecloud,
    SiHeroku, SiIbm, SiIntellijidea, SiJava, SiJavascript, SiNodedotjs, SiOpengl, SiPostgresql, SiPycharm, SiPython,
    SiReact, SiSpotify, SiSpringboot, SiSteam, SiUnity, SiWikidata, SiWikipedia
} from "react-icons/si";
import {BiNetworkChart} from "react-icons/bi";
import {IconContext} from "react-icons";


function ProjectsSection(props) {
    // preload images
    useEffect(() => {
        new Image().src = gol_Static;
        new Image().src = gol_Animated;
        new Image().src = whiplash_Static;
        new Image().src = whiplash_Animated;
        new Image().src = pdv_Static;
        new Image().src = scotlandYard_Static;
        new Image().src = scotlandYard_Animated;
    }, [])

    return (
        <>
            <IconContext.Provider value={{color: "#606060", className: "global-class-name", size: "3rem"}}>
                <Grid container direction={`column`} justifyContent={`center`} alignItems={`flex-start`} width={`100%`}
                      height={`100%`}>
                    <Grid item xs={12} width={"100%"}>
                            <Typography variant={"h2"} textAlign={"left"} p={3}>
                                Some of my projects
                            </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container p={3} pt={2} width={`100%`} spacing={2}>
                            <ProjectCardTemplate
                                name={"Parallel Game of Life"}
                                tools={[
                                    <SiGo key={2}/>,
                                    <SiAmazonaws key={1}/>,
                                    <SiGnubash key={3}/>,
                                    <SiIntellijidea key={4}/>
                                ]}
                                static={gol_Static}
                                animated={gol_Animated}
                                link={"/gol"}
                            />
                            <ProjectCardTemplate
                                name={"Whiplash"}
                                tools={[
                                    <SiUnity key={1}/>,
                                    <SiCsharp key={2}/>,
                                    <SiSteam key={3}/>,
                                    <SiBlender key={4}/>,
                                    <SiAdobephotoshop key={5}/>,
                                ]}
                                static={whiplash_Static}
                                animated={whiplash_Animated}
                                link={"/whiplash"}
                            />
                            <ProjectCardTemplate
                                name={"Spoons Stats"}
                                tools={[
                                    <SiJavascript key={1}/>,
                                    <SiReact key={2}/>,
                                    <SiNodedotjs key={3}/>,
                                    <SiExpress key={4}/>,
                                    <SiHeroku key={5}/>,
                                    <SiGooglecloud key={6}/>,
                                ]}
                                static={spoonsStats}
                                animated={spoonsStats}
                                link={"/spoonsStats"}
                            />
                            <ProjectCardTemplate
                                name={"Stats for Spotify Playlist"}
                                tools={[
                                    <SiJavascript key={1}/>,
                                    <SiReact key={2}/>,
                                    <SiNodedotjs key={8}/>,
                                    <SiExpress key={7}/>,
                                    <SiHeroku key={6}/>,
                                    <SiSpotify key={3}/>,
                                    <SiWikidata key={4}/>,
                                    <SiWikipedia key={5}/>,
                                ]}
                                static={pdv_Static}
                                animated={pdv_Static}
                                link={"/gol"}
                            />
                            <ProjectCardTemplate
                                name={"Scotland Yard AI"}
                                tools={[
                                    <SiJava key={1}/>,
                                    <BiNetworkChart key={2}/>,
                                    <SiIntellijidea key={3}/>
                                ]}
                                static={scotlandYard_Static}
                                animated={scotlandYard_Animated}
                                link={"/gol"}
                            />
                            <ProjectCardTemplate
                                name={"Plastic Waste Drift in Oceans"}
                                tools={[
                                    <SiPython key={1}/>,
                                    <SiPycharm key={2}/>
                                ]}
                                static={plasticDrift}
                                animated={plasticDrift}
                                link={"/gol"}
                            />

                            <ProjectCardTemplate
                                name={"Software Engineering Project"}
                                tools={[
                                    <SiJava key={1}/>,
                                    <SiSpringboot key={2}/>,
                                    <SiPostgresql key={4}/>,
                                    <SiIbm key={5}/>,
                                    <SiAmazonaws key={6}/>,
                                    <SiHeroku key={7}/>,
                                ]}
                                static={spe}
                                animated={spe}
                                link={"/gol"}
                            />
                            <ProjectCardTemplate
                                name={"Dungeon Crawler Game"}
                                tools={[
                                    <SiCplusplus key={1}/>,
                                    <SiOpengl key={2}/>,
                                ]}
                                static={dungeonCrawler}
                                animated={dungeonCrawler}
                                link={"/gol"}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </IconContext.Provider>
        </>
    );
}

export default ProjectsSection;