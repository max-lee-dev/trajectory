import React, {useEffect, useState} from 'react';
import {auth, provider} from '../components/Firebase';
import {db} from '../components/Firebase';
import {setDoc, doc, updateDoc} from "firebase/firestore";
import {updateProfile} from "firebase/auth";
import {collection, getDocs} from "firebase/firestore";


import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"
import {GoogleSignIn} from "../components/GoogleSignin";

function OnboardFounder({setRole}) {

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

            <Box paddingTop={'500px'} display={'flex'} justifyContent={'space-evenly'}>
                <Button onClick={() => GoogleSignIn(userList)}>
                    signup {auth?.currentUser?.displayName}
                </Button>
            </Box>

        </Box>
    );
}

export default OnboardFounder;