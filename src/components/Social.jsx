import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaFacebook,FaGoogle,FaSpotify,FaShopify } from 'react-icons/fa'
import { ourprovider } from './ThemeProvider'
import { useContext } from 'react'
function Social() {
    // const changestate=useContext()
    // // console.log(changestate)
    return (
        <HStack spacing="24">
            <Icon as={FaFacebook} boxSize="50" />
            <Icon as={FaGoogle} boxSize="50" />
            <Icon as={FaSpotify} boxSize="50" />
            <Icon as={FaShopify} boxSize="50" />
        </HStack>
    )
}

export default Social