import React, {useEffect, useState} from 'react';

import FindECsLanding from '../components/findECs/findECsLanding.js';
import Footer from './Footer.js';
import {AnimatePresence} from 'framer-motion';

import {
    Container,
    Grid,
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Spacer,
    Text,
    SimpleGrid,
    Stack,
    HStack,
    VStack,
    Badge,
    LinkBox,

    LinkOverlay,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,
    Divide,
    useDisclosure
} from "@chakra-ui/react"
import {Renderer, RenderGridStep} from '../components/Renderer.js';
import banner from '../assets/img/trajectoryBanner.png'

function Home() {


    const [showIntro, setShowIntro] = useState(true);
    // this is new branch only
    return (
        <Box fontSize={'40px'}>
           {/* https://www.chess.com/article/view/chesscom-update-january-2024  */}
        </Box>
    );
}

export default Home;