import React from 'react';

import {Box, Divider, HStack, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"

function MajorTemplate({page, setPage, name, description, imageArray, numEcs}) {
    return (
        <Box color={'white'} fontFamily={'Poppins'} h={'100vh'} bg={'black'} fontSize={'40px'}>
            <Box padding={10}>
                <Box paddingTop={5} paddingBottom={5}>
                    <Text fontSize={'24px'} fontWeight={500} color='white'>{name}</Text>
                </Box>
                <Divider borderWidth={1} width={'100%'} orientation="horizontal"/>
                <VStack spacing={3}>
                    <Box borderColor={'white'} marginTop='25px' borderRadius={20} w={'100%'} h={'150px'}
                         borderWidth={2}>

                    </Box>
                    <Box width={'100%'}>
                        <Text paddingTop={5} fontWeight={500} fontSize={'24px'}>
                            {numEcs} Opportunities Found
                        </Text>
                    </Box>
                    <Text fontSize={'18px'}>
                        {description}
                    </Text>
                </VStack>
                <HStack paddingTop={5} justifyContent={'space-between'}>
                    <Box borderColor={'white'} marginTop='25px' borderRadius={20} w={'140px'} h={'140px'}
                         borderWidth={2}>

                    </Box>

                    <Box borderColor={'white'} marginTop='25px' borderRadius={20} w={'140px'} h={'140px'}
                         borderWidth={2}>

                    </Box>
                </HStack>

                <Box marginTop={20}>
                    <Center>
                        <Button variant={'solid'} borderRadius={'20px'} bg={'white'} fontSize={'18px'} color={'black'}
                                h={'45px'} width={'200px'} onClick={() => setPage(page + 1)}>SEE ORGS</Button>
                    </Center>
                </Box>


            </Box>

        </Box>
    )
}

export default MajorTemplate