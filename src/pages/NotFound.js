import React from 'react'
import {
  Box,
  Button,
  Heading,
  Image,
  Paragraph
} from "grommet"
import NotFoundPic from "../assets/NotFoundPic.png"
import { useAuthContext } from '../hooks/useAuthContext'

export default function NotFound() {
  const { user } = useAuthContext()
  return (
    
    <Box
    align="center"
    justify="center"
      
    pad="medium"
  >
    <Image  src={NotFoundPic} fit="contain" />
    <Heading textAlign='center' level={1} size="xlarge" margin={{ bottom: 'medium' }}>
      404 - Page Not Found
    </Heading>
    <Paragraph textAlign="center">
      Oops! The page you are looking for doesn't exist.
    </Paragraph>
    <Box margin={{ top: 'medium' }}>
      {!user ? (<Button primary color='brand' pad="small" hoverIndicator="control"  href="/" label="Go to Homepage" /> ) : (<Button primary color='brand' pad="small" hoverIndicator="control"  href="/dashboard" label="Go to Dashboard" />
      )}
    </Box>
  </Box>

  )
}
