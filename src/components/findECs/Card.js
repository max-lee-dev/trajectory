import React, {useState} from 'react';
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
    let screenWidth = 100.0 / 5 * (parseInt(orgObj.size) + parseInt(orgObj.impact) + parseInt(orgObj.momentum) - 4) + 35 + "%";

    let color = majorColors.filter(function (x) {
        return x.name == orgObj.major;
    })[0].color;
    let color2 = majorColors.filter(function (x) {
        return x.name == orgObj.major;
    })[0].color2;
    let color3 = majorColors.filter(function (x) {
        return x.name == orgObj.major;
    })[0].color3;

    return (
        <Box>
            <Box width={'100%'} display={["none", "none", "inline-block", "inline-block"]}>
                <DesktopCard orgObj={orgObj} screenWidth={screenWidth} color={color} color2={color2}/>
            </Box>
            <Box width={'100%'} display={["inline-block", "inline-block", "none", "none"]}>
                <MobileCard orgObj={orgObj} screenWidth={screenWidth} color={color} color2={color2}/>
            </Box>

        </Box>
    );
}

function DesktopCard({orgObj, screenWidth, color, color2, color3}) {

    const {isOpen, onOpen, onClose} = useDisclosure()


    return (
        <Center>
            <Box>
                <LinkBox

                    cursor={'pointer'}
                    // _active={{borderWidth: '7px'}}
                    bg={'white'} color={'#360503ff'} borderRadius={'lg'} borderWidth={'1px'} boxShadow={'md'}
                    overflow={'hidden'}
                    w={'8em'} p={'0px'}
                    onClick={onOpen}
                    mt={'2px'}
                    mb={'-30px'}
                    _hover={{
                        transform: 'scale(1.05)',
                        transition: 'all 0.2s ease-in-out',
                        boxShadow: '0px 0px 10px #360503ff'
                    }}


                >

                    <ECModal orgObj={orgObj} isOpen={isOpen} onClose={onClose}/>

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
            </Box>
        </Center>
    );
}

function MobileCard({orgObj, screenWidth, color, color2, color3}) {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const [touching, setTouching] = useState(false)

    return (
        <Center>
            <Box>
                <LinkBox

                    cursor={'pointer'}
                    // _active={{borderWidth: '7px'}}
                    bg={'white'} color={'#360503ff'} borderRadius={'lg'} borderWidth={'1px'} boxShadow={'md'}
                    overflow={'hidden'}
                    w={'8em'} p={'0px'}
                    onClick={onOpen}
                    mt={'2px'}
                    mb={'-30px'}
                    onTouchStart={() => setTouching(true)}
                    onTouchEnd={() => setTouching(false)}
                    transform={touching ? 'scale(1.05)' : 'scale(1)'}
                    boxShadow={touching ? '0px 0px 10px #360503ff' : ''}
                    style={{
                        transition: 'all 0.2s ease-in-out',
                    }}


                >

                    <ECModal orgObj={orgObj} isOpen={isOpen} onClose={onClose}/>

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
            </Box>
        </Center>
    );
}












