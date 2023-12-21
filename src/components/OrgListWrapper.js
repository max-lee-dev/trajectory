import React from 'react';

import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"

function OrgListWrapper() {
    return (

        <Box width='101%' bg={'black'} h={'100vh'} fontFamily={"Poppins"}>
            <Center>
                <Box width={['101%', '70%', '70%']} paddingTop={['20%', '10%', '10%']}>
                    <Center>
                        <VStack>
                            <Box textAlign={'center'} fontSize='31px' fontWeight={500} color={'white'}>
                                <Text>Extracurricular Platforms</Text>
                            </Box>
                        </VStack>
                    </Center>

                </Box>
            </Center>
        </Box>

    )
}

export default OrgListWrapper