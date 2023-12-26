import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Box,
    VStack,
    HStack,
    Center,
    useDisclosure
} from "@chakra-ui/react"

function ECModal({orgObj, isOpen, onClose}) {
    return (
        <Modal isCentered size={["xs", "md", "md"]} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader fontFamily={"Poppins"}>

                    <Text fontSize={'28px'} w={'95%'}>
                        {orgObj.name}
                    </Text>
                    <Text fontSize={'16px'} color={'gray'}>
                        {orgObj.major}
                    </Text>
                    <HStack paddingTop={3} fontFamily={"Poppins"} fontWeight={600} fontSize={'10px'} color='white'
                            display={'flex'}
                            justifyContent={'space-between'}>
                        <Box display={'flex'} justifyContent={'center'} bg={orgObj.size === "3" ? "black" : "#D9D9D9"}
                             borderRadius={4}
                             h={'30px'}
                             color={orgObj.size === "3" ? "white" : "black"}
                             width={'100%'}>
                            <Center>
                                <Text>  {orgObj.size === '1' ? 'Low ' : orgObj.size === '2' ? 'Medium ' : 'Large '} Size</Text>
                            </Center>
                        </Box>
                        <Box display={'flex'} justifyContent={'center'} bg={orgObj.impact === "3" ? "black" : "#D9D9D9"}
                             borderRadius={4}
                             h={'30px'}
                             color={orgObj.impact === "3" ? "white" : "black"}
                             width={'100%'}>
                            <Center>
                                <Text>
                                    {orgObj.impact === '1' ? 'Low ' : orgObj.impact === '2' ? 'Medium ' : 'High '} Impact
                                </Text>

                            </Center>
                        </Box>
                        <Box display={'flex'} justifyContent={'center'}
                             color={orgObj.momentum === "3" ? "white" : "black"}
                             bg={orgObj.momentum === "3" ? "black" : "#D9D9D9"} borderRadius={4}
                             h={'30px'}
                             width={'100%'}>
                            <Center>
                                <Text>{orgObj.momentum === "1" ? 'Low ' : orgObj.momentum === "2" ? 'Medium ' : 'High '}Growth</Text>
                            </Center>
                        </Box>
                    </HStack>
                </ModalHeader>
                <ModalCloseButton/>
                <ModalBody>


                    <Text overflowY={'auto'} h={'200px'} fontSize={'16px'}>{orgObj.description}</Text>

                    <Center fontFamily={"Poppins"} padding={5}>
                        <Box display={'flex'} justifyContent={'center'} borderRadius='5px' minWidth="100%" h='40px'
                             bg={'black'} color={'white'}
                             mr={3} as='a'
                             href={orgObj.website}
                             fontSize={'16px'}>

                            <Center fontWeight={500} textAlign={'center'}>
                                Website
                            </Center>
                        </Box>
                    </Center>
                </ModalBody>

            </ModalContent>
        </Modal>
    )
}

export default ECModal