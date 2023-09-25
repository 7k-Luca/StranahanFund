import React from 'react';
import { Grommet, Heading, Box } from 'grommet';

const Header = () => {
    return (
        <Grommet>
        <Box align="center" pad="medium">
            <Heading textAlign="center" level={2}>
            Make A Donation Today
            </Heading>
            <Heading textAlign="center" level={2}>
            Be The Change in a Student's Future
            </Heading>
        </Box>
        </Grommet>
    );
};

export default Header;