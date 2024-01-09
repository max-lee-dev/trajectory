import React, {useState} from 'react';
import ECModal from '../ECModal.js';
import majorColors from '../findECs/majorColors.json';
import selectyourinterests from '../../assets/img/selectyourinterests.png';
import gridFindECsLogo from '../../assets/img/gridFindECsLogo.png';
import megaphone from '../../assets/img/iconmonstr-megaphone-4.svg';

//bunnies!
import arrowBunny from '../../assets/img/bunnies/arrowBunny.png';
import balloonBunny from '../../assets/img/bunnies/balloonBunny.png';
import bobaBunny from '../../assets/img/bunnies/bobaBunny.png';
import crushedToDeathByAComicallyLargeClipartHeartBunny from '../../assets/img/bunnies/crushedToDeathByAComicallyLargeClipartHeartBunny.png';
import flowerBunny from '../../assets/img/bunnies/flowerBunny.png';
import heartBunny from '../../assets/img/bunnies/heartBunny.png';
import heartHandsBunny from '../../assets/img/bunnies/heartHandsBunny.png';
import sleepyBunny from '../../assets/img/bunnies/sleepyBunny.png';
import sparkleBunny from '../../assets/img/bunnies/sparkleBunny.png';



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

export function Card({orgObj, bunnyIndex}) {

    const {isOpen, onOpen, onClose} = useDisclosure()


    let screenWidth = 0;
    let color = 0;
    let color2 = 0;
    let color3 = 0;
    if (orgObj.type === "org") {
        if (!/^https?:\/\//i.test(orgObj.website)) {
            orgObj.website = 'https://' + orgObj.website;
        }
        screenWidth = 100.0 / 5 * (parseInt(orgObj.size) + parseInt(orgObj.impact) + parseInt(orgObj.momentum) - 4) + 35 + "%";

        color = majorColors.filter(function (x) {
            return x.name == orgObj.major;
        })[0].color;
        color2 = majorColors.filter(function (x) {
            return x.name == orgObj.major;
        })[0].color2;
        color3 = majorColors.filter(function (x) {
            return x.name == orgObj.major;
        })[0].color3;
    }

    return (
        <Box>
            {orgObj.type === "feedback" ?
                <>
                    <Box width={'100%'} display={"inline-block"}>
                        <FeedbackCard orgObj={orgObj}/>
                    </Box>
                </>
                :
                <>
                    <Box width={'100%'} display={["none", "none", "inline-block", "inline-block"]}>
                        <DesktopCard orgObj={orgObj} screenWidth={screenWidth} color={color} color2={color2} bunnyIndex={bunnyIndex}/>
                    </Box>
                    <Box width={'100%'} display={["inline-block", "inline-block", "none", "none"]}>
                        <MobileCard orgObj={orgObj} screenWidth={screenWidth} color={color} color2={color2} bunnyIndex={bunnyIndex}/>
                    </Box>
                </>
            }
        </Box>
    );
}

function DesktopCard({orgObj, screenWidth, color, color2, color3, bunnyIndex}) {

    const bunnyArr = [arrowBunny, balloonBunny, bobaBunny, crushedToDeathByAComicallyLargeClipartHeartBunny, flowerBunny, heartBunny, heartHandsBunny, sleepyBunny, sparkleBunny];
    
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
                        boxShadow: '0px 0px 10px #360503ff'
                    }}
                    style={{ // makes card not only grow but shrink w/ transition
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

                        <Box w={'6.2em'} position={'relative'}>
                            <Box>
                                <Text fontSize={'11px'} fontStyle={'italic'}>
                                    {orgObj.blurb}
                                </Text>
                            </Box> {/* The desc of org ( 1 line) */}
                            <Spacer/>
                            <Box h={'8px'} bg={'rgba(110,110,110,0.18)'} mt={'8px'} borderRadius={'12px'}>
                                <Container w={screenWidth} h={'8px'} bg={color} m={'0px'} borderRadius={'12px'}/>
                            </Box> 
                        </Box>
                        <Box position={'absolute'} right={'15px'} bottom={'0px'}>
                            <img src={bunnyArr[bunnyIndex]} width={'40px'}/>
                        </Box>
                    </Flex>
                </LinkBox>
            </Box>
        </Center>
    );
}

function MobileCard({orgObj, screenWidth, color, color2, color3, bunnyIndex}) {

    const bunnyArr = [arrowBunny, balloonBunny, bobaBunny, crushedToDeathByAComicallyLargeClipartHeartBunny, flowerBunny, heartBunny, heartHandsBunny, sleepyBunny, sparkleBunny];
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [touching, setTouching] = useState(false)

    return (
        <Center>
            <Box>
                <LinkBox

                    cursor={'pointer'}
                    // _active={{borderWidth: '7px'}}
                    bg={'white'} color={'#360503ff'} borderRadius={'lg'} borderWidth={'1px'}
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

                        <Box w={'6.2em'} position={'relative'}>
                            <Box>
                                <Text fontSize={'11px'} fontStyle={'italic'}>
                                    {orgObj.blurb}
                                </Text>
                            </Box> {/* The desc of org ( 1 line) */}
                            <Spacer/>
                            <Box h={'8px'} bg={'rgba(110,110,110,0.18)'} mt={'8px'} borderRadius={'12px'}>
                                <Container w={screenWidth} h={'8px'} bg={color} m={'0px'} borderRadius={'12px'}/>
                            </Box> 
                        </Box>
                        <Box position={'absolute'} right={'15px'} bottom={'0px'}>
                            <img src={bunnyArr[bunnyIndex]} width={'40px'}/>
                        </Box>
                    </Flex>
                </LinkBox>
            </Box>
        </Center>
    );
}

function FeedbackCard({orgObj, screenWidth}) {
    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <Center>
            <Box>
                <LinkBox

                    cursor={'pointer'}
                    _active={{borderWidth: '7px'}}
                    bg={'white'} color={'#360503ff'} borderRadius={'lg'} borderWidth={'1px'} boxShadow={'md'}
                    overflow={'hidden'}
                    w={'8em'} p={'0px'}
                    onClick={onOpen}
                    mt={'2px'}
                    mb={'-30px'}
                    boxShadow={'0px 0px 8px #ffffffff'}
                    _hover={{
                        transform: 'scale(1.05)',
                        boxShadow: '0px 0px 10px #360503ff'
                    }}
                    style={{ // makes card not only grow but shrink w/ transition
                        transition: 'all 0.2s ease-in-out',
                    }}
                >

                    <Flex m={'2px'} direction={'column'} pt={'8px'} pb={'8px'} pl={'12px'} pr={'12px'} css={{
                        "-webkit-touch-callout": "none",
                        "-webkit-user-select": "none",
                        "-moz-user-select": "none",
                        "-ms-user-select": "none"
                    }}>

                        <Flex direction={"row"} pb={'2px'}>
                            <Text fontSize={'16px'} fontWeight={'bold'} lineHeight={'160%'}>
                                Feedback
                            </Text>
                            <Spacer/>
                            <img src={megaphone} width={'20px'}/>
                        </Flex>


                        <Box>
                            <Text fontSize={'10px'} fontStyle={'italic'}>
                                Enjoying FindECs so far? Got a bug to report? FindECs is still in it's early stages,
                                and we'd love to hear your opinion!
                            </Text>
                            <LinkOverlay
                                href='https://docs.google.com/forms/d/e/1FAIpQLSeOt16-fpwrz3BQPHqEzP0sgxNzwSuH2n9AMZOdmYHhLu6xwg/viewform'
                                target='_blank'></LinkOverlay>
                        </Box>
                    </Flex>
                </LinkBox>
            </Box>
        </Center>
    );
}










