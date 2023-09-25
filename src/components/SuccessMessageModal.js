import React from 'react';
import { Box, Button, Layer, Text } from 'grommet';
import { Validate } from 'grommet-icons'

export default function SuccessMessageModal({ message, onClose }) {
    return (
        <Layer
        onEsc={onClose}
        onClickOutside={onClose}
        responsive={false}
        animation="fadeIn"
        >
        <Box round="large" pad="medium" gap="small" width="medium">
            <Text size="large" alignSelf='center' weight="bold" >
            Success
            </Text>            
            <Text weight="bold" textAlign='center' alignSelf="center">{message}</Text>
            <Box alignSelf='center'>
                <Validate color='#8dd4b2' />
            </Box>
            <Box align='center' >
                <Button primary label="OK" onClick={onClose} />
            </Box>
        </Box>
        </Layer>
    );
}