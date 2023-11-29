import './input.css';
import React from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Onboard from './pages/Onboard';
import LoginPage from './pages/LoginPage';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import {ChakraProvider} from "@chakra-ui/react"
import {extendTheme} from "@chakra-ui/react";

function App() {


    const theme = extendTheme({
        lightBlue: {
            100: "#ABD3FF",
        },
        skyBlue: {
            100: "#44A1FF",
        },
        oceanBlue: {
            100: "#0153C8"
        },
        lightOceanBlue: {
            100: "#1D71DC"
        }


    });

    return (

        <ChakraProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/abouta" element={<About/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/onboard" element={<Onboard/>}/>
                </Routes>
            </Router>
        </ChakraProvider>

    );
}

export default App;
