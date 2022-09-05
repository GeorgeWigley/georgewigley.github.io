import './App.css';
import Homepage from "./components/homepage/Homepage";
import {createTheme, CssBaseline, responsiveFontSizes} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import React from "react";
import {
    HashRouter,
    Route,
    Routes
} from "react-router-dom";
import ProjectPageGol from "./components/projectPages/gol/ProjectPageGol";
import ProjectPageWhiplash from "./components/projectPages/whiplash/ProjectPageWhiplash";

let themeDark = createTheme({
    typography: {
        fontFamily: "'Montserrat', sans-serif"
    },
    palette: {
        primary: {
            main: "#101010"
        },
        background: {
            default: "#141414"
        },
        text: {
            primary: "#ffffff"
        },
    }
});

themeDark = responsiveFontSizes(themeDark);

function App() {
    return (
        <div className="App">

        <style>
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
            </style>
            <ThemeProvider theme={themeDark}>
                <CssBaseline/>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<Homepage/>} />
                        <Route path="/gol" element={<ProjectPageGol/>} />
                        <Route path="/whiplash" element={<ProjectPageWhiplash/>} />
                    </Routes>
                </HashRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
