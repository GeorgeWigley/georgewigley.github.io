import React from 'react';
import ProjectPageTitle from "../ProjectPageComponents/ProjectPageTitle";
import {Stack} from "@mui/material";
import ProjectPageImageTextOne from "../ProjectPageComponents/ProjectPageImageTextOne";
import colours from "./colours.png";
import genres from "./genres.png";
import homepage from "./homepage.png";
import map from "./map.png";

function ProjectPageStatsForPlaylist(props) {
    return (
        <div>
            <ProjectPageTitle title={"Stats for Spotify Playlist"} demoLink={"https://playlist-vis.herokuapp.com/"}/>
            <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} mt={5} width={"100%"} p={2}>
                <ProjectPageImageTextOne subTitle={"Project Overview"}
                                         subText={`This project is a social media story of stats about a given spotify playlist. It is heavily inspired
                                         by Spotify wrapped but works on a individual playlist instead of your entire account. It does this using the 
                                         Spotify API to access user data. It then renders a slideshow of stats which the user can move through. The images on
                                         this page are taken from the Billions club playlist which has every song with over a billion streams`}
                                         image={homepage}/>
                <ProjectPageImageTextOne subTitle={"Locations"}
                                         subText={`An interesting feature of this project is that it can map the birth/formation locations of every artist/band in the playlist. This
                                         data is not readily available and so after alot of research decided to write a SparQL function to query Wikidata (Wikipedia) for the artist and
                                         extract their birth/formation location. This was very challenging due to the large amounts of data available and duplicate irrelevant entries. Ultimately
                                         my query gets every wikipedia entry that matches the name and has a relation to music in some form or another. This solution worked correctly over 95% of 
                                         the time in my test cases but still caused some issues on artists with simpler names for example Dave the UK rapper where several other artists had the same name.`
                                         }
                                         image={map}/>
                <ProjectPageImageTextOne subTitle={"Colors"}
                                         subText={`For the final slide I decided to generate a color palette based on the main color of each song. To extract the colour I used a react wrapper of the android
                                         library designed to extract palettes. The major issue I encountered was sorting the colours into a visually appealing order. I discovered, fundamentally colour is a 3D
                                         data type and so could not be objectively sorted using typical methods. This lead to lots of experimentation on ratios of RGB and HSV values to pass to my sorting function,
                                         but eventually I was able to get a rather visually appealing sort.`}
                                         image={colours}/>

                <ProjectPageImageTextOne subTitle={"Genres"}
                                         subText={`One of the unique parts of the project was rendering the playlists genres as a wordcloud. This provided a visually interesting way to see which genres
                                         were most prevalent in a playlist.`}
                                         image={genres}/>
            </Stack>
        </div>
    );
}

export default ProjectPageStatsForPlaylist;