import React, {useState, useEffect} from 'react';
import {auth, provider} from '../components/Firebase';
import {signInWithGoogle} from "../components/Firebase.js";
import {setDoc, doc, updateDoc} from "firebase/firestore";
import {updateProfile} from "firebase/auth";
import {collection, getDocs} from "firebase/firestore";
import {Text, Box, Button, HStack, VStack, Form, Input, Center} from "@chakra-ui/react";


import {db} from "../components/Firebase";

function NewAccountForm() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [state, setState] = useState("")

    const [user, setUser] = useState({})
    const getCollection = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {

            if (doc.data().uid === auth.currentUser.uid) setUser(doc.data())
        });
    }
    useEffect(() => {

        getCollection();

    }, []);

    async function updateAccountInfo() {


        await updateProfile(auth.currentUser, {displayName: firstName + " " + lastName}).catch((err) => console.log(err));


        await updateDoc(doc(db, "users", auth.currentUser.uid), {
            firstName: firstName,
            lastName: lastName,
            state: state,
        })

        // user done with form, redirect to profile page

        getCollection();

        window.location.reload();


    }


    return (
        <Box>
            <Center>
                <VStack>
                    <Text paddingBottom={'100px'}>
                        New Account Form

                    </Text>

                    <Input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
                    <Input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
                    <Input placeholder="State" onChange={(e) => setState(e.target.value)}/>
                    <Button onClick={() => updateAccountInfo()}>
                        Submit
                    </Button>
                    <Button onClick={() => auth.signOut()}>
                        Sign Out
                    </Button>


                    <Text>
                        {auth?.currentUser?.displayName}
                        {user?.firstName}

                        {user?.uid}
                    </Text>

                </VStack>
            </Center>
        </Box>

    )

}

export default NewAccountForm;