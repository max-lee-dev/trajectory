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
                <Box bg={'transparent'} width={['70%']} paddingTop={['60px', '200px', '200px', '150px']}
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
                                    EXTRACURRICULARS</Text
                                >
                            </Box>


                            <Box paddingTop={'20px'}>
                                <Center>
                                    <Button borderRadius={'8px'}
                                            variant={'solid'}
                                            borderWidth={'2px'} borderColor={'#360503ff'}
                                            height={'50px'}
                                            fontWeight={'500'} bg={'#360503ff'}
                                            color={'white'} width={'200px'}
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
                            <Box mt={3} as={'a'} href={'https://www.trajectory.education/'}>
                                <img src={madebytrajectory} width={'150px'}/>
                            </Box>
                        </VStack>
                    </Center>

                </Box>
            </Center>
        </Box>
    )
}

export default FindECsLanding;