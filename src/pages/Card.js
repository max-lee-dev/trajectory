import React from 'react';


import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack, SimpleGrid} from "@chakra-ui/react"

export default function Card({orgObj}){
    return (
        <Box bg={''} fontSize={'40px'}  borderRadius={'lg'} borderWidth={'1px'} h={'8em'}  overflow={'hidden'}>
            <Box className='imageWrapper'>
                <Image boxSize={'5em'}
                    // src={orgObj.img}
                    src='img\omega.png'
                    alt='test org image'
                />
            </Box>
            <Box ml={'6px'}> 
                <Box><Text fontSize={'md'} as={'b'} >{orgObj.name}</Text></Box>
                <Box><Text fontSize={'md'}>desc</Text></Box>
                <Box><Text fontSize={'md'} >sub 2</Text></Box>
            </Box>
        </Box>
    );

}
// img={'img\omega.png'}  name={'Omega Robotics'}
