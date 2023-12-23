import React from 'react';

import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, SimpleGrid, Stack, HStack, VStack, Badge, LinkBox, LinkOverlay,Menu,MenuButton,MenuList,MenuItem,MenuItemOption,MenuGroup,MenuOptionGroup,MenuDivider,IconButton} from "@chakra-ui/react"
import {TriangleUpIcon, HamburgerIcon} from '@chakra-ui/icons'

export function Card({orgObj}){
    if (!/^https?:\/\//i.test(orgObj.website)) {
        orgObj.website = 'https://' + orgObj.website;
    } 

    return (
        <LinkBox 
            bg={'white'}  color={'black'} borderRadius={'lg'} borderWidth={'1px'}  boxShadow={'md'} h={'3em'}  overflow={'hidden'} maxW={'10em'} minW={'8em'} p={'0px'}>           

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

            <Box m={'6px'} > 
                <Flex direction = {"row"}>
                    <Text fontSize={'md'} fontWeight={'bold'} lineHeight={'160%'} as={'h5'}>
                        <LinkOverlay href={orgObj.website}>
                        <Badge ml={"6px"} mr={'3px'} as={'span'} colorScheme={"blue"}> {orgObj.major} </Badge>  {/* badges will be added from db */}
                            {orgObj.name} {/* THIS IS THE NAME OF THE ORG */ }
                        </LinkOverlay>
                    </Text>
                    <Spacer/>
                </Flex>
                <Box><Text fontSize={'md'}>{orgObj.blurb}</Text></Box>  {/* The desc of org ( 1 line) */}
            </Box>
        </LinkBox>
    );
}


export function CardGrid({orgArr, columns, selectedMajor, sortBy}){
    if (selectedMajor != ''){
        orgArr= orgArr.filter(org => org.major == selectedMajor);
    }
    console.log(sortBy);
    switch(sortBy) {
        case 'size':
            orgArr.sort((a, b) => a.size - b.size);
            break;
        case 'impact':
            orgArr.sort((a, b) => a.impact - b.impact);
            break;
        case 'momentum':
            orgArr.sort((a, b) => a.momentum - b.momentum);
            break;
        default:
            orgArr.sort((a, b) => a.name.length - b.name.length)
    }
    return(
        <Box>
            <SimpleGrid columns={columns} spacing={'1em'}>
                {orgArr.map(orgObj => <Card key={orgObj.name} orgObj={orgObj}/>)}
            </SimpleGrid>
        </Box>
    );
}


