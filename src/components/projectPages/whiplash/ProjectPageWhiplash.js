import React from 'react';
import ProjectPageTitle from "../ProjectPageComponents/ProjectPageTitle";
import {Stack} from "@mui/material";
import ProjectPageImageTextOne from "../ProjectPageComponents/ProjectPageImageTextOne";
import ProjectPageBackButton from "../ProjectPageComponents/ProjectPageBackButton";

function ProjectPageWhiplash(props) {
    return (
        <div>
            <ProjectPageTitle title={"Whiplash"} date={"March 2020 - October 2020"}/>
            <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} mt={5} width={"100%"} p={2}>
                <ProjectPageImageTextOne subTitle={"Project Overview"}
                                         subText={"Whiplash is a 3D speed running and platforming video game developed in Unity with heavy usage of C#. I was the sole developer on the project and took a lead in graphics and art as well.\n" +
                                         "The overall aim of the project was to create a multiplayer speed running experience in the style of cartoons and comic books.\n" +
                                         "Each player has several movement mechanics implemented in a custom built player controller."}
                                         image={"https://uploads-ssl.webflow.com/6276e220d63779e8e492d663/627ac79c75574e3f76f14de4_swing-p-1080.jpeg"}/>
                <ProjectPageImageTextOne subTitle={"Multiplayer"}
                                         subText={"Whiplash is also multiplayer using a custom client server architecture built on top of the Steamworks p2p library. This was handled in C# using for low level sending of packets.\n" +
                                         "The system has one user host a lobby and then allow all other users to connect to the lobby.\n" +
                                         "This posed a variety of new and challenging problems that I was able to overcome."}
                                         image={"https://uploads-ssl.webflow.com/6276e220d63779e8e492d663/627ac69a8a95ea6b0aa98f83_mp-p-1080.png"}/>
                <ProjectPageImageTextOne subTitle={"Timer"}
                                         subText={"Each level has a timer and leader board associated with it that allows you to compare your scores to your friends and the world.\n" +
                                         "This encouraged people to replay levels and master the movement mechanics like swinging (right), wall running and double jumping."}
                                         image={"https://uploads-ssl.webflow.com/6276e220d63779e8e492d663/627ac79c75574e3f76f14de4_swing-p-1080.jpeg"}/>
            </Stack>
        </div>
    );
}

export default ProjectPageWhiplash;