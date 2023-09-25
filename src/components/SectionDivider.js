// SectionDivider.js
import React from 'react';
import { Box, Heading } from 'grommet';

const SectionDivider = ({ title }) => {
    return (
        <Box align="center" margin={{ vertical: 'medium' }}>
        <Box width="80px" height="4px" background="brand" margin="small" />
        <Heading level={3} margin="xsmall" textAlign="center">
            {title}
        </Heading>
        <Box width="80px" height="4px" background="brand" margin="small" />
        </Box>
    );
};

export default SectionDivider;