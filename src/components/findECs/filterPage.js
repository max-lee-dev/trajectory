import React, {useEffect, useState} from 'react';
import '@fontsource/coiny';
import majorColors from '../findECs/majorColors.json';
import selectyourinterests from '../../assets/img/selectyourinterests.png';


import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack, Grid, SimpleGrid} from "@chakra-ui/react"

function FilterPage({selectedMajorArr, majorArr, onFilterClick}) {
    function majorsSelectedTest(e){
        if (selectedMajorArr.size == 0) {
            selectedMajorArr = majorArr;
        }
        else {
        }
    }

    return (
        <Center>
            <Box bg={'transparent'} width={['80vw']} pt={['10px']} fontFamily={'coiny'} color={'white'}
                // borderWidth={'2px'} borderColor={'black'}
                 style={{WebkitTextStroke: '2px #360503ff'}} fontWeight={'900'}
            >
                <Center paddingBottom={6}>
                    <img src={selectyourinterests} width={'800vw'}/>
                </Center>
                <SimpleGrid columns={2} spacing={'10px'}>
                    {majorColors.map(x => <FilterButton key={x.id} selectedMajorArr={selectedMajorArr} name={x.name} color={x.color}/>)}
                </SimpleGrid>

                <Center>
                    <Button size={'lg'} bg={'#360503ff'} m={'40px'} style={{WebkitTextStroke: '0px #FFFFFF'}}
                            onClick={majorsSelectedTest}>
                        <Text fontSize='1em' fontWeight={500} top={''} color={'white'}>
                            FIND ECS
                        </Text>
                    </Button>
                </Center>
            </Box>
        </Center>
    )
}

function FilterButton({selectedMajorArr, name, color}) {

    const [on, setOn] = useState(true)
    const [bgColor, setBgColor] = useState('#360503ff')


    // console.log(name)

    function toggle(e) { // need to reload the bg colors so if edit interets, it stays
        setOn(!on);
        if (!on) {
            selectedMajorArr.add(name);
            setBgColor(color)
        } else {
            selectedMajorArr.delete(name);
            setBgColor('#360503ff')
        }
        console.log(selectedMajorArr);

    }

    useEffect(() => {
        if (selectedMajorArr.has(name)) {
            setOn(true);
            setBgColor(color)
        } else {
            setOn(false);
            setBgColor('#360503ff')
        }
    }, [])


    return (
        <Box size={'lg'} bg={bgColor} pb={'10px'} 
             borderRadius={'10px'}
             style={{
                 transition: 'all 0.2s ease-in-out',
             }}
             onClick={toggle}>
            <Center textAlign={'center'}>
                <Text style={{WebkitTextStroke: '0px #FFFFFF'}}  fontSize='18px' fontWeight={400} mt={'8px'} 
                      color={'white'}>
                    {name}
                </Text>
            </Center>
        </Box>
    )
}

export default FilterPage;