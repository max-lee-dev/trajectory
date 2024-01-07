import React, {useEffect, useState} from 'react';
import {collection, getDocs} from "firebase/firestore";
import {MdArrowDropDown} from "react-icons/md";
import majorColors from './findECs/majorColors.json';
import {motion, AnimatePresence} from 'framer-motion';


import {
    Divider,
    Box,
    Button,
    Center,

} from "@chakra-ui/react"

import MainApp from './findECs/MainApp.js';
import FilterPage from './findECs/filterPage.js';

import CSV from '../assets/data/orgList.csv'

export function Renderer() {


    const [myOrganizations, setMyOrganizations] = useState([])
    const [majorArr, setMajorArr] = useState([])
    const [selectedMajor, setSelectedMajor] = useState("")
    const [selectedMajorArr, setSelectedMajorArr] = useState(new Set([]))
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
                    obj["type"] = "org";
                    console.log(obj);
                    retArr.push(obj);
                }
                setMyOrganizations(retArr);
                setMajorArr(retMajorArr);
                console.log(retMajorArr)
            } catch (error) {
                console.error('Error:', error);
                setMyOrganizations("An error occurred while fetching your data.");
            }
        };

        grabOrgsFromCSV();
    }, []);

    const [showFilterPage, setShowFilterPage] = useState(true)

    const onFilterClick = (e) => {
        console.log("clicked filter")

        if (selectedMajorArr.size === 0) {
            console.log("filtering by " + Array.from(selectedMajorArr))
            majorColors.forEach(x => {
                selectedMajorArr.add(x.name)
            })
        }
        console.log(selectedMajorArr)
        e.preventDefault();
        setShowFilterPage(!showFilterPage)
    }


    return (
        <Box mt={'-0.6em'} paddingTop={'5%'}>
            {/* <Button colorScheme='gray' color={'black'} m={'5px'} size={'sm'} onClick={handleSortChange} value='overall'> Overall </Button>
            <Button bg={'white'} color={'blue'} m={'5px'} size={'sm'} onClick={handleSortChange} value='size'> Size </Button>
            <Button  bg={'white'} color={'orange'} m={'5px'} size={'sm'} onClick={handleSortChange} value='impact'> Impact </Button>
            <Button  bg={'white'} color={'green'} m={'5px'} size={'sm'} onClick={handleSortChange} value='momentum'> Momentum </Button> */}
            {showFilterPage ?
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -600

                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.75,
                        ease: "easeInOut"
                    }}

                    exit={{
                        transition: {duration: 0.5},


                    }}
                >

                    <FilterPage selectedMajorArr={selectedMajorArr} majorArr={majorArr}
                                onFilterClick={onFilterClick}/>
                </motion.div>
                :

                <MainApp orgArr={myOrganizations} columns={1} selectedMajorArr={selectedMajorArr} sortBy={sortBy}
                         mt={'1px'} onFilterClick={onFilterClick}/>
            }
        </Box>

    )
}







