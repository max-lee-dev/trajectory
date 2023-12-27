import React, {useEffect, useState} from 'react';
import {
    useDisclosure,
    Box,
    Button,
    Center,
    Container,
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


export function Footer(){
    return(
        <Container as='footer' >
            <Center m={'40px'} fontSize={'16px'}>
                <VStack>
                <Box> 
                    <Link href="https://discord.com" as='span' target='_blank' isExternal>
                        more resources
                    </Link>
                    <Box as='span'> - </Box>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeOt16-fpwrz3BQPHqEzP0sgxNzwSuH2n9AMZOdmYHhLu6xwg/viewform?usp=sf_link" as='span' target='_blank' isExternal>
                        feedback
                    </Link>
                </Box> 
                <Box> Made with ❤️ by Trajectory</Box>
            </VStack>
            </Center>
        </Container>
    );
}

export default Footer;