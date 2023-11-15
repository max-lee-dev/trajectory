import React from 'react';
import {auth, provider} from '../components/Firebase';

import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"
import {signInWithGoogle} from "../components/Firebase";

function OnboardFounder({setRole}) {


    return (
        <Box bg={'transparent'} fontSize={'40px'}>
            <Center>
                <Heading>Onboard Founder</Heading>
            </Center>

            <Button onClick={() => setRole("")}>
                Back
            </Button>

            <Box paddingTop={'500px'} display={'flex'} justifyContent={'space-evenly'}>
                <Button onClick={signInWithGoogle}>
                    signup {auth?.currentUser?.displayName}
                </Button>
            </Box>

        </Box>
    );
}

export default OnboardFounder;