import React from 'react';
import {auth, provider} from './Firebase';
import {setDoc, doc, updateDoc} from "firebase/firestore";
import {db} from "./Firebase";


import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"

export function createNewOrganization({user}) {

    const role = user?.role;
    const uid = user?.uid;
    const email = user?.email;
    const displayName = user?.displayName;
    const photoURL = user?.photoURL;

    const organization = {
        name: 'new organization',
        description: 'new organization description',
        founder: uid,
        members: [uid],
        admins: [uid],
        roles: {
            founder: [uid],
            admin: [uid],
            member: [uid],
        }
    }

    const organizationRef = doc(db, "organizations", organization.name);

    const organizationDoc = {
        name: organization.name,
        description: organization.description,
        founder: organization.founder,
        members: organization.members,
        admins: organization.admins,
        roles: organization.roles
    }

    const userRef = doc(db, "users", uid);

    const userDoc = {
        name: displayName,
        email: email,
        photoURL: photoURL,
        role: role,
        organizations: [organization.name]
    }

    const updateUserDoc = async () => {
        await updateDoc(userRef, userDoc);
    }

    const updateOrganizationDoc = async () => {
        await setDoc(organizationRef, organizationDoc);
    }

    const createOrganization = async () => {
        await updateUserDoc();
        await updateOrganizationDoc();
    }


}