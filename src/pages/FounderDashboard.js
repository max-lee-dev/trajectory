import React, {useEffect, useState} from 'react';


import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"

function FounderDashboard({user}) {

    const role = user?.role;


    return (
        <Box bg={'transparent'} fontSize={'40px'}>
            <Center>
                <VStack>
                    <VStack>
                        <Heading>Founder Dashboard {role}</Heading>
                        <Box>
                            <Button>
                                new organization
                            </Button>
                        </Box>
                    </VStack>
                    <Box>
                        <Text>
                            your organizations
                        </Text>
                    </Box>
                </VStack>
            </Center>


        </Box>
    );
}

export default FounderDashboard;