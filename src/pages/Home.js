import React from 'react';
import {auth} from '../components/Firebase';
import Onboard from '../pages/Onboard.js';

import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"

function Home() {
    return (
        <Box bg={'red'} fontSize={'40px'}>
            {auth?.currentUser ? (
                <Center>
                    <Heading>Home</Heading>
                </Center>
            ) : (
                <Onboard/>

            )}


        </Box>
    );

}

export default Home;