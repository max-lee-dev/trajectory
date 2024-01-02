import React, {useEffect, useState} from 'react';
import '@fontsource/coiny';
import majorColors from '../findECs/majorColors.json';


import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack, Grid, SimpleGrid} from "@chakra-ui/react"

function FilterPage({selectedMajorArr, majorArr, onFilterClick}) {

    return (
        <Center>
            <Box bg={'transparent'} width={['90vw']} pt={['10%']} fontFamily={'coiny'} color={'white'}
                // borderWidth={'2px'} borderColor={'black'}
                 style={{WebkitTextStroke: '2px #360503ff'}} fontWeight={'900'}
            >
                <Center><Text fontSize='1em' top={''}> SELECT YOUR </Text></Center>
                <Center><Text fontSize='1em' top={''} pb={['10%']}> INTERESTS </Text></Center>

                <SimpleGrid columns={2} spacing={'10px'}>
                    {majorArr.map(x => <FilterButton key={x} selectedMajorArr={selectedMajorArr} name={x}/>)}
                </SimpleGrid>

                <Center>
                    <Button size={'lg'} bg={'#360503ff'} m={'40px'} style={{WebkitTextStroke: '0px #FFFFFF'}}
                            onClick={onFilterClick}>
                        <Text fontSize='1em' fontWeight={500} top={''} color={'white'}>
                            FIND ECS
                        </Text>
                    </Button>
                </Center>
            </Box>
        </Center>
    )
}

function FilterButton({selectedMajorArr, name}) {

    const [on, setOn] = useState(true)
    const [bgColor, setBgColor] = useState('#360503ff')


    // console.log(name)

    function toggle(e) { // need to reload the bg colors so if edit interets, it stays
        console.log("click!")
        setOn(!on);
        if (on) {
            selectedMajorArr.add(name);
            setBgColor(majorColors[name])
        } else {
            selectedMajorArr.delete(name);
            setBgColor('#360503ff')
        }
        console.log(selectedMajorArr);

    }


    return (
        <Box size={'lg'} bg={bgColor} pb={'10px'}
             onClick={toggle}>
            <Center textAlign={'center'}>
                <Text style={{WebkitTextStroke: '0px #FFFFFF'}} fontSize='18px' fontWeight={400} top={''}
                      color={'white'}>
                    {name}
                </Text>
            </Center>
        </Box>
    )
}

export default FilterPage;