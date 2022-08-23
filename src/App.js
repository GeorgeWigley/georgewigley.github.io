import './App.css';
import Homepage from "./components/homepage/Homepage";
import {createTheme, CssBaseline, responsiveFontSizes} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import React from "react";

const font = "'Montserrat', sans-serif"
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
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
            </style>
            <ThemeProvider theme={themeDark}>
                <CssBaseline/>
                <div className="App">
                    <Homepage/>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
