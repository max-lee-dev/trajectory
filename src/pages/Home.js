import React, {useEffect, useState} from 'react';
import {auth} from '../components/Firebase';
import Onboard from '../pages/Onboard.js';
import Card from './Card.js';
import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack, SimpleGrid} from "@chakra-ui/react";
import NewAccountForm from "./NewAccountForm.js";

function Home() {

    const [user, setUser, ] = useState(null);
    const [showGrid] = useState(false);
    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            setUser(userAuth);
        })
    }, [auth])

       const orgs = [
        {
            name: 'Omega Robotics',
            img: 'img\omega.png',
        },
        {
            name: 'cool org 2',
            img: 'img\omega.png',
        }  ,
        {
            name: 'cool org 3',
            img: 'img\omega.png',
        }  ,
        {
            name: 'cool org 4',
            img: 'img\omega.png',
        }  ,
        {
            name: 'cool org 5',
            img: 'img\omega.png',
        }  
    ]
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
                    <Center>
                        {/* <Button onClick={() => console.log(showGrid)}>
                            testing home page
                        </Button> */}
                            <Box>
                                <SimpleGrid  columns={5} spacing={'2em'}>
                                    {orgs.map(org=> <Card key={org.name} orgObj={org}/> )} 
                                </SimpleGrid>
                            </Box>
                            
                   </Center>
                    <Onboard/>

                </Box>
            )}


        </Box>


    );
}


export default Home;