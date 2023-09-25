import React from 'react'
import {
    Box,
    Footer as GrommetFooter,
    Anchor,
    Text,
    ResponsiveContext
} from "grommet"
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <GrommetFooter background="dark-2" pad="medium">
            <ResponsiveContext.Consumer>
                {size => (
            <Box justify="between" align={size !== 'small' ? 'center' : 'start'} style={{minWidth: '100%'}} direction={size !== 'small' ? 'row' : 'column'} >
            <Box gap="small" direction='row' align='center'>
                <Anchor as={Link} to="/login" label="Admin Login" color="white" />
                <Text textAlign='center' color="white">|</Text>
                <Anchor as={Link} to='/newsletter-signup' label="Newsletter Signup" color="white" />
            </Box>
            <Box >
                <Text  textAlign="center" size="small" color="light-3">
                    Stranahan Education Endowment Fund &copy; {new Date().getFullYear()}
                </Text>
            </Box>
            </Box>
            )}
            </ResponsiveContext.Consumer>
        </GrommetFooter>
    )
}
