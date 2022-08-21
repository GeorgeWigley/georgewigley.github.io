import React, {useEffect} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import ProjectCardTemplate from "./ProjectCardTemplate";
import gol_Static from "./gameOfLife/gol_Static.jpg";
import gol_Animated from "./gameOfLife/gol_Animated.gif";
import whiplash_Static from "./whiplash/whiplash_Static.gif";
import whiplash_Animated from "./whiplash/whiplash_Animated.gif";
import pdv_Static from "./playlistDataViewer/PDV_Static.jpg";
import scotlandYard_Static from "./scotlandYard/scotlandYard_Static.gif";
import scotlandYard_Animated from "./scotlandYard/scotlandYard_Animated.gif";

import {
    SiAdobephotoshop,
    SiAmazonaws,
    SiBlender, SiCplusplus,
    SiCsharp,
    SiExpress,
    SiGnubash,
    SiGo,
    SiGooglecloud,
    SiHeroku, SiIbm,
    SiIntellijidea,
    SiJava,
    SiJavascript,
    SiNodedotjs, SiOpengl, SiPostgresql,
    SiPycharm,
    SiPython,
    SiReact,
    SiSpotify,
    SiSpringboot,
    SiSpringsecurity,
    SiSteam,
    SiUnity,
    SiWikidata,
    SiWikipedia
} from "react-icons/si";
import {BiNetworkChart} from "react-icons/bi";

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
            <Grid container direction={`column`} justifyContent={`center`} alignItems={`flex-start`} width={`100%`}
                  height={`100%`}>
                <Grid item xs={12}>
                    <Grid container spacing={2} p={3} width={`100%`}>
                        <ProjectCardTemplate
                            name={"Parallel Game of Life"}
                            tools={[
                                <SiGo key={2} size={"3rem"}/>,
                                <SiAmazonaws key={1} size={"3rem"}/>,
                                <SiGnubash key={3} size={"3rem"}/>,
                                <SiIntellijidea key={4} size={"3rem"}/>
                            ]}
                            static={gol_Static}
                            animated={gol_Animated}
                        />
                        <ProjectCardTemplate
                            name={"Whiplash"}
                            tools={[
                                <SiUnity key={1} size={"3rem"}/>,
                                <SiCsharp key={2} size={"3rem"}/>,
                                <SiSteam key={3} size={"3rem"}/>,
                                <SiBlender key={4} size={"3rem"}/>,
                                <SiAdobephotoshop key={5} size={"3rem"}/>,
                            ]}
                            static={whiplash_Static}
                            animated={whiplash_Animated}
                        />
                        <ProjectCardTemplate
                            name={"Stats for Spotify Playlist"}
                            tools={[
                                <SiJavascript key={1} size={"3rem"}/>,
                                <SiReact key={2} size={"3rem"}/>,
                                <SiNodedotjs key={8} size={"3rem"}/>,
                                <SiExpress key={7} size={"3rem"}/>,
                                <SiHeroku key={6} size={"3rem"}/>,
                                <SiSpotify key={3} size={"3rem"}/>,
                                <SiWikidata key={4} size={"3rem"}/>,
                                <SiWikipedia key={5} size={"3rem"}/>,
                            ]}
                            static={pdv_Static}
                            animated={pdv_Static}
                        />
                        <ProjectCardTemplate
                            name={"Scotland Yard AI"}
                            tools={[
                                <SiJava key={1} size={"3rem"}/>,
                                <BiNetworkChart key={2} size={"3rem"}/>,
                                <SiIntellijidea key={3} size={"3rem"}/>
                            ]}
                            static={scotlandYard_Static}
                            animated={scotlandYard_Animated}
                        />
                        <ProjectCardTemplate
                            name={"Plastic Waste Drift in Oceans"}
                            tools={[
                                <SiPython key={1} size={"3rem"}/>,
                                <SiPycharm key={2} size={"3rem"}/>
                            ]}
                            static={gol_Static}
                            animated={gol_Animated}
                        />
                        <ProjectCardTemplate
                            name={"Spoons Stats"}
                            tools={[
                                <SiJavascript key={1} size={"3rem"}/>,
                                <SiReact key={2} size={"3rem"}/>,
                                <SiNodedotjs key={3} size={"3rem"}/>,
                                <SiExpress key={4} size={"3rem"}/>,
                                <SiHeroku key={5} size={"3rem"}/>,
                                <SiGooglecloud key={6} size={"3rem"}/>,
                                <SiHeroku key={7} size={"3rem"}/>,
                            ]}
                            static={gol_Static}
                            animated={gol_Animated}
                        />
                        <ProjectCardTemplate
                            name={"Software Engineering Project"}
                            tools={[
                                <SiJava key={1} size={"3rem"}/>,
                                <SiSpringboot key={2} size={"3rem"}/>,
                                <SiPostgresql key={4} size={"3rem"}/>,
                                <SiIbm key={5} size={"3rem"}/>,
                                <SiAmazonaws key={6} size={"3rem"}/>,
                                <SiHeroku key={7} size={"3rem"}/>,
                            ]}
                            static={gol_Static}
                            animated={gol_Animated}
                        />
                        <ProjectCardTemplate
                            name={"Dungeon Crawler Game"}
                            tools={[
                                <SiCplusplus key={1} size={"3rem"}/>,
                                <SiOpengl key={2} size={"3rem"}/>,
                            ]}
                            static={gol_Static}
                            animated={gol_Animated}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default ProjectsSection;