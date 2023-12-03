import React, {useState, useEffect} from 'react'

import {Box, Button, Center, Flex, Heading, Input, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"
import {signInWithGoogle} from "../components/Firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../components/Firebase';

export default function LoginPage() {

    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

    async function login() {
        await signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                window.location.href = "/";
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (

        <Box bg={'transparent'} fontSize={'40px'}>
            <Center>
                <Heading>Login</Heading>
                <Button onClick={() => window.location.href = "/"}>Back</Button>
            </Center>


            <Box paddingTop={'100px'} display={'flex'} justifyContent={'space-evenly'}>
                <VStack>
                    <Box>
                        <Text> log in with email</Text>
                        <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <Button onClick={() => login()}>log in</Button>


                    </Box>
                    <Button onClick={() => google()}>
                        log in with google
                    </Button>
                    <Text>logged in: {user?.displayName}</Text>
                </VStack>
            </Box>


        </Box>

    )

}