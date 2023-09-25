import { useState } from 'react'

// ui
import {
    Form,
    Box,
    FormField,
    TextInput,
    TextArea,
    Button,
    Paragraph,
    Anchor,
    Text
} from 'grommet'
import {
    Mail 
} from 'grommet-icons'

// firestore
import { useFirestore } from '../../hooks/useFirestore'

// components
import TitleHeader from '../../components/TitleHeader'
import ErrorMessageModal from '../../components/ErrorMessageModal'
import SuccessMessageModal from '../../components/SuccessMessageModal'

export default function Contact() {
    const { addDocument, response } = useFirestore('contacts')
    
    // form field values
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault()

    const post = {
        name,
        email,
        message
    }

    // add document to database (contacts)
    await addDocument(post)
    if(response.error) {
        // If there's an error, set the error message and show the error modal
        setErrorMessage('An error occured while submitting the form. Please try again later.')
        setShowErrorModal(true);
    } else {
        // If there's no error, show the success modal and clear the form fields
        setShowSuccessModal(true);
        setName('')
        setEmail('')
        setMessage('')
    }}

    const closeSuccessModal = () => {
        setShowSuccessModal(false);
    }

    const closeErrorModal = () => {
        setShowErrorModal(false);
    }

    return (
        
            <Box  margin={{bottom: "xlarge"}}  align="center" justify="center" pad="xlarge">
                <Box width="xlarge" align='center'>
                <Box pad={{bottom: "xlarge"}}>
                    <TitleHeader title="Contact Us"/>
                </Box>
                <Box direction="row" align='center' gap="large">
                    <Box align='start'>
                        <Box direction='column' >
                            <Paragraph size="large">Got a question, need advice, or want to share something with us? Feel free to reach out by email below or simply send us a message through this page. While we operate with a lean team, we'll do our best to get back to you as promptly as possible, even though it may take a few days. Your patience will be rewarded with valuable insights and assistance, making the wait worthwhile.</Paragraph>
                            <Box alignSelf='start' align='center' direction='row-responsive' gap="small" pad={{top: "medium"}}>
                                <Mail />
                                <Anchor
                                    alignSelf='center'
                                    href="mailto:stranahanfund@gmail.com?"
                                    subject="subject text"
                                    label="stranahanfund@gmail.com"
                                />
                            </Box>
                        </Box>
                        
                    </Box>
                    <Box align='end' >
                    <Form onSubmit={handleSubmit}>
                        
                    <FormField label="Name" htmlFor="name" name="name">
                        <TextInput placeholder="John Doe" required type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} value={name} />
                    </FormField>
                    <FormField label="Email" htmlFor="email" name="email">
                        <TextInput placeholder="email@gmail.com" required type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </FormField>
                    <FormField label="Message" htmlFor='message' name="message">
                        <TextArea 
                            aria-label="text area"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            required
                            resize={false}
                            placeholder='New Message'
                        />
                    </FormField>
                    <Button type='submit' color="brand" hoverIndicator="control" primary  label={<Text weight="bold">Send</Text>}/>
                    </Form>
                    </Box>
                    </Box>
                </Box>
            

            {/* Success Modal */}
            {showSuccessModal && (
                <SuccessMessageModal message="Message Sent!" onClose={closeSuccessModal}/>
            )}

            {/* Error Modal */}
            {showErrorModal && (
                <ErrorMessageModal message={errorMessage} onClose={closeErrorModal} />
            )}
        </Box>
    )
}
