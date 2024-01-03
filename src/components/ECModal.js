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

import "@fontsource/poppins/800.css";
import "@fontsource/poppins/600.css";
import majorColors from './findECs/majorColors.json';


function ECModal({orgObj, isOpen, onClose}) {
    let color = majorColors.filter(function(x){return x.name == orgObj.major;})[0].color;
   let color2 = majorColors.filter(function(x){return x.name == orgObj.major;})[0].color2;
    let color3 = majorColors.filter(function(x){return x.name == orgObj.major;})[0].color3;
    return (
        <Modal isCentered size={["xs", "md", "md"]} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent css={{
                "-webkit-touch-callout": "none",
                "-webkit-user-select": "none",
                "-moz-user-select": "none",
                "-ms-user-select": "none"
            }}>
                <ModalHeader fontFamily={"Poppins"}>

                    <Text color={'#360503ff'} fontSize={'28px'} w={'95%'} fontWeight={'800'}>
                        {orgObj.name}
                    </Text>
                    <Text fontSize={'16px'} color={color3} fontWeight={'600'}>
                        {orgObj.major.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())}
                     </Text>
                    <HStack paddingTop={3} fontFamily={"Poppins"} fontWeight={600} fontSize={'8px'} color='white'
                            display={'flex'}
                            justifyContent={'space-between'}>
                        <Box display={'flex'} justifyContent={'center'}
                             bg={color2}
                             borderRadius={4}
                             h={'30px'}
                             color={ color3}
                             width={'100%'}>
                            <Center>
                                <Text>  {orgObj.size === '1' ? 'Small!' : orgObj.size === '2' ? 'Large!' : 'Super Large!'} </Text>
                            </Center>
                        </Box>
                        <Box display={'flex'} justifyContent={'center'}
                             bg={color2}
                             borderRadius={4}
                             h={'30px'}
                             color={color3}
                             width={'100%'}>
                            <Center>
                                <Text>
                                    {orgObj.impact === '1' ? 'Neutral!' : orgObj.impact === '2' ? 'Impactful!' : 'Super Impactful!'} 
                                </Text>

                            </Center>
                        </Box>
                        <Box display={'flex'} justifyContent={'center'}
                             color={color3}
                             bg={color2} borderRadius={4}
                             h={'30px'}
                             width={'100%'}>
                            <Center>
                                <Text>{orgObj.momentum === "1" ? 'Stable!' : orgObj.momentum === "2" ? 'Growing!' : 'Growing Fast!'}</Text>
                            </Center>
                        </Box>
                    </HStack>
                </ModalHeader>
                <ModalCloseButton/>
                <ModalBody>

                    <Text overflowY={'auto'} color={'#360503ff'} h={'200px'} mt={'-10px'}
                          fontSize={'12px'}>{orgObj.description}</Text>
                    <Center fontFamily={"Poppins"} padding={''}>
                        <Box display={'flex'} justifyContent={'center'} borderRadius='5px' width="100%" h='50px' mb={'20px'} mt={'10px'}
                             bg={color3} color={'white'}
                             mr={3} as='a'
                             href={orgObj.website}
                             target='_blank'
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