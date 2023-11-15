import React from 'react';


import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"

export default function Screen1() {
    return (
        <Center>
        <Box bg={''} fontSize={'40px'} m={'2em'} borderRadius={'lg'} borderWidth={'4px'} h={'30em'} w={'20em'} overflow={'hidden'}>
                <Box alignItems={'baseline'} justifyContent={"center"} ml={'2em'}> 
                    <Text>text</Text>
                </Box>
                <Box ml={'2em'}>
                    <Box className='imageWrapper'>
                        <Image 
                            boxSize='4em'
                            src='img\omega.png'
                            alt='test org image'
                        />
                    </Box>
                </Box>
        </Box>
        </Center>
    );

}
