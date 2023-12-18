import React from 'react';

import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"

function LandingPage({page, setPage}) {
    return (
        <Box width='100%' bg={'white'} maxH={'40vh'}>
            <Center>
                <Box bg={'transparent'} width={['100%', '70%', '70%']} paddingTop={['60%', '10%', '10%']}>
                    <Center>
                        <VStack>
                            <Box textAlign={'center'}>
                                <img src={'https://i.imgur.com/4tXW3QW.png'} width={'100px'}/>
                                <Text fontFamily={"Poppins"} fontSize='30px' fontWeight={500}> Find </Text>
                                <Text fontFamily={"Poppins"} fontSize='30px'
                                      fontWeight={500}> Extracurriculars. </Text>
                            </Box>
                            <Box paddingTop={'50%'} textAlign={'center'}>
                                <Text fontFamily={"Poppins"} fontSize='24px' fontWeight={500}> Welcome to
                                    FindECs</Text>
                                <Text fontFamily={"Poppins"} fontSize='16px' fontWeight={500}> The largest
                                    database of
                                    extracurriculars </Text>
                                <Text fontFamily={"Poppins"} fontSize='16px' fontWeight={500}> in the
                                    world. </Text>

                            </Box>
                            <Box paddingTop={'60px'}>
                                <Center>
                                    <Button borderRadius={'20px'} variant={'solid'} fontFamily={'Poppins'}
                                            fontWeight={'500'} bg={'black'}
                                            color={'white'} width={'175px'}
                                            onClick={() => setPage(page + 1)}> GET STARTED {page}</Button>
                                </Center>
                            </Box>
                        </VStack>
                    </Center>

                </Box>
            </Center>
        </Box>
    )
}

export default LandingPage;