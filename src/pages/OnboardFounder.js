import React, {useEffect, useState} from 'react';
import {auth, provider} from '../components/Firebase';
import {db} from '../components/Firebase';
import {setDoc, doc, updateDoc} from "firebase/firestore";
import {updateProfile} from "firebase/auth";
import {collection, getDocs} from "firebase/firestore";


import {Box, Button, Center, Flex, Heading, Input, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"
import {GoogleSignIn} from "../components/GoogleSignin";
import {EmailSignup} from "../components/EmailSignup";

function OnboardFounder({setRole}) {

    const [userInfo, setUserInfo] = useState({})


    const [userList, setUserList] = useState([])
    useEffect(() => {
        const getCollection = async () => {
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {

                setUserList((userList) => [...userList, doc.data()])
            });
        }
        getCollection();

    }, [])


    return (
        <Box bg={'transparent'} fontSize={'40px'}>
            <Center>
                <Heading>Onboard Founder</Heading>
            </Center>


            <Button onClick={() => setRole("")}>
                Back
            </Button>

            <Box paddingTop={'200px'} display={'flex'} flexDir={'column'} justifyContent={'space-evenly'}>
                <VStack>

                    <Box>
                        <Input placeholder="email"
                               onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}/>
                        <Input placeholder={'password'}
                               onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}/>

                        <Button onClick={() => EmailSignup(userList, userInfo)}>
                            Sign Up
                        </Button>

                    </Box>

                    <Button onClick={() => GoogleSignIn(userList)}>
                        Sign Up with Google {auth?.currentUser?.displayName}
                    </Button>
                </VStack>

            </Box>

        </Box>
    );
}

export default OnboardFounder;