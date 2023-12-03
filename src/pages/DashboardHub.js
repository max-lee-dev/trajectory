import React, {useEffect, useState} from 'react';
import {auth, provider} from '../components/Firebase';
import FounderDashboard from "./FounderDashboard";

import {Box, Button, Center, Flex, Heading, Image, Link, Spacer, Text, VStack} from "@chakra-ui/react"

function DashboardHub({user}) {

    const role = user?.role;

    return (
        <Box bg={'transparent'} fontSize={'40px'}>


            {role === 'founder' && (

                <FounderDashboard user={user}/>
            )}

        </Box>
    );
}

export default DashboardHub;