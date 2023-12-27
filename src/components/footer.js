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
                    <Button as='a' href='https://discord.gg/trajectory' isExternal target='_blank' bg='#778cd9ff'>
                        more resources
                    </Button>                        
                    <Button as='a' href='https://docs.google.com/forms/d/e/1FAIpQLSeOt16-fpwrz3BQPHqEzP0sgxNzwSuH2n9AMZOdmYHhLu6xwg/viewform?usp=sf_link' isExternal target='_blank' bg='#7249baff'>
                        feedback
                    </Button>
                </Box> 
                <Box> Made with ❤️ by Trajectory</Box>
            </VStack>
            </Center>
        </Container>
    );
}

export default Footer;