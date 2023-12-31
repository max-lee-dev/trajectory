import React from 'react';
import '@fontsource/coiny';

import AppWrapper from '../AppWrapper.js';

import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"

function FindECsLanding(toggleIntro) {
    return (
        <Box width='100%' bg={'transparent'} maxH={'100vh'}>
            <Center>
                <Box bg={'transparent'} width={['70%']} paddingTop={['10%']} fontFamily={'coiny'} color={'white'} 
                    style={{WebkitTextStroke: '2px #360503ff'}}
                >
                    <Center>
                        <VStack>
                            <Box textAlign={'center'}>
                                {/* <img src={'https://i.imgur.com/4tXW3QW.png'} width={'100px'}/> */}
                                <Text fontSize='2em' fontWeight={500} position={'absolute'} top={''}> Find </Text>
                                <Text  fontSize='30px' fontWeight={500}> ECS </Text>
                            </Box>
                            <Box paddingTop={'50%'} textAlign={'center'}>
                                <Text  fontSize='16px' fontWeight={500} color={'#360503ff'} style={{WebkitTextStroke: '0px #360503ff'}}> THE #1 DATABASE FOR HS EXTRACURRICULARS!</Text>
                            </Box>
                            <Box paddingTop={'60px'}>
                                <Center>
                                    <Button borderRadius={'20px'} variant={'solid'} 
                                            fontWeight={'500'} bg={'black'}
                                            color={'white'} width={'175px'}
                                            style={{WebkitTextStroke: '0px #360503ff'}}
                                            onClick={''}> GET STARTED </Button>
                                </Center>
                            </Box>
                        </VStack>
                    </Center>

                </Box>
            </Center>
        </Box>
    )
}

export default FindECsLanding;