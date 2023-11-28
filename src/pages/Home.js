import React, {useEffect, useState} from 'react';
import {auth} from '../components/Firebase';
import Onboard from '../pages/Onboard.js';
import Card from './Card.js';
import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react";
import NewAccountForm from "./NewAccountForm.js";

function Home() {

    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            setUser(userAuth);
        })
    }, [auth])
    return (
        <Box bg={'transparent'} fontSize={'40px'}>
            {auth.currentUser?.displayName && (
                <Center>
                    <Heading>Home</Heading>
                    <Button onClick={() => auth.signOut()}>
                        Sign Out
                    </Button>
                </Center>
            )}

            {auth?.currentUser && (
                <Box paddingTop={'100px'} display={'flex'} justifyContent={'space-evenly'}>

                    <NewAccountForm/>
                </Box>
            )}

            {!auth?.currentUser && (
                <Box>
                    <Onboard/>

                </Box>
            )}


        </Box>


    );
}


export default Home;