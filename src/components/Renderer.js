import React, {useEffect, useState} from 'react';
import {auth, db} from './Firebase.js';
import {collection, getDocs} from "firebase/firestore";

import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, SimpleGrid, Stack, HStack, VStack, Badge, LinkBox, LinkOverlay,Menu,MenuButton,MenuList,MenuItem,MenuItemOption,MenuGroup,MenuOptionGroup,MenuDivider,IconButton,Spinner} from "@chakra-ui/react"
import {TriangleUpIcon, HamburgerIcon} from '@chakra-ui/icons'

import { CardGrid, Card} from './findECs/findECsCard.js';

import CSV from '../assets/data/TESTtalem.csv'

export function Renderer({columns}){

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
        <RenderGridStep columns={columns}/>
        <Center>
            <Spinner m={'40px'}/>
        </Center>
        </>
    )
}


function RenderGridStep({columns}){

    const [myOrganizations, setMyOrganizations] = useState([])

    // firestore db
    // useEffect(() => {
    //     const temp = [];

    //     const getMyOrganizations = async () => {
    //         const querySnapshot = await getDocs(collection(db, "organizations"));
    //         querySnapshot.forEach((doc) => {temp.push(doc.data())});
    //         setMyOrganizations(temp)
    //         console.log(myOrganizations);
    //     }
    //     getMyOrganizations();
    // })

    useEffect(() => {    
        const CSVToArray = (data, delimiter = ',', omitFirstRow = false) => data
       .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
       .split('\n')
       .map(v => v.split(delimiter));

        const grabOrgsFromCSV = async () => {
            try {
                const response = await fetch(CSV); // update with csv 
                const csvData = await response.text();
                let arr = CSVToArray(csvData, ",");
                console.log(arr);
                let retArr = [];
                for (let i=1; i<arr.length; i++){
                    let obj = {};
                    for(let j=0; j<arr[0].length; j++){
                        obj[arr[0][j]] = arr[i][j];
                    }
                    retArr.push(obj);            
                }
                setMyOrganizations(retArr);
                console.log(myOrganizations);
            } catch (error) {
                console.error('Error:', error);
                setMyOrganizations("An error occurred while fetching your data.");
            }
        };

        grabOrgsFromCSV();
    }, []);

    return (
        <CardGrid orgObj={myOrganizations} columns={1}/>
    );

}




