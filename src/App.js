import './input.css';
import {Analytics} from '@vercel/analytics/react';

import React, {useEffect, useState} from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Onboard from './pages/Onboard';
import LoginPage from './pages/LoginPage';
import DashboardHub from './pages/DashboardHub';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import {ChakraProvider} from "@chakra-ui/react"
import {extendTheme} from "@chakra-ui/react";
import {auth} from "./components/Firebase";
import {db} from "./components/Firebase";
import {collection, getDocs} from "firebase/firestore";

function App() {

    const [user, setUser,] = useState(null);


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

    const getCollection = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {

            if (doc.data().uid === auth?.currentUser?.uid) setUser(doc.data())
        });
    }
    useEffect(() => {

        getCollection();

    }, [auth]);
    return (

        <ChakraProvider theme={theme}>

            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path={"/dashboard"} element={<DashboardHub user={user}/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/onboard" element={<Onboard/>}/>
                </Routes>
            </Router>
            <Analytics/>
        </ChakraProvider>


    );
}

export default App;
