import React, {useEffect, useState} from 'react';
import {auth, db} from './Firebase.js';
import {collection, getDocs} from "firebase/firestore";

import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, SimpleGrid, Stack, HStack, VStack, Badge, LinkBox, LinkOverlay,Menu,MenuButton,MenuList,MenuItem,MenuItemOption,MenuGroup,MenuOptionGroup,MenuDivider,IconButton,Spinner} from "@chakra-ui/react"
import {TriangleUpIcon, HamburgerIcon} from '@chakra-ui/icons'

import {Card, CardGrid} from './Card.js';

export function Renderer(){

    const hiring=[
        "Developer",
        "Media",
        "Designer"
    ];


    useEffect(() => {
        const handleScroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                console.log("User has scrolled to the bottom of the page");
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return(
        <>
        <RenderGridStep/>
        <Center>
            <Spinner m={'40px'}/>
        </Center>
        </>
    )
}


function RenderGridStep(){

    const [myOrganizations, setMyOrganizations] = useState([])
    useEffect(() => {
        const temp = [];

        const getMyOrganizations = async () => {
            const querySnapshot = await getDocs(collection(db, "organizations"));
            querySnapshot.forEach((doc) => {temp.push(doc.data())});
            setMyOrganizations(temp)
        }
        getMyOrganizations();
    })

    return (
        <CardGrid orgObj={myOrganizations} columns={4}/>
    );

}


function grabOrgsFromCSV(){

    const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>
     data
       .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
       .split('\n')
       .map(v => v.split(delimiter));

        fetch('') // update with csv 
     .then(response => response.text())
     .then(csvData => {
        const parsedData = CSVToArray(csvData, ",");

        //     console.log(parsedData[i][17],parsedData[i][18]);

     })
     .catch(error => console.error('Error:', error));
}





