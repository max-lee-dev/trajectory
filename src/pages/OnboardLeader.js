import React from 'react';
import {auth} from '../components/Firebase';

import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"

function OnboardLeader() {
    return (
        <Box bg={'red'} fontSize={'40px'}>
            <Center>
                <Heading>Onboard Leader</Heading>
            </Center>

        </Box>
    );
}

export default OnboardLeader;