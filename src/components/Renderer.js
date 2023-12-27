import React, {useEffect, useState} from 'react';
import {auth, db} from './Firebase.js';
import {collection, getDocs} from "firebase/firestore";
import {MdArrowDropDown} from "react-icons/md";

import {
    Divider,
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Spacer,
    Text,
    SimpleGrid,
    Stack,
    HStack,
    VStack,
    Badge,
    LinkBox,
    LinkOverlay,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,
    Spinner,
    Select
} from "@chakra-ui/react"
import {TriangleUpIcon, HamburgerIcon} from '@chakra-ui/icons'

import {CardGrid, Card} from './findECs/findECsCard.js';

import CSV from '../assets/data/v1.2.csv'

export function Renderer({columns}) {

    const hiring = [
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


    return (
        <>
            <RenderGridStep columns={columns}/>
            <Center>
                <Spinner m={'40px'}/>
            </Center>
        </>
    )
}


function RenderGridStep({columns}) {

    const [myOrganizations, setMyOrganizations] = useState([])
    const [majorArr, setMajorArr] = useState([])
    const [selectedMajor, setSelectedMajor] = useState("")
    const [sortBy, setSortBy] = useState("")

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
        const lineEndingRegex = /\r\n|[\n\r\u2028\u2029]/g;
        const CSVToArray = (data, delimiter = '|', omitFirstRow = false) => data
            .replace(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/g, '|')
            .replace(/"/g, '')
            .slice(omitFirstRow ? data.indexOf(lineEndingRegex) + 1 : 0)
            .split(lineEndingRegex)
            .map(v => v.split(delimiter));

        const grabOrgsFromCSV = async () => {
            try {
                const response = await fetch(CSV); // update with csv 
                const csvData = await response.text();
                let arr = CSVToArray(csvData, "|");
                // console.log(arr);

                let majorColumn = 2;
                //find which column is major
                for (let i = 0; i < arr.length; i++) {
                    if (arr[0][i] == "major") {
                        majorColumn = i;
                        break;
                    }
                }

                let retArr = [];
                let retMajorArr = [];

                for (let i = 1; i < arr.length; i++) { // i is for each org/ec
                    let obj = {};
                    for (let j = 0; j < arr[0].length; j++) { // j is index of param
                        obj[arr[0][j]] = arr[i][j];
                        if (j == majorColumn && !retMajorArr.includes(arr[i][j])) {
                            retMajorArr.push(arr[i][j]);
                        }
                    }
                    retArr.push(obj);
                }
                setMyOrganizations(retArr);
                setMajorArr(retMajorArr)
            } catch (error) {
                console.error('Error:', error);
                setMyOrganizations("An error occurred while fetching your data.");
            }
        };

        grabOrgsFromCSV();
    }, []);

    function handleMajorChange(e) {
        // console.log("major is now " + e.target.value);
        setSelectedMajor(e.target.value);
    }

    function handleSortChange(e) {
        // setSortBy(e.target.value);
        console.log("sorting by " + sortBy);
    }

    return (
        <Box mt={'-0.6em'}>
            <Select icon={<MdArrowDropDown/>} placeholder={'Filter'} size={'md'} bg={'white'}
                    align={'center'}
                    onChange={handleMajorChange} mb={'30px'}>
                {majorArr.map(major =>
                    <option key={major} value={major}>
                        {major}
                    </option>
                )}
            </Select>
            {/* <Button colorScheme='gray' color={'black'} m={'5px'} size={'sm'} onClick={handleSortChange} value='overall'> Overall </Button>
            <Button bg={'white'} color={'blue'} m={'5px'} size={'sm'} onClick={handleSortChange} value='size'> Size </Button>
            <Button  bg={'white'} color={'orange'} m={'5px'} size={'sm'} onClick={handleSortChange} value='impact'> Impact </Button>
            <Button  bg={'white'} color={'green'} m={'5px'} size={'sm'} onClick={handleSortChange} value='momentum'> Momentum </Button> */}
            <CardGrid orgArr={myOrganizations} columns={1} selectedMajor={selectedMajor} sortBy={sortBy} mt={'1px'}/>
        </Box>
    );

}




