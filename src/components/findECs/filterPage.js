import React, {useEffect, useState} from 'react';
import '@fontsource/coiny';
import majorColors from '../findECs/majorColors.json';
import selectyourinterests from '../../assets/img/selectyourinterests.png';
import findecsstar from '../../assets/img/findecsstar.png';


import {
    Box,
    Button,
    HStack,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Spacer,
    Text,
    VStack,
    Grid,
    SimpleGrid
} from "@chakra-ui/react"

function FilterPage({selectedMajorArr, majorArr, onFilterClick}) {
    function majorsSelectedTest(e) {
        if (selectedMajorArr.size == 0) {
            selectedMajorArr = majorArr;
        } else {
        }
    }

    return (

        <Center>


            <Box bg={'transparent'} width={['80vw', '80vw', '50%', '50%']} pt={['0px', '0px', '0px', '20px']}
                 fontFamily={'coiny'}
                 color={'white'}
                // borderWidth={'2px'} borderColor={'black'}
                 style={{WebkitTextStroke: '2px #360503ff'}} fontWeight={'900'}
            >
                <Center>

                    <Box paddingBottom={4} maxW={['100%', '100%', '100%', '55%']}>
                        <img src={selectyourinterests} width={"800vw"}/>
                    </Box>
                </Center>


                <Center>
                    <Box width={['100%', '100%', '100%', '70%']}>
                        <SimpleGrid mt={3} columns={2} spacingX={4} spacingY={4}>
                            {majorColors.map(x => <FilterButton key={x.id} selectedMajorArr={selectedMajorArr}
                                                                name={x.name}
                                                                color={x.color}/>)}
                        </SimpleGrid>
                    </Box>
                </Center>

                <Center>
                    <Button borderWidth={3} borderColor={'#360503ff'} width={['100%', '100%', '100%', '70%']}
                            size={'lg'} bg={'white'}
                            mt={'25px'}
                            style={{WebkitTextStroke: '0px #FFFFFF'}}
                            onClick={onFilterClick}>
                        <Box display={'flex'} flexDir={'row'} mt={1}>

                            <Text fontSize='22px' fontWeight={500} mt={0} color={'#360503ff'}>
                                SEARCH!
                            </Text>


                        </Box>
                    </Button>

                </Center>


            </Box>
        </Center>
    )
}

function FilterButton({selectedMajorArr, name, color, pass}) {

    const [on, setOn] = useState(true)
    const [bgColor, setBgColor] = useState('#360503ff')
    const defaultColor = '#360503ff'


    // console.log(name)

    function toggle(e) { // need to reload the bg colors so if edit interets, it stays
        setOn(!on);
        if (!on) {
            selectedMajorArr.add(name);
            setBgColor(color)
        } else {
            selectedMajorArr.delete(name);
            setBgColor(defaultColor)
        }
        console.log(selectedMajorArr);

    }

    useEffect(() => {

        if (selectedMajorArr.size == 13) {
            selectedMajorArr.clear();
        }

        if (selectedMajorArr.has(name)) {
            setOn(true);
            setBgColor(color)
        } else {
            setOn(false);
            setBgColor(defaultColor)
        }
    }, [])

    if (name === "COMMUNITY SERVICE" && !pass) return null;
    return (
        <Box>
            <Box width={'100%'} display={['none', 'none', 'none', 'inline-block']}>
                <DesktopFilterButton bgColor={bgColor} name={name} toggle={toggle}/>
            </Box>
            <Box width={'100%'} display={['inline-block', 'inline-block', 'inline-block', 'none']}>
                <MobileFilterButton bgColor={bgColor} name={name} toggle={toggle}/>
            </Box>
        </Box>
    )
}

function DesktopFilterButton({bgColor, name, toggle}) {

    const defaultColor = '#360503ff'

    return (
        <Box display={['inline-block']} bg={bgColor} h={50} pb={'10px'}
             borderRadius={'8px'}
             width={'100%'}
             style={{
                 transition: 'all 0.2s ease-in-out',
             }}
             cursor={'pointer'}
             _hover={{
                 transform: 'scale(1.05)',
                 transition: 'all 0.2s ease-in-out',
                 boxShadow: '0px 0px 10px #360503ff'
             }}
             onDragEnd={() => console.log('hi')}
             borderColor={defaultColor}
             borderWidth={3}
             onClick={toggle}>
            <Center textAlign={'center'}>
                <Text style={{WebkitTextStroke: '0px'}} fontSize='18px'
                      fontWeight={400} mt={'11px'}
                      color={'white'}>
                    {name}
                </Text>
            </Center>
        </Box>
    )


}

function MobileFilterButton({bgColor, name, toggle}) {

    const defaultColor = '#360503ff'
    const [touching, setTouching] = useState(false)

    return (
        <Box display={['inline-block']} bg={bgColor} h={50} pb={'10px'}
             borderRadius={'8px'}
             width={'100%'}
             style={{
                 transition: 'all 0.2s ease-in-out',
             }}
             onTouchStart={() => setTouching(true)}
             onTouchEnd={() => setTouching(false)}
             transform={touching ? 'scale(1.05)' : ""}
             boxShadow={touching ? '0px 0px 10px #360503ff' : ""}


             borderColor={defaultColor}
             borderWidth={3}
             onClick={toggle}>
            <Center textAlign={'center'}>
                <Text style={{WebkitTextStroke: '0px'}} fontSize='18px'
                      fontWeight={400} mt={'11px'}
                      color={'white'}>
                    {name}
                </Text>
            </Center>
        </Box>
    )


}

export default FilterPage;