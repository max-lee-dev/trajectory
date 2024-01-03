import React from 'react';
import ECModal from '../ECModal.js';
import majorColors from '../findECs/majorColors.json';
import selectyourinterests from '../../assets/img/selectyourinterests.png';
import gridFindECsLogo from '../../assets/img/gridFindECsLogo.png';

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
    let screenWidth = 100.0 / 3.1 * (parseInt(orgObj.size) + parseInt(orgObj.impact) + parseInt(orgObj.momentum) - 4) + "%";

    let color = majorColors.filter(function(x){return x.name == orgObj.major;})[0].color;
    let color2 = majorColors.filter(function(x){return x.name == orgObj.major;})[0].color2;
    let color3 = majorColors.filter(function(x){return x.name == orgObj.major;})[0].color3;

    return (
        <Center>
            <LinkBox

                cursor={'pointer'}
                // _active={{borderWidth: '7px'}}
                bg={'white'} color={'#360503ff'} borderRadius={'lg'} borderWidth={'1px'} boxShadow={'md'}
                overflow={'hidden'}
                w={'8em'} p={'0px'}
                onClick={onOpen}
                mt={'2px'}
                mb={'-30px'}
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
                }}>

                    <Flex direction={"row"} pb={'2px'}>
                        <Text fontSize={'16px'} fontWeight={'bold'} lineHeight={'160%'}>
                            {orgObj.name} {/* THIS IS THE NAME OF THE ORG */}
                        </Text>
                        <Spacer/>
                        <Badge mr={'3px'} bg={color2} mt={'1.5px'} pt={'1.2px'} h={'1.6em'} 
                               fontSize={'9px'}
                               color={color3}> {orgObj.major} </Badge> {/* badges will be added from db */}
                    </Flex>

                    <Box>
                        <Text fontSize={'10px'} fontStyle={'italic'}>
                            {orgObj.blurb}
                        </Text>
                    </Box> {/* The desc of org ( 1 line) */}
                    <Spacer/>
                    <Box h={'8px'} bg={'rgba(110,110,110,0.18)'} mt={'8px'} borderRadius={'12px'}>
                        <Container w={screenWidth} h={'8px'} bg={color} m={'0px'}
                                   borderRadius={'12px'}/>
                    </Box>
                </Flex>
            </LinkBox>
        </Center>
    );
}


export function CardGrid({orgArr, columns, selectedMajorArr, sortBy, onFilterClick}) {
    if (selectedMajorArr.size != 0) {
        orgArr = orgArr.filter(org => selectedMajorArr.has(org.major));
    }

    const currMajorsArr = Array.from(selectedMajorArr)
    console.log(currMajorsArr);
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
            <Center paddingBottom={6}>
                    <img src={gridFindECsLogo} width={'800vw'}/>
            </Center>
            <Box zIndex={1} top={'12px'} sx={{position: '-webkit-sticky', /* Safari */ position: 'sticky'}}>

                <Center>
                    <Button zIndex={1} bg={'#360503ff'}
                            align={'center'}
                            onClick={onFilterClick} mb={'15px'}
                            width={'20em'}
                            h={'35px'}
                        // borderWidth={'3px'} borderColor={'badbffff'} borderRadius={'4px'}
                    >
                        <Text fontSize='14px' fontWeight={600} top={''} color={'white'}>
                            Edit your interests!
                        </Text>
                    </Button>
                </Center>


            </Box>
            <Box padding={0}>
                {/* <BadgeDisplay selectedMajorArr={selectedMajorArr}/> */}
            </Box>
            <SimpleGrid columns={columns} spacing={'1em'}>
                {orgArr.map(orgObj => <Card key={orgObj.name} orgObj={orgObj}/>)}
            </SimpleGrid>
        </Box>
    );
}

function BadgeDisplay({selectedMajorArr}) {
    let rendered = []

    selectedMajorArr.forEach(value => {
        let color = majorColors.filter(function(x){return x.name == value;})[0].color;
        rendered.push(
            <Badge borderColor={'rgba(54,5,3,0.47)'} borderRadius={10} borderWidth={2} width={'97%'} key={value}
                   bg={color}
                   marginRight={1}
                   marginLeft={1} marginBottom={1}>
                <Center>
                    {value}
                </Center>
            </Badge>
        )
    })

    return (
        <SimpleGrid columns={2}>
            {rendered}
        </SimpleGrid>
    )
}


