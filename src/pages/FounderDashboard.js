import React, {useEffect, useState} from 'react';

import {createNewOrganization} from "../components/createNewOrganization";
import OrganizationModal from "../components/OrganizationModal";


import {useDisclosure, Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"

function FounderDashboard({user}) {

    const role = user?.role;

    const {isOpen, onOpen, onClose} = useDisclosure();


    return (
        <Box bg={'transparent'} fontSize={'40px'}>
            <Center>
                <VStack>
                    <VStack>
                        <Heading>Founder Dashboard {role}</Heading>
                        <Box>
                            <Button onClick={onOpen}>
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

            <OrganizationModal user={user} isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
        </Box>
    );
}

export default FounderDashboard;