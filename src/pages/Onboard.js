import React from 'react'
import {useState, useEffect} from 'react'
import OnboardFounder from "./OnboardFounder";


import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"

function Onboard() {
    const [role, setRole] = useState("");
    return (
        <Box fontSize={'40px'}>
            {role === "" && (
                <Box>
                    <Center>
                        <Heading>Onboard</Heading>
                    </Center>


                    <Box paddingTop={'500px'} display={'flex'} justifyContent={'space-evenly'}>
                        <Button onClick={() => setRole("founder")}>
                            Founder
                        </Button>

                        <Button onClick={() => setRole("team member")}>
                            Team Member
                        </Button>


                    </Box>
                </Box>
            )}

            {role === "founder" && (
                <OnboardFounder setRole={setRole}/>
            )}


        </Box>
    );
}

export default Onboard;