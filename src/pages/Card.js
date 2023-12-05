import React from 'react';

import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, SimpleGrid, Stack, HStack, VStack, Badge, LinkBox, LinkOverlay,Menu,MenuButton,MenuList,MenuItem,MenuItemOption,MenuGroup,MenuOptionGroup,MenuDivider,IconButton} from "@chakra-ui/react"
import {TriangleUpIcon, HamburgerIcon} from '@chakra-ui/icons'

function Card({orgObj}){
    return (
        <LinkBox 
            bg={''}  borderRadius={'lg'} borderWidth={'1px'}  boxShadow={'md'} h={'8.3em'}  overflow={'hidden'} maxW={'7em'} minW={'6em'} 
        >            
            {/* <Menu>
                <MenuButton position={'absolute'}
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon color={'white'}/>}
                />
                <MenuList>
                    <MenuItem icon={<TriangleUpIcon/>} command='⌘T'>
                        New Tab
                    </MenuItem>
                </MenuList>
            </Menu> */}
            <Box className='imageWrapper'> 
                <Image objectFit={'cover'} height={'6em'} width={'100%'} backdropBlur={'12px'}
                _hover={{ backdropFilter:'auto', backdropBlur: '8px'}}
                    // src={orgObj.img}
                    src={orgObj.image}
                    alt='test org image'
                />
            </Box>
            <Box m={'6px'} > 
                <Flex direction = {"row"}>
                    <Text fontSize={'md'} fontWeight={'bold'} lineHeight={'160%'} as={'h5'}>
                        <LinkOverlay href={orgObj.website}>
                            {orgObj.name} {/* THIS IS THE NAME OF THE ORG */ }
                        </LinkOverlay>
                    </Text>
                    <Spacer/>
                    <TriangleUpIcon boxSize={'22px'} />
                    <Text fontSize={'md'} as={'span'}> 4.3</Text>
                </Flex>
                <Box><Text fontSize={'md'}>{orgObj.description}</Text></Box>  {/* The desc of org ( 1 line) */}
                <Flex direction={"row"} alignItems={'baseline'}>
                    <Text fontSize={'md'} fontWeight={'semi-bold'} color={'gray'}>Looking for </Text> 
                    <Badge ml={"6px"} as={'span'} colorScheme={"blue"}>Developers</Badge>  {/* badges will be added from db */}
                </Flex> 
            </Box>
        </LinkBox>
    );

}


export function CardGrid({orgObj}){

    return(
        <Box>
            <SimpleGrid columns={4} spacing={'1em'}>
                {orgObj.map(orgObj => <Card key={orgObj.name} orgObj={orgObj}/>)}
            </SimpleGrid>
        </Box>
    );
}


// img={'img\omega.png'}  name={'Omega Robotics'}
