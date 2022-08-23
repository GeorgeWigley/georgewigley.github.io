import React from 'react';
import ProjectPageTemplate from "../ProjectPageTemplate";

function ProjectPageWhiplash(props) {
    return (
        <div>
            <ProjectPageTemplate
                title={"Whiplash"}
                subTitleOne={"Project Overview"}
                subTextOne={"Whiplash is a 3D speed running and platforming video game developed in Unity with heavy usage of C#. I was the sole developer on the project and took a lead in graphics and art as well.\n" +
                "The overall aim of the project was to create a multiplayer speed running experience in the style of cartoons and comic books.\n" +
                "Each player has several movement mechanics implemented in a custom built player controller."}
                imageOne={"https://uploads-ssl.webflow.com/6276e220d63779e8e492d663/627ac79c75574e3f76f14de4_swing-p-1080.jpeg"}
                subTitleTwo={"Multiplayer"}
                subTextTwo={"Whiplash is also multiplayer using a custom coded client server architecture. This was handled in C# using for low level sending of packets.\n" +
                "The system has one user host a lobby and then allow all other users to connect to the lobby.\n" +
                "This posed a variety of new and challenging problems that I was able to overcome."}
                imageTwo={"https://uploads-ssl.webflow.com/6276e220d63779e8e492d663/627ac69a8a95ea6b0aa98f83_mp-p-1080.png"}
                subTitleThree={"Timer"}
                subTextThree={"Each level has a timer and leader board associated with it that allows you to compare your scores to your friends and the world.\n" +
                "This encouraged people to replay levels and master the movement mechanics like swinging (right), wall running and double jumping."}
                imageThree={"https://uploads-ssl.webflow.com/6276e220d63779e8e492d663/627ac79c75574e3f76f14de4_swing-p-1080.jpeg"}
            />
        </div>
    );
}

export default ProjectPageWhiplash;