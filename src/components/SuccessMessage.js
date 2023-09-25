import React from 'react';
import { Box, Layer, Text } from 'grommet';

export default function SuccessMessage({ message }) {
    return (
        <Layer
        position="top"
        modal={false}
        margin={{ vertical: 'medium', horizontal: 'small' }}
        responsive={false}
        plain
        >
        <Box align="center" background="status-ok" pad="small" round>
            <Text weight="bold" color="white">{message}</Text>
        </Box>
        </Layer>
    );
}