import React, {useEffect} from 'react';
import {Box, Divider, Grid, Tooltip, Typography} from "@mui/material";
import ProjectCardTemplate from "./ProjectCardTemplate";
import cg_static from "./computerGraphics/cg.png";
import cg_animated from "./computerGraphics/cg_animated.gif";
import games_project from "./gamesProject/gamesproject.png";
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
    SiAdobephotoshop,
    SiAmazonaws,
    SiBlender,
    SiCplusplus,
    SiCsharp,
    SiExpress,
    SiGnubash,
    SiGo,
    SiGooglecloud,
    SiHeroku,
    SiIbm,
    SiIntellijidea,
    SiJava,
    SiJavascript,
    SiNodedotjs,
    SiOpencv,
    SiOpengl,
    SiPostgresql,
    SiPycharm,
    SiPython,
    SiReact,
    SiSpotify,
    SiSpringboot,
    SiSteam,
    SiUnity,
    SiValve,
    SiVirtualbox,
    SiWikidata,
    SiWikipedia
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
                                My Personal Projects:
                            </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container p={3} pt={2} width={`100%`} spacing={2}>
                            <ProjectCardTemplate
                                name={"Games Project"}
                                tools={[
                                    <SiUnity key={2}/>,
                                    <SiBlender key={1}/>,
                                    <SiCsharp key={3}/>,
                                    <SiPython key={4}/>,
                                ]}
                                static={games_project}
                                animated={games_project}
                                link={"/gol"}
                            />
                            <ProjectCardTemplate
                                name={"Computer Graphics"}
                                tools={[
                                    <SiCplusplus key={2}/>
                                ]}
                                static={cg_static}
                                animated={cg_animated}
                                link={"/gol"}
                            />
                            <ProjectCardTemplate
                                name={"Image Processing and Computer Vision"}
                                tools={[
                                    <SiPython key={2}/>,
                                    <SiOpencv key={1}/>,
                                    <SiOpengl key={3}/>
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
                                link={"/statsForPlaylist"}
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
                                link={"/scotlandYard"}
                            />
                            <ProjectCardTemplate
                                name={"Plastic Waste Drift in Oceans"}
                                tools={[
                                    <SiPython key={1}/>,
                                    <SiPycharm key={2}/>
                                ]}
                                static={plasticDrift}
                                animated={plasticDrift}
                                link={"/plasticDrift"}
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
                                link={"/SPE"}
                            />
                            <ProjectCardTemplate
                                name={"Dungeon Crawler Game"}
                                tools={[
                                    <SiCplusplus key={1}/>,
                                    <SiOpengl key={2}/>,
                                ]}
                                static={dungeonCrawler}
                                animated={dungeonCrawler}
                                link={"/dungeonCrawler"}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </IconContext.Provider>
        </>
    );
}

export default ProjectsSection;