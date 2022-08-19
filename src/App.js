import logo from './logo.svg';
import './App.css';
import Homepage from "./components/homepage/Homepage";
import {createTheme, CssBaseline} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import OverviewSection from "./components/homepage/sections/OverviewSection";
import React from "react";

const font = "'Montserrat', sans-serif"
const themeDark = createTheme({
    palette: {
        background: {
            default: "#141414"
        },
        text: {
            primary: "#ffffff"
        },
        typography: {
            fontFamily: "'Montserrat', sans-serif"
        }
    }
});

function App() {
    return (
        <>
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
