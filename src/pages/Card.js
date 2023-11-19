import React from 'react';


import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"

export default function Card({img, name}){
    return (
        <Center>
        <Box bg={''} fontSize={'40px'} m={'2em'} borderRadius={'lg'} borderWidth={'4px'} h={'30em'} w={'20em'} overflow={'hidden'}>
            <Box alignItems={'baseline'} justifyContent={"center"} ml={'2em'}> 
                <Text>{name}</Text>
            </Box>
            <Center>
                <Box ml={'2em'}>
                    <Box className='imageWrapper'>
                        <Image boxSize={'md'}
                            src='img\omega.png'
                            alt='test org image'
                        />
                    </Box>
                </Box>
            </Center>
        </Box>
        </Center>
    );

}
// img={'img\omega.png'}  name={'Omega Robotics'}
