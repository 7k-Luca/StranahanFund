import React from 'react'
import {
    Box,
    Heading,
    Text,
    Card,
    CardBody,
    Grid,
    Button,
    Accordion,
    AccordionPanel
} from "grommet"
import SectionDivider from '../../components/SectionDivider'
import TitleHeader from '../../components/TitleHeader'
import { useCollection } from '../../hooks/useCollection';

const data = [
    {
        title: 'Personal Info',
        message: 'Tell us about yourself! Provide your name, contact information, and any relevant personal details that will help us get to know you better.'
    },
    {
        title: 'Interests and Achievements',
        message: "Share your hobbies, interests, and any extracurricular activities you're involved in. Highlight any notable achievements or awards you've received."
    },
    {
        title: 'Internships and Jobs',
        message: "Describe any internships or part-time jobs you've had. Let us know how these experiences have contributed to your personal growth and career aspirations."
    },
    {
        title: 'College Preferences',
        message: "Describe any internships or part-time jobs you've had. Let us know how these experiences have contributed to your personal growth and career aspirations."
    },
    {
        title: 'Your Essay',
        message: "Describe any internships or part-time jobs you've had. Let us know how these experiences have contributed to your personal growth and career aspirations."
    },
    {
        title: 'Financial Aid',
        message: "Describe any internships or part-time jobs you've had. Let us know how these experiences have contributed to your personal growth and career aspirations."
    },
]

const scholarshipOptions = [
    {
        title: 'Keith Skinner Memorial Scholarship', 
        info: "The Keith Skinner Memorial Scholarship is SEEF’s four-year, one thousand dollar scholarship towards a four year college or university. It has been named in honor of a true Dragon. He excelled as a student and athlete and later as a coach and staff member at SHS. He was also an active booster of his school in the community.",
    },
    {
        title: 'Willie Allen Scholarship', 
        info: "The Willie Allen Memorial Scholarship, a SEEF scholarship, A total of two thousand dollor or more a year depending on fund available for four years. pays tribute to a devoted Dragon who was a strong advocate for students and fellow educators. As one of the pioneering teachers during the integration period, he played a crucial role in fostering the development of talented student athletes and dedicated much of his time to Stranahan and the church community.",
    },
    {
        title: 'Technical/Vocational Scholarship', 
        info: "The Technical/Vocational Scholarship is SEEF's one or two year scholarship granted toward a technical, vocational, or medical career. Especially those students that are pursuing a beginning training certificate or license. Such as Culinary School, X-ray technician, welder, cosmetology, ect. This scholarship opportunity is open to a diverse range of students providing essential support for your professional journey.",
    },
]

export default function Scholarship() {
    const { documents: scholarshipLinks } = useCollection('scholarshipLinks')
    return (
        <Box  pad="large">
                
                <Box alignSelf='center' direction="column" gap='medium' width="xlarge">
                    <TitleHeader  title="Read This First"/>
                    <Text margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }} size="large" textAlign="center">
                    Greeting to all you aspiring soon-to-be graduates of SHS. Filling out
                    applications can be boring, frustrating, and time-consuming, but it
                    can be very rewarding financially. Also, we hope you will learn a few
                    tricks to help you fill out the forms you will face later in life more
                    efficiently and get better results. Think of this as a job. If you
                    spend 30 hours filling out forms and you get one $1000 grant, you
                    earned 33 tax-free dollars per hour. You should know that any
                    application is a twofold process. First, it is a test to see how well
                    you fill out the application itself…is it well organized, neat, and
                    well-written. Second, it may be the only way you introduce yourself to
                    the reader….convince them that you can do what they are looking for
                    and share the special skills and talents that you have; don’t be
                    afraid to brag. If you have trouble finding information or knowing how to fill out your application. There is plenty of help available at the Brace Office, guidance office, or college website. with filling out the forms or getting information visit the Brace people, go to college website, or guidance counselor. So let‘s get started.
                    </Text>
                    
                </Box>
                
            <Box margin={{vertical: "small"}} border={{ color: 'brand', size: 'medium' }} width="xlarge" pad="large" alignSelf='center' align='center'>
                <SectionDivider title="Criteria and Selection" />
                <Text margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }} size="large" textAlign="center">
                        Selecting winners out of all the applicants is a challenging task. In
                        reality, all our students who apply are worthy of a scholarship. It’s
                        like trying to pick the MVP of an ALL Star team. To narrow our search,
                        we first look for who the grants will help the most financially. Then,
                        we try to determine who is the most motivated and prepared to succeed
                        away from home. We will interview the finalists to help us make the
                        final tough decisions. To all who applied, we congratulate you on
                        your achievements. We hope the lessons and experiences you have had
                        at SHS will guide you in your continued journey toward success in
                        life. We know it helped us.
                        </Text>
                        <Text size="large" margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }} textAlign="center">
                        The main goal of SEEF is to help our seniors succeed in their
                        post-high school education. At present, we have enough funds to award
                        at least two scholarships this year. If more money is donated between
                        now and graduation, we may be able to give one or more additional
                        grants.
                        </Text>
                        {/* Cards */}
                <Box pad="large">
                    <Grid columns={{ count: 'fit', size: 'medium' }} align='center' alignSelf='center' gap="medium">
                        {data.map((value, index) => (
                            <Card key={index} elevation="small" height={{ min: 'auto' }} fill="horizontal">
                                <CardBody pad="medium">
                                    <Text textAlign='center' size="medium" margin={{ bottom: 'small' }} weight="bold">
                                        {value.title}
                                    </Text>
                                        <Text  margin={{ bottom: 'small' }} style={{ lineHeight: '1.8rem' }}>
                                            {value.message}
                                        </Text>                                                
                                </CardBody>
                                                
                            </Card>
                        ))}
                    </Grid>
            </Box>
            </Box>

            {/* Scholarship Options Accordion */}
            <Box pad='large' alignSelf='center' width="xlarge">
            <SectionDivider title="Scholarship Options" alignSelf="center" />
            <Accordion multiple border={{ size: "medium", color: 'brand' }}>
                {scholarshipOptions.map((scholarship) => (
                <AccordionPanel
                    key={scholarship.id}
                    label={<Box pad="medium" ><Text size="large" alignSelf='center' textAlign='center'  weight="bold">{scholarship.title}</Text>
                        </Box>}
                >
                    <Box pad="medium">
                    <Text textAlign="start" style={{ lineHeight: '2.2rem' }} size="medium">
                        {scholarship.info}
                    </Text>
                    </Box>
                </AccordionPanel>
                ))}
            </Accordion>
            </Box>

            <Box width="xlarge" gap="medium" direction="column" alignSelf="center">
            
            {/* Final Words */}
            <Box align="center">
                <Heading level={3} textAlign="center">
                Final Words
                </Heading>
                <Text  margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }} size="large" textAlign="center">
                A final word, keep a copy of this application. As you will see, most
                applications ask for much of the same information, so you can just
                copy or tweak it, making your task quicker and more efficient. The
                more scholarships you apply for, the better your odds are at winning
                one or more. Again if you need assistance with finding information or completing your application, you can find help at the Brace Office, college website, or guidance counselor's office. Hang in there, and remember Dragons never quit.
                </Text>
            </Box>

            

            {/* Scholarship Button */}
            {scholarshipLinks && scholarshipLinks.length > 0 ? (
            scholarshipLinks.map((scholarshipLink, index) => (
                <Box key={index} align="center">
                <Button
                    primary
                    color="brand"
                    pad="small"
                    hoverIndicator="control"
                    href={scholarshipLink.link}
                    target="_blank"
                    label={<Text weight="bold">Apply for a Scholarship</Text>}
                    size="large"
                />
                </Box>
            ))
            ) : (
            <Box align="center">
                <Text>No scholarship links available.</Text>
            </Box>
            )}
            
            </Box>
        </Box>
    )
}
