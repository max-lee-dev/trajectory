import React from 'react';

import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"
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
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent height={"80%"} minWidth={'1000px'}>
                <ModalHeader>Create an organization</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <VStack>
                        <Heading>Founder Dashboard</Heading>
                        <Box>
                            <Button>
                                new organization
                            </Button>
                        </Box>
                    </VStack>
                </ModalBody>
                <ModalFooter>

                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Create
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>

    )
}


