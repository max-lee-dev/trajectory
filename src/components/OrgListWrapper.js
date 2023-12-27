import React from 'react';

import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack, Divider, Select} from "@chakra-ui/react"
import { Renderer } from './Renderer';
import banner from '../assets/img/trajectoryBanner.png';

function OrgListWrapper() {

    return (

        <Box width='100%' h={'100%'} bg={'transparent'} fontFamily={"Poppins"}>
            <Box w={'100vw'} h={'100vh'} bgGradient={'linear(to-b, #d6edffff, #ffdcd1ff)'} pos={'fixed'} zIndex={'-1'}></Box>
            <Center>
                <Box width={'70%'} paddingTop={'5%'}>
                    <Center>
                        <VStack>
                            {/* <Box> */}
                                <Box textAlign={'left'} fontSize='24px' fontWeight={500} color={'#000000ff'} pr={'8px'} pl={'8px'} bg={'transparent'}>
                                    <Text  fontFamily={"Poppins"} fontSize={'3em'} zIndex={'2'} >FindECs</Text>
                                    {/* <Image src={banner} boxSize={'auto'}/> */}
                                    {/* <Divider bg={'black'}/> */}
                                </Box>
                                <Renderer columns={1}/>
                            {/* </Box> */}
                        </VStack>
                    </Center>

                </Box>
            </Center>
        </Box>

    )
}

export default OrgListWrapper