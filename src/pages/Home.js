import React, {useEffect, useState} from 'react';
import {auth, db} from '../components/Firebase';
import {collection, getDocs} from "firebase/firestore";
import Onboard from '../pages/Onboard.js';
import {
    useDisclosure,
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
    SimpleGrid,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs
} from "@chakra-ui/react";
import NewAccountForm from "./NewAccountForm.js";

import {Card, CardGrid} from '../components/Card.js';
import { Renderer, RenderGridStep } from '../components/Renderer.js';
import banner from '../assets/img/trajectoryBanner.png'

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
                                    <Heading> Trajectory </Heading>
                                </Center>
                                {!auth?.currentUser?.displayName ? (
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
                                                    fontSize={'24px'}>{auth?.currentUser?.displayName} {user?.lastName}</Heading>
                                                <Button onClick={() => window.location.href = '/dashboard'}>
                                                    Dashboard
                                                </Button>
                                                <Button onClick={() => auth.signOut()}>
                                                    Sign Out
                                                </Button>
                                            </Center>
                                        </Box>
                                    )
                                }
                            </Box>
                        </Box>

                        
                        <Box height={'30vh'} w={'30vw'}> {/*header*/}
                           <Image src={banner} boxSize={'auto'}/>
                        </Box>

                        <Renderer/>
                    </VStack>

                </Center>
            </Box>
        </Box>


    );
}



export default Home;