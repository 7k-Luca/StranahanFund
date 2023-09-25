import React from 'react';
import { Box, Button, Text, Layer } from 'grommet';
import { Clear } from 'grommet-icons';

export default function ErrorMessageModal({ message, onClose }) {
    return (
        <Layer
        onEsc={onClose}
        onClickOutside={onClose}
        responsive={false}
        animation="fadeIn"
        >
        <Box pad="medium" gap="medium" width="medium">
            <Text size="large" alignSelf='center' weight="bold" >
            Error
            </Text> 
            <Text weight="bold" alignSelf="center">{message}</Text>
            <Box alignSelf='center'>
                <Clear color="#F98B85"/>
            </Box>
            <Box align='center' >
                <Button primary label="OK" onClick={onClose} />
            </Box>
        </Box>
        </Layer>
    );
}