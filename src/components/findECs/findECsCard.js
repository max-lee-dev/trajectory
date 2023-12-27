import React from 'react';
import ECModal from '../ECModal.js';

import {
    Container,
    Grid,
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Spacer,
    Text,
    SimpleGrid,
    Stack,
    HStack,
    VStack,
    Badge,
    LinkBox,
    LinkOverlay,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,
    Divide,
    useDisclosure
} from "@chakra-ui/react"
import {TriangleUpIcon, HamburgerIcon} from '@chakra-ui/icons'

export function Card({orgObj}) {

    const {isOpen, onOpen, onClose} = useDisclosure()
    if (!/^https?:\/\//i.test(orgObj.website)) {
        orgObj.website = 'https://' + orgObj.website;
    }
    let screenWidth = 100.0 / 9 * (parseInt(orgObj.size) + parseInt(orgObj.impact) + parseInt(orgObj.momentum)) + "%";


    return (

        <LinkBox
            bg={'white'} color={'black'} borderRadius={'lg'} borderWidth={'1px'} boxShadow={'md'} overflow={'hidden'}
            maxW={'8em'} p={'0px'}
            // _hover={{bg: 'lightgray'}}
            onClick={onOpen}
            mt={'-14px'}
            mb={'-14px'}
        >
            <ECModal orgObj={orgObj} isOpen={isOpen} onClose={onClose}/>

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


            <Flex m={'2px'} direction={'column'} pt={'8px'} pb={'8px'} pl={'12px'} pr={'12px'} css={{
                    "-webkit-touch-callout": "none",
                    "-webkit-user-select": "none",
                    "-moz-user-select": "none",
                    "-ms-user-select": "none"
                }} >

                <Flex direction={"row"} pb={'2px'}>
                    <Text fontSize={'16px'} fontWeight={'bold'} lineHeight={'160%'} as={'h5'}>
                        {orgObj.name} {/* THIS IS THE NAME OF THE ORG */}
                    </Text>
                    <Spacer/>
                    <Badge mr={'3px'} bg={'#f5f4f0ff'} mt={'1.2px'} h={'1.6em'} color={'#7c8994ff'}
                           fontSize={'9px'}> {orgObj.major} </Badge> {/* badges will be added from db */}
                </Flex>

                <Box>
                    <Text fontSize={'10px'} fontStyle={'italic'}>
                        {orgObj.blurb}
                    </Text>
                </Box> {/* The desc of org ( 1 line) */}
                <Spacer/>
                <Container w={screenWidth} h={'8px'} bg={'#badbffff'} m={'0px'} mt={'4px'} borderRadius={'12px'}/>
            </Flex>

        </LinkBox>
    );
}


export function CardGrid({orgArr, columns, selectedMajor, sortBy}) {
    if (selectedMajor != '') {
        orgArr = orgArr.filter(org => org.major == selectedMajor);
    }
    // console.log(orgArr);
    switch (sortBy) {
        case 'size':
            orgArr.sort((a, b) => b.size - a.size);
            break;
        case 'impact':
            orgArr.sort((a, b) => b.impact - a.impact);
            break;
        case 'momentum':
            orgArr.sort((a, b) => b.momentum - a.momentum);
            break;
        default:
            orgArr.sort((a, b) => (parseInt(b.size) + parseInt(b.impact) + parseInt(b.momentum)) - (parseInt(a.size) + parseInt(a.impact) + parseInt(a.momentum)))
    }
    return (
        <Box>
            <SimpleGrid columns={columns} spacing={'1em'}>
                {orgArr.map(orgObj => <Card key={orgObj.name} orgObj={orgObj}/>)}
            </SimpleGrid>
        </Box>
    );
}


