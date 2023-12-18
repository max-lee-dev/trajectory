import React, {useState} from 'react';
import MajorTemplate from "../components/MajorTemplate";
import LandingPage from "../components/LandingPage";
import majorData from "../components/majorData";

import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"

function NewOnboard() {


    const [page, setPage] = useState(0);
    const [major, setMajor] = useState('Computer Science')
    return (
        <Box maxH={'90vh'}>
            {page === 0 && (
                <Box>
                    <LandingPage page={page} setPage={setPage}/>
                </Box>
            )}
            {page === 1 && (
                <Box>
                    <MajorTemplate name={majorData[major].name}
                                   description={majorData[major].description}
                                   imageArray={majorData[major].imageArray}
                                   numEcs={majorData[major].numEcs}
                                   page={page}
                                   setPage={setPage}
                    />
                </Box>
            )}

            {page === 2 && (
                <Box>

                </Box>

            )}
        </Box>

    )


}

export default NewOnboard