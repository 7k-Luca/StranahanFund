import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import {
    Button,
    Form,
    FormField,
    Heading,
    Page,
    PageContent,
    TextInput,
    Box,
    Text
} from 'grommet'
 

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, isPending, error } = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }

    return (
        <Page margin={{bottom: "xlarge"}}  align="center" justify="center" pad="xlarge"  >
            <PageContent>
                <Box margin="xlarge" alignSelf='center' align='center' width="large" border pad="large" round>
                    <Form onSubmit={handleSubmit} >
                        <Heading textAlign='center'>Admin Login</Heading>

                        {/* admin email address */}
                        <FormField label="Email" name="email" required>
                            <TextInput aria-label="email" name="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>                
                        </FormField>

                        {/* admin password */}
                        <FormField label="Password" name="password" required>
                            <TextInput aria-label="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>                
                        </FormField>

                        {/* Button */}
                        {!isPending && <Button color="brand" hoverIndicator="control" primary  label={<Text weight="bold">Log in</Text>} type="submit"/>}
                        {isPending && <Button disabled variate="primary" label="loading..."/>}
                        {error && <Box width="medium"><Text weight="bold">{error}</Text></Box>}
                    </Form>
                </Box>
            </PageContent>
        </Page>
        
    )
}
