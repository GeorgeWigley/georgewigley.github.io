import React from 'react';
import ProjectPageTitle from "../ProjectPageComponents/ProjectPageTitle";
import {Stack} from "@mui/material";
import ProjectPageImageTextOne from "../ProjectPageComponents/ProjectPageImageTextOne";
import overview from "./overview.png";
import share from "./share.png";
import homepage from "./homepage.png";
import map from "./map.png";

function ProjectPageSpoonsStats(props) {
    return (
        <div>
            <ProjectPageTitle title={"Spoons Stats"} hasDemo={true} demoLink={"https://spoons-stats.herokuapp.com/"}/>
            <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} mt={5} width={"100%"} p={2}>
                <ProjectPageImageTextOne subTitle={"Project Overview"}
                                         subText={`This project is a stat tracker for Wetherspoons, a chain of pubs in the UK. The project compiles all the users
                                         orders and displays interesting statistics and facts in a social media friendly shareable format. Some of the stats include
                                         a map showing your most common pubs, the total amount of money that has been spent at Wetherspoons and your favourite drinks`}
                                         image={overview}/>
                <ProjectPageImageTextOne subTitle={"Share Page"}
                                         subText={`One of the most important elements of this project was the shareable nature of the data. To do this I implemented a share 
                                         section that allows a user to generate a summary of their stats over a specific time range and share it to their social media stories.
                                         This share screen can be seen on the right and uses a SVG template with placeholder values. It is then rendered to the screen client side
                                         with the users data as a shareable image. This approach removed the need for a backend API to generate the images greatly reducing server
                                         costs.`}
                                         image={share}/>
                <ProjectPageImageTextOne subTitle={"Issues and Lessons Learned"}
                                         subText={`This project posed several challenges, the most prominent of which was the acquisition of user data. The way I was able to 
                                         generate these stats was using email receipts that were sent to the user after every order. They came in a standard html email and so I
                                         wrote a simple HTML parser to extract the relevant data. The problem with this method is that our current implementation utilizes the Gmail
                                         API to retrieve any emails sent from the Wetherspoons receipt email address. Due to the nature of this data, it is a highly sensitive API scope
                                         and so to allow the public to use this scope Google requires a full security invoice of your company. This was unfeasable for a hobby project and
                                         so currently it serves as a proof of concept.`
                                         }
                                         image={homepage}/>
                <ProjectPageImageTextOne subTitle={"Future Plans"}
                                         subText={`In the future I intend to code a mail server or pay for an API that allows me to provide users a temporary email to forward their receipts to, this
                                         data could then be processed on the backend server and returned to the relevant user for rendering on the frontend.`}
                                         image={map}/>
            </Stack>
        </div>
    );
}

export default ProjectPageSpoonsStats;