import React, {useEffect, useState} from 'react';

import FindECsLanding from '../components/findECs/findECsLanding.js';
import Footer from '../components/footer.js';

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

import {Card, CardGrid} from '../components/Card.js';
import {Renderer, RenderGridStep} from '../components/Renderer.js';
import banner from '../assets/img/trajectoryBanner.png'

function Home() {


    const [showIntro, setShowIntro] = useState(true);


    return (
        <Box fontSize={'40px'}>

            <Box w={'120vw'} h={'120vh'} bgGradient={'linear(to-b, #94c8ffff, #FFFFFFFF ,#fabaa5ff)'} pos={'fixed'}
                 zIndex={'-1'}></Box>


            {showIntro ? <FindECsLanding setShowIntro={setShowIntro}/> : <Renderer columns={1}/>}


            {/* <Footer/> */}
        </Box>

    );
}


export default Home;