import React from 'react';

import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack, Divider, Select} from "@chakra-ui/react"
import { Renderer } from './Renderer';
import banner from '../assets/img/trajectoryBanner.png';

function OrgListWrapper() {

    return (

        <Box width='100%' bgGradient='linear(to-b, #d6edffff, #ffdcd1ff)' h={'100%'} fontFamily={"Poppins"}>
            <Center>
                <Box width={['101%', '70%', '70%']} paddingTop={'5%'}>
                    <Center>
                        <VStack>
                            <Box>
                                <Box textAlign={'left'} fontSize='24px' fontWeight={500} color={'#000000ff'} mb={'8px'} p={'8px'}>
                                    <Text fontSize={'1.5em'}>FindECs v1.1</Text>
                                    {/* <Image src={banner} boxSize={'auto'}/> */}
                                    <Divider/>
                                </Box>
                                <Renderer columns={1}/>
                            </Box>
                        </VStack>
                    </Center>

                </Box>
            </Center>
        </Box>

    )
}

export default OrgListWrapper