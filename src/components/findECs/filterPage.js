import React, {useEffect, useState} from 'react';
import '@fontsource/coiny';

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
                        {majorArr.map(x =>  <FilterButton key={x} selectedMajorArr={selectedMajorArr} name={x} />)}
                    </SimpleGrid>

                <Center>
                    <Button size={'lg'} bg={'#360503ff'}  m={'40px'} style={{WebkitTextStroke: '0px #FFFFFF'}} onClick={onFilterClick} >
                        <Text fontSize='1em' fontWeight={500} top={''} color={'white'} > 
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
    // console.log(name)

    function toggle(e) {
        e.preventDefault();
        console.log("click!")
        setOn(!on);
        if(on){
            selectedMajorArr.add(name);
        } else {
            selectedMajorArr.delete(name);
        }
        console.log(selectedMajorArr);
    }

    return(
        <Button size={'lg'} bg={'#360503ff'} pb={'10px'} style={{WebkitTextStroke: '0px #FFFFFF'}} onClick={toggle} >
            <Text fontSize='1em' fontWeight={500} top={''} color={'white'} > 
                {name}
            </Text>
        </Button>
    )
}

export default FilterPage;