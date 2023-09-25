import {useState} from 'react'
import {
    Box,
    Text,
    Form,
    FormField,
    TextInput,
    Button
} from 'grommet'

// components
import TitleHeader from '../../components/TitleHeader'
import SuccessMessageModal from '../../components/SuccessMessageModal'
import ErrorMessageModal from '../../components/ErrorMessageModal'

// firestore
import { useFirestore } from '../../hooks/useFirestore'

export default function Newsletter() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { addDocument, response } = useFirestore('newsletter')

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        const post = {
            name, 
            email
        }

        await addDocument(post)
        if(response.error) {
            setErrorMessage('An error occured while submitting the form. Please try again latter.')
            setShowErrorModal(true);
        } else {
            setShowSuccessModal(true)
            setName('')
            setEmail('')
        }
    }

    const closeSuccessModal = () => {
        setShowSuccessModal(false);
    }
    const closeErrorModal = () => {
        setShowErrorModal(false);
    }

    return (
        <Box margin={{ bottom: 'xlarge' }} align="center" justify="center">
            <Box width="large" align="center">
            <Box pad="large">
                <TitleHeader title="Join the Stranahan Education Endowment Fund Newsletter" />
            </Box>
            <Box direction="column" align="center" gap="medium">
                <Text textAlign="center" size="large">
                Stay connected with Stranahan High School and make a difference in the lives of students by subscribing to our
                newsletter. By joining our mailing list, you'll be at the forefront of supporting education, empowering
                students, and fostering a brighter future for our community.
                </Text>
                <Text textAlign="center" weight="bold" size="medium">
                Receive regular updates on:
                </Text>
                <Box width="medium"  margin={{ bottom: 'medium' }}>
                <ul  style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '10px' }}>Exciting events and fundraisers</li>
                    <li style={{ marginBottom: '10px' }}>Success stories from students and alumni</li>
                    <li style={{ marginBottom: '10px' }}>Opportunities to get involved and volunteer</li>
                    <li style={{ marginBottom: '10px' }}>Educational resources and tips for students</li>
                    <li style={{ marginBottom: '10px' }}>Impactful initiatives and projects</li>
                </ul>
                </Box>
                <Box align="center">
                <Form onSubmit={handleFormSubmit}>
                    <Box direction="row" gap="medium">
                    <FormField label="Name" htmlFor="name" name="name">
                        <TextInput
                        placeholder="John Doe"
                        required
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </FormField>
                    <FormField label="Email" htmlFor="email" name="email">
                        <TextInput
                        placeholder="email@gmail.com"
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormField>
                    </Box>
                    <Box justify='center' pad={{top: 'medium'}}>
                    <Button type="submit" alignSelf='center' color='brand' pad="small" hoverIndicator="control" primary label={<Text weight="bold">Subscribe</Text>} />    
                    </Box>
                </Form>
                </Box>
            </Box>
            </Box>

            {/* Success Modal */}
            {showSuccessModal && (
                <SuccessMessageModal message="Welcome to the Stranahan Education Endowment Fund Newsletter!" onClose={closeSuccessModal}/>
            )}

            {/* Error Modal */}
            {showErrorModal && (
                <ErrorMessageModal message={errorMessage} onClose={closeErrorModal} />
            )}
        </Box>
    )
}
