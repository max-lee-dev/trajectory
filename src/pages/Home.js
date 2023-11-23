import React, {useEffect, useState} from 'react';
import {auth} from '../components/Firebase';
import Onboard from '../pages/Onboard.js';

import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"

function Home() {

    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            setUser(userAuth);
        })
    }, [auth])
    return (
        <Box bg={'transparent'} fontSize={'40px'}>
            {user ? (
                <Center>
                    <Heading>Home</Heading>
                    <Button onClick={() => auth.signOut()}>
                        Sign Out
                    </Button>
                </Center>
            ) : (
                <Box>
                    <Onboard/>

                </Box>

            )}


        </Box>
    );
}

export default Home;