import React, {useState, useEffect} from 'react'

import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"
import {signInWithGoogle} from "../components/Firebase";
import {auth} from '../components/Firebase';

export default function LoginPage() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            setUser(userAuth);
        })
    }, [auth])

    async function google() {
        await signInWithGoogle().then((result) => {
                window.location.href = "/";
            }
        ).catch((err) => console.log(err));
    }

    return (

        <Box bg={'transparent'} fontSize={'40px'}>
            <Center>
                <Heading>Login</Heading>
                <Button onClick={() => window.location.href = "/"}>Back</Button>
            </Center>

            <Box paddingTop={'500px'} display={'flex'} justifyContent={'space-evenly'}>
                <Button onClick={() => google()}>
                    signup
                </Button>
                <Text>logged in: {user?.displayName}</Text>

            </Box>

        </Box>

    )

}