import React, {useEffect, useState} from 'react';
import {auth} from '../components/Firebase';
import Onboard from '../pages/Onboard.js';
import {Card, CardRow} from './Card.js';
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


    return (
        <Box bg={'transparent'} fontSize={'40px'}>


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
                            <Box paddingTop={10} width={'100%'} display={'flex'} justifyContent={'space-between'}>
                                <Center>
                                    <Heading> Trajectory</Heading>
                                </Center>
                                {!auth?.currentUser.displayName ? (
                                        <Box>
                                            <Button onClick={() => window.location.href = '/login'}>
                                                Sign In
                                            </Button>
                                            <Button onClick={() => window.location.href = '/onboard'}>
                                                Sign Up
                                            </Button>
                                        </Box>
                                    )
                                    : (
                                        <Box>
                                            <Center>
                                                <Heading
                                                    fontSize={'24px'}>{auth.currentUser.displayName} {user?.lastName}</Heading>
                                                <Button onClick={() => auth.signOut()}>
                                                    Dashboard
                                                </Button>
                                            </Center>
                                        </Box>
                                    )
                                }


                            </Box>


                        </Box>

                        <CardRow/>
                    </VStack>

                </Center>


            </Box>


        </Box>


    );
}


export default Home;