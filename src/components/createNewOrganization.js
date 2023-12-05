import React, {useEffect, useState} from 'react';
import {auth, provider} from './Firebase';
import {setDoc, doc, updateDoc} from "firebase/firestore";
import {updateProfile} from "firebase/auth";
import {collection, getDocs, addDoc} from "firebase/firestore";
import {db} from "./Firebase";


import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"

export async function createNewOrganization(organizationDetails, user) {

    console.log(organizationDetails);

    const organizationName = organizationDetails.name;
    const organizationDescription = organizationDetails.description;
    const organizationWebsite = organizationDetails.website;
    const organizationImage = organizationDetails.image;

    const organization = {
        name: organizationName,
        description: organizationDescription,
        website: organizationWebsite,
        image: organizationImage,
        founder: user?.uid,
    }

    await addDoc(collection(db, "organizations"), organization)


}