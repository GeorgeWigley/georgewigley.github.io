import React from 'react';
import ProjectPageTitle from "../ProjectPageComponents/ProjectPageTitle";
import {Stack} from "@mui/material";
import ProjectPageImageTextOne from "../ProjectPageComponents/ProjectPageImageTextOne";
import overview from "./overview.png";
import mrX from "./mrX.png";
import fw from "./floyd-warshall.png";
import minimax from "./minimax.png";

function ProjectPageScotlandYard(props) {
    return (
        <div>
            <ProjectPageTitle title={"Scotland Yard AI"} date={"February 2021 - June 2021"}/>
            <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} mt={5} width={"100%"} p={2}>
                <ProjectPageImageTextOne subTitle={"Project Overview"}
                                         subText={`This project was a 2 person university coursework comprised of 2 components, the first being to create a functional version
                                         of the Scotland Yard board game using various java design patterns. The second component was to create an AI to play against that
                                         was a strong as possible. The first component was relatively simple and mostly involved finishing a partially complete framework 
                                         provided for the coursework.`}
                                         image={overview}/>
                <ProjectPageImageTextOne subTitle={"The Game"}
                                         subText={`Scotland Yard is a relatively simple board game in which several players (the detectives) try to hunt down a single opposing player (mrX)
                                         who they can only see the location of on specific turns. For players to traverse the board (map of London) they must use single use
                                         tickets which each player is given a set amount of at the start of the game. We implemented the single opposing player as an AI agent who had
                                         limited time to make a move.`}
                                         image={mrX}/>
                <ProjectPageImageTextOne subTitle={"Floyd-Warshall Algorithm"}
                                         subText={`The board was represented as a undirected graph, where the edges had an associated cost in the form of tickets. Before beginning on
                                         out AI we tested and benchmarked various ways of calculating routes across the map and came across the Floyd-Warshall algorithm. The algorithm requires
                                         a matrix to be filled containing the routes between the nodes of the board, as the board is static we encoded this matrix to a file and just loaded the file
                                         when we started the game meaning the cost of finding the shortest path between any nodes was O(1)`}
                                         image={fw}/>
                <ProjectPageImageTextOne subTitle={"MiniMax Search with alpha beta pruning"}
                                         subText={`To create the actual AI we implemented minimax with alpha beta pruning and reached a sufficiently deep search depth so that without cheating, the AI
                                         was unbeatable by any humans we tested it on. We initially couldn't search far enough ahead to reach this threshold and so had to make several optimisations to
                                         our scoring function. In addition to utilising the Floyd-Warshall algorithm explained above.`}
                                         image={minimax}/>
            </Stack>
        </div>
    );
}

export default ProjectPageScotlandYard;