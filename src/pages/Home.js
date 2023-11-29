import React, {useEffect, useState} from 'react';
import {auth} from '../components/Firebase';
import Onboard from '../pages/Onboard.js';
import Card from './Card.js';
import {
    Box,
    Button,
    Center,
    Flex,
    HStack,
    Heading,
    Image,
    Link,
    Spacer,
    Text,
    VStack,
    SimpleGrid
} from "@chakra-ui/react";
import NewAccountForm from "./NewAccountForm.js";

function Home() {

    const [user, setUser,] = useState(null);
    const [showGrid] = useState(false);
    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            setUser(userAuth);
        })
    }, [auth])

    auth.onAuthStateChanged(userAuth => {
        setUser(userAuth);
    })


    const orgs = [
        {
            name: 'Omega Robotics',
            img: 'img\omega.png',
        },
        {
            name: 'cool org 2',
            img: 'img\omega.png',
        },
        {
            name: 'cool org 3',
            img: 'img\omega.png',
        },
        {
            name: 'cool org 4',
            img: 'img\omega.png',
        },
        {
            name: 'cool org 5',
            img: 'img\omega.png',
        }
    ]
    return (
        <Box bg={'transparent'} fontSize={'40px'}>
            {auth.currentUser?.displayName && (
                <Center>
                    <Heading>Signed in as: {auth.currentUser.displayName} {user?.lastName}</Heading>
                    <Button onClick={() => auth.signOut()}>
                        Sign Out
                    </Button>
                </Center>
            )}

            {auth?.currentUser && !auth.currentUser.displayName && (
                <Box paddingTop={'100px'} display={'flex'} justifyContent={'space-evenly'}>
                    <NewAccountForm/>
                </Box>
            )}

            <Box>
                <Center>
                    {/* <Button onClick={() => console.log(showGrid)}>
                            testing home page
                        </Button> */}
                    <VStack>
                        <Box width={'100%'} display={'flex'}>
                            <Box width={'100%'}>
                                <Center>
                                    <Heading padding={10}>Home</Heading>
                                </Center>
                                <Button onClick={() => window.location.href = '/login'}>
                                    Sign In
                                </Button>
                                <Button onClick={() => window.location.href = '/onboard'}>
                                    Sign Up
                                </Button>


                            </Box>


                        </Box>

                        <Box>
                            <SimpleGrid columns={5} spacing={'2em'}>
                                {orgs.map(org => <Card key={org.name} orgObj={org}/>)}
                            </SimpleGrid>
                        </Box>
                    </VStack>

                </Center>


            </Box>


        </Box>


    );
}


export default Home;