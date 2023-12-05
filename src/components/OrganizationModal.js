import React, {useEffect, useState} from 'react';

import {createNewOrganization} from "../components/createNewOrganization";

import {Box, Button, Center, Flex, Heading, Image, Input, Link, Spacer, Text, VStack} from "@chakra-ui/react"
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure

} from "@chakra-ui/react"

export default function OrganizationModal({user, organization, isOpen, onOpen, onClose}) {

    const [organizationDetails, setOrganizationDetails] = useState({})

    function createNew() {
        createNewOrganization(organizationDetails, user).then(() => {
            onClose()
        });

    }


    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent height={"80%"} minWidth={'1000px'}>
                <ModalHeader>Create an organization</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <VStack>
                        <Input placeholder="organization name" onChange={(e) => setOrganizationDetails({
                            ...organizationDetails,
                            name: e.target.value
                        })}/>

                        }
                        <Box>
                            <Input placeholder="organization description" onChange={(e) => setOrganizationDetails({
                                ...organizationDetails,
                                description: e.target.value
                            })}/>

                            <Input placeholder={"organization image"} onChange={(e) => setOrganizationDetails({
                                ...organizationDetails,
                                image: e.target.value
                            })}/>

                            <Input placeholder={"organization website"} onChange={(e) => setOrganizationDetails({
                                ...organizationDetails,
                                website: e.target.value
                            })}/>



                        </Box>
                    </VStack>
                </ModalBody>
                <ModalFooter>

                    <Button colorScheme="blue" mr={3} onClick={() => createNew()}>
                        Create
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>

    )
}


