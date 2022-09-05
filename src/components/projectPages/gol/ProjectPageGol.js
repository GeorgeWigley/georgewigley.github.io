import React from 'react';
import ProjectPageTemplate from "../ProjectPageTemplate";
import gol_static from "./gol.jpg"
import graph from "./graph.png"
import diagram from "./diagram.png"

function ProjectPageGol(props) {
    return (
        <div>
            <ProjectPageTemplate
                title={"Parallel Game of Life"}
                subTitleOne={"Project Overview"}
                subTextOne={`This project involved first developing a game of life simulator in the Go programming language and then,
                 optimising and benchmarking it to extract performance improvements. This was a 2 person team project and apart of a university course.
                 The project was split into two parts: a locally running parallel implementation and a distributed version running on any number of AWS
                 EC2 instances to solve far larger grids.
                `}
                imageOne={gol_static}
                subTitleTwo={"Local Parallel"}
                subTextTwo={`This first part of the project involved locally running the simulation on several threads with intercommunication to improve 
                processing speeds. The first step we took was to split the board into several chunks which then got sent to a separate thread for processing
                They would then solve each chunk for one turn and send the result back to the main thread for compilation and rendering of the final result.
                In this stage we focused on reducing the amount of data that required transferring between the threads. To do this we began sending only the absolute
                minimum data required for a solution and modified our algorithm to accomodate this change.
                The results of this can be seen in the graph.`}
                imageTwo={graph}
                subTitleThree={"AWS EC2 implementation"}
                subTextThree={`This final component of the project involved designing a system that allowed several EC2 nodes to connect to our local process and
                solve very large boards (5120x5120) for thousands of turns very rapidly. This involved creating a broker system as a layer of abstraction between the
                locally running code and the remote code. This system utilised Remote Procedure Calls (RPC) for communication. The broker was orchestrated in such a way
                that any number of EC2 nodes could be utilised and they could disconnect without causing issues to the local process. This system also required the most
                in depth benchmarking as beyond a point we began to see diminishing returns on the quantity of worker nodes. We performed variance analysis across several
                benchmarks to find any discrepancies and concluded that for even our largest test case, beyond a point the cost of data transfer outweighed the
                benefit of additional workers`}
                imageThree={diagram}
            />
        </div>
    );
}

export default ProjectPageGol;