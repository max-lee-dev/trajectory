import React from 'react';

import {Container, Grid, Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, SimpleGrid, Stack, HStack, VStack, Badge, LinkBox, LinkOverlay,Menu,MenuButton,MenuList,MenuItem,MenuItemOption,MenuGroup,MenuOptionGroup,MenuDivider,IconButton, Divider} from "@chakra-ui/react"
import {TriangleUpIcon, HamburgerIcon} from '@chakra-ui/icons'

export function Card({orgObj}){
    if (!/^https?:\/\//i.test(orgObj.website)) {
        orgObj.website = 'https://' + orgObj.website;
    } 
    let screenWidth = 100.0/9*(parseInt(orgObj.size) + parseInt(orgObj.impact) + parseInt(orgObj.momentum)) + "%";
     

    return (
        <LinkBox 
            bg={'white'}  color={'black'} borderRadius={'lg'} borderWidth={'1px'}  boxShadow={'md'} overflow={'hidden'} maxW={'10em'}  p={'0px'}
            _hover={{bg:'lightgray'}}
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

            <Flex m={'6px'} direction={'column'}> 
                <Flex direction = {"row"}>
                    <Text fontSize={'md'} fontWeight={'bold'} lineHeight={'160%'} as={'h5'}>
                        <LinkOverlay href={orgObj.website}>
                        <Badge ml={"6px"} mr={'3px'} as={'span'} bg={'#f5f4f0ff'}> {orgObj.major} </Badge>  {/* badges will be added from db */}
                            {orgObj.name} {/* THIS IS THE NAME OF THE ORG */ }
                        </LinkOverlay>
                    </Text>
                </Flex>
                <Spacer/>
                <Box><Text fontSize={'md'}>{orgObj.blurb}</Text></Box>  {/* The desc of org ( 1 line) */}
                <Spacer/>
                <Container w={screenWidth} h={'12px'} bg={'#badbffff'} m={'4px'} borderRadius={'10px'}/> 
            </Flex>
        </LinkBox>
    );
}


export function CardGrid({orgArr, columns, selectedMajor, sortBy}){
    if (selectedMajor != ''){
        orgArr = orgArr.filter(org => org.major == selectedMajor);
    }
    // console.log(orgArr);
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
            orgArr.sort((a, b) => (parseInt(a.size) + parseInt(a.impact) + parseInt(a.momentum)) - (parseInt(b.size) + parseInt(b.impact) + parseInt(b.momentum)))}
    return(
        <Box>
            <SimpleGrid columns={columns} spacing={'1em'}>
                {orgArr.map(orgObj => <Card key={orgObj.name} orgObj={orgObj}/>)}
            </SimpleGrid>
        </Box>
    );
}


