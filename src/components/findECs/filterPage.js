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


            <Box bg={'transparent'} width={['80vw', '80vw', '80vw', '50%']} pt={['0px']} fontFamily={'coiny'}
                 color={'white'}
                // borderWidth={'2px'} borderColor={'black'}
                 style={{WebkitTextStroke: '2px #360503ff'}} fontWeight={'900'}
            >
                <Center paddingBottom={4}>
                    <img src={selectyourinterests} width={'800vw'}/>
                </Center>

                <SimpleGrid mt={3} columns={2} spacingX={4} spacingY={4}>
                    {majorColors.map(x => <FilterButton key={x.id} selectedMajorArr={selectedMajorArr} name={x.name}
                                                        color={x.color}/>)}
                </SimpleGrid>

                <Center>
                    <Button borderWidth={'2px'} borderColor={'#360503ff'} width={'100%'} size={'lg'} bg={'white'}
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
        <Box size={'lg'} bg={bgColor} pb={'10px'}
             borderRadius={'8px'}
             style={{
                 transition: 'all 0.2s ease-in-out',
             }}
             onClick={toggle}>
            <Center textAlign={'center'}>
                <Text style={{WebkitTextStroke: '0px #FFFFFF'}} mt={'1px'} fontSize='14px' fontWeight={400} mt={'11px'}
                      color={'white'}>
                    {name}
                </Text>
            </Center>
        </Box>
    )
}

export default FilterPage;