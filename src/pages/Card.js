import React from 'react';


import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack, SimpleGrid} from "@chakra-ui/react"

export default function Card({orgObj}){
    return (
        <Box bg={''} fontSize={'40px'}  borderRadius={'lg'} borderWidth={'1px'} h={'6em'}  overflow={'hidden'}>
            <Box ml={'12px'}> 
                <Text fontSize={'md'} as={'bold'} >{orgObj.name}</Text>
            </Box>
            <Center>
                <Box ml={'2em'}>
                    <Box className='imageWrapper'>
                        <Image boxSize={'2em'}
                            // src={orgObj.img}
                            src='img\omega.png'
                            alt='test org image'
                        />
                    </Box>
                </Box>
            </Center>
        </Box>
    );

}
// img={'img\omega.png'}  name={'Omega Robotics'}
