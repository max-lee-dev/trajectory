import React from 'react';

import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack, Divider, Select} from "@chakra-ui/react"
import { Renderer } from './Renderer';
import banner from '../assets/img/trajectoryBanner.png';

function AppWrapper() {

    return (

        <Box width='100%' h={'100%'} bg={'transparent'} fontFamily={"Poppins"} css={{
                    "-webkit-touch-callout": "none",
                    "-webkit-user-select": "none",
                    "-moz-user-select": "none",
                    "-ms-user-select": "none"
                }}>

            <Center>
                <Box width={'70%'} paddingTop={'5%'}>
                    <Center>
                        <VStack>
                            {/* <Box> */}
                                <Box textAlign={'left'} fontSize='24px' fontWeight={500} color={'#000000ff'} pr={'8px'} pl={'8px'} bg={'transparent'} mt={'10px'}>
                                    <Text  fontFamily={"Poppins"} fontSize={'3.5em'} zIndex={'2'} > FindECs </Text>
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

export default AppWrapper