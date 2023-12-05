import React, {useEffect, useState} from 'react';

import {db} from "../components/Firebase";

import {collection, getDocs} from "firebase/firestore";


import {createNewOrganization} from "../components/createNewOrganization";
import OrganizationModal from "../components/OrganizationModal";


import {useDisclosure, Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"

function FounderDashboard({user}) {
    const [myOrganizations, setMyOrganizations] = useState([])

    const role = user?.role;

    const {isOpen, onOpen, onClose} = useDisclosure();

    useEffect(() => {
        const temp = [];

        const getMyOrganizations = async () => {
            const querySnapshot = await getDocs(collection(db, "organizations"));
            querySnapshot.forEach((doc) => {
                if (doc.data().founder === user?.uid) {
                    temp.push(doc.data())
                }
            });
            setMyOrganizations(temp)
        }
        getMyOrganizations();
    })


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
                            your organizations:

                            {myOrganizations.map((organization) => (
                                <Box bg={'brown'} marginTop={'20px'}>
                                    <Text>
                                        {organization.name}
                                    </Text>
                                    <Text>
                                        {organization.description}
                                    </Text>
                                    <Text>
                                        {organization.website}
                                    </Text>
                                    <Text>
                                        {organization.image}
                                    </Text>


                                </Box>
                            ))}

                        </Text>
                    </Box>
                </VStack>
            </Center>

            <OrganizationModal user={user} isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
        </Box>
    );
}

export default FounderDashboard;