import React, { useState } from 'react';
import { Box, Button, Form, FormField, Heading, Layer, TextArea, TextInput, Text } from 'grommet';
import { Save, Close } from 'grommet-icons';

export default function UpdateModal({ data, onUpdate, onClose, fields }) {
        const [formData, setFormData] = useState(data);
        const [hasChanges, setHasChanges] = useState(false);

        const handleSubmit = (e) => {
            e.preventDefault();
            onUpdate(formData);
            onClose();
        };
        
        const handleInputChange = (name, value) => {
            setFormData({ ...formData, [name]: value });
            // Compare the new value with the original value
            if (data[name] !== value) {
                setHasChanges(true);
            } else {
                setHasChanges(false);
            }
        }

        return (
            <Layer onEsc={onClose} onClickOutside={onClose}>
            <Box width="medium" pad="medium" gap="medium" round="medium">
                <Heading level={3} alignSelf="center">
                Update
                </Heading>
                <Form onSubmit={handleSubmit}>
                {fields.map((field) => (
                    <FormField key={field.name} label={field.label}>
                    {field.type === 'text' ? (
                        <TextInput
                        value={formData[field.name]}
                        onChange={(event) => handleInputChange(field.name, event.target.value)}
                
                        />
                    ) : field.type === 'textarea' ? (
                        <TextArea
                        value={formData[field.name]}
                        onChange={(event) => handleInputChange(field.name, event.target.value)}
                        required
                        />
                    ) : null}
                    </FormField>
                ))}
                <Box direction="row" pad={{vertical: "small"}} justify="center" gap="medium"  margin={{ top: 'medium' }}>
                    <Button label={<Text weight="bold">Cancel</Text>} onClick={onClose} hoverIndicator="light-2" icon={<Close />}  size="small" />
                    <Button
                            type="submit"
                            label={<Text weight="bold">Save</Text>}
                            icon={<Save />}
                            primary
                            hoverIndicator="brand"
                            size="small"
                            disabled={!hasChanges}
                        />
                </Box>
                </Form>
            </Box>
            </Layer>
        );
}