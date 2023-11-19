import React from 'react';
import {auth} from '../components/Firebase';
import Onboard from '../pages/Onboard.js';
import Card from './Card.js';
import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react";

function Home() {
   const org ={
        img: 'img\omega.png',
        name: 'Omega Robotics'
    }  


    return (
        <Box bg={'transparent'} fontSize={'40px'}>
            {auth?.currentUser ? (
                <Center>
                    <Heading>Home</Heading>
                </Center>
            ) : (

                
                <Card img={org.img}  name={org.name} />

            )}


        </Box>
    );
}

export default Home;