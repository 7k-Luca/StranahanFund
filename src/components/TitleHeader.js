// TitleHeader.js
import React from 'react';
import { Box, Heading } from 'grommet';

const TitleHeader = ({ title, vert }) => {
    return (
        <Box
        as="header"
        background="brand"
        pad={{ horizontal: 'large' }}
        margin={{ vertical: `${vert}`}}
        align="center"
        >
        <Heading textAlign='center' level={2} size="large" color="white">
            {title}
        </Heading>
        </Box>
    );
};

export default TitleHeader;