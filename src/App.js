import './input.css';
import React from 'react';

import Home from './pages/Home';
import About from './pages/About';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import {ChakraProvider} from "@chakra-ui/react"

function App() {
    return (

        <ChakraProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/abouta" element={<About/>}/>
                </Routes>
            </Router>
        </ChakraProvider>

    );
}

export default App;
