import React from 'react';
import { Box, Button, Heading, Layer, Text } from 'grommet';
import { Close, Trash } from 'grommet-icons';

export default function DeleteModal({ name, onDelete, onClose }) {
    const handleDelete = () => {
        onDelete();
        onClose();
    };

    return (
        <Layer onEsc={onClose} onClickOutside={onClose} position="center" modal>
        <Box width="medium" pad="medium" gap="medium" background="white" round="medium">
            <Heading level={3} textAlign="center">
                Delete
            </Heading>
            <Text textAlign="center">
                Are you sure you want to delete <strong>{name}</strong>?
            </Text>
            <Box direction="row" justify="center" gap="medium" margin={{ top: 'medium' }}>
                    <Button
                        label={<Text weight="bold">Cancel</Text>}
                        icon={<Close />}
                        onClick={onClose}
                        hoverIndicator="light-2"
                        size="small"
                    />
                    <Button
                        label={<Text weight="bold">Delete</Text>}
                        icon={<Trash />}
                        color="status-critical"
                        onClick={handleDelete}
                        hoverIndicator="status-critical"
                        size="small"
                    />
            </Box>
        </Box>
    </Layer>
    );
}
