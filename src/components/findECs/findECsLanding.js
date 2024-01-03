import React from 'react';
import '@fontsource/coiny';
import "@fontsource/poppins/600.css";
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
                <Box bg={'transparent'} width={['70%']} paddingTop={['100px', '200px', '200px', '200px']}
                     paddingBottom={'50px'}
                     fontFamily={'coiny'} color={'white'}
                     style={{WebkitTextStroke: '2px #360503ff'}}
                >
                    <Center>
                        <VStack spacing={3}>
                            <img src={topsquigly} width={'220px'}/>

                            <img src={findecslogo} width={'230px'}/>
                            <Box paddingTop={5} textAlign={'center'}>
                                <Text fontFamily={'Poppins'} fontWeight={'600'} fontSize='18px' color={'#360503ff'}
                                      style={{WebkitTextStroke: '0px #360503ff'}}> THE #1 DATABASE FOR HS
                                    EXTRACURRICULARS</Text>
                            </Box>


                            <Box paddingTop={'20px'}>
                                <Center>
                                    <Button borderRadius={'8px'}
                                            variant={'solid'}
                                            borderWidth={'2px'} borderColor={'#360503ff'}
                                            height={'50px'}
                                            fontWeight={'500'} bg={'white'}
                                            color={'#360503ff'} width={'200px'}
                                            style={{WebkitTextStroke: '0px #360503ff'}}
                                            onClick={() => setShowIntro(false)}
                                    >
                                        <Text fontSize={'20px'} mt={0.5}>
                                            GET STARTED!
                                        </Text>
                                    </Button>
                                </Center>
                            </Box>

                            <Box mt={3}>
                                <img src={bottomsquigly} width={'220px'}/>
                            </Box>

                            <img src={madebytrajectory} width={'170px'}/>
                        </VStack>
                    </Center>

                </Box>
            </Center>
        </Box>
    )
}

export default FindECsLanding;