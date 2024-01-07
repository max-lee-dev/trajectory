import {Box, Button, Center, SimpleGrid, Text} from "@chakra-ui/react";
import gridFindECsLogo from "../../assets/img/gridFindECsLogo.png";
import React from "react";
import {motion} from "framer-motion";
import {Card} from "./Card";

export default function MainApp({orgArr, columns, selectedMajorArr, sortBy, onFilterClick}) {
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


    const feedbackCardObj = {
        blurb: "",
        description: "",
        impact: "",
        major: "",
        momentum: "",
        name: "",
        size: "",
        type: "",
        website: "",
        type: "feedback"
    }
    // this is change hi
    // test
    
    // imma fuck up the other branch lol
    if (orgArr.size < 5) {
        orgArr.push(feedbackCardObj);
    } else {
        orgArr.splice(5, 0, feedbackCardObj)
    }

    return (
        <motion.div
            initial={{
                opacity: 0,

            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 0.75,
                ease: "easeInOut"
            }}

        >
            <Box>
                <Center paddingBottom={6} ml={2} pt={3}>
                    <img src={gridFindECsLogo} width={['335px']}/>
                </Center>
                <Box zIndex={1} top={'12px'} sx={{position: '-webkit-sticky', /* Safari */ position: 'sticky'}}>

                    <Center>
                        <Button zIndex={1} bg={'#360503ff'}
                                align={'center'}
                                onClick={onFilterClick} mb={'15px'}
                                width={'20em'}
                                color={'white'}
                                _hover={{
                                    bg: '#f5f5f5',
                                    color: "#360503ff",
                                }}
                                h={'35px'}
                            // borderWidth={'3px'} borderColor={'badbffff'} borderRadius={'4px'}
                        >
                            <Text fontSize='14px' fontWeight={600} top={''}>
                                Edit your interests!
                            </Text>
                        </Button>
                    </Center>


                </Box>

                <SimpleGrid columns={columns} spacing={8}>
                    {orgArr.map(orgObj => <Card key={orgObj.name} orgObj={orgObj}/>)}
                </SimpleGrid>
                {/*<Box p={'8px'}>*/}
                {/*    <Center>*/}
                {/*        <Button zIndex={1} bg={'#360503ff'} position={'absolute'} top={'0px'} right={'0px'}/>*/}
                {/*    </Center>*/}
                {/*</Box>*/}
            </Box>
        </motion.div>
    );
}
