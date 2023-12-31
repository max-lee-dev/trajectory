import React from 'react';
import '@fontsource/coiny';
import findecslogo from '../../assets/img/findecslogo2.png';
import topsquigly from '../../assets/img/topsquigly.png';
import bottomsquigly from '../../assets/img/bottomsquigly.png';
import madebytrajectory from '../../assets/img/madebytrajectory.png';

import AppWrapper from '../AppWrapper.js';

import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"

function FindECsLanding({setShowIntro}) {
    return (
        <Box width='100%' bg={'transparent'} maxH={'100vh'}>
            <Center>
                <Box bg={'transparent'} width={['70%']} paddingTop={['45%']} fontFamily={'coiny'} color={'white'}
                     style={{WebkitTextStroke: '2px #360503ff'}}
                >
                    <Center>
                        <VStack spacing={3}>
                            <img src={topsquigly} width={'150px'}/>

                            <img src={findecslogo} width={'250px'}/>
                            <Box paddingTop={5} textAlign={'center'}>
                                <Text fontSize='16px' fontWeight={500} color={'#360503ff'}
                                      style={{WebkitTextStroke: '0px #360503ff'}}> THE #1 DATABASE FOR HS
                                    EXTRACURRICULARS!</Text>
                            </Box>


                            <Box paddingTop={'20px'}>
                                <Center>
                                    <Button borderRadius={'7px'}
                                            variant={'solid'}
                                            fontWeight={'500'} bg={'black'}
                                            color={'white'} width={'175px'}
                                            style={{WebkitTextStroke: '0px #360503ff'}}
                                            onClick={() => setShowIntro(false)}
                                    > GET STARTED </Button>
                                </Center>
                            </Box>

                            <img src={bottomsquigly} width={'150px'}/>
                            <img src={madebytrajectory} width={'150px'}/>
                        </VStack>
                    </Center>

                </Box>
            </Center>
        </Box>
    )
}

export default FindECsLanding;