import React, { useState } from 'react'
import {
    Page,
    PageContent,
    Tabs,
    Tab,
    Box,
    Grid,
    CardBody,
    Text,
    Card,
    Button
} from 'grommet'
import TitleHeader from '../../components/TitleHeader';
import { useHistory } from 'react-router-dom'

const data = [
    {
        // color: '#418ccd',
        title: 'Stage 1',
        message: 'The initial section of our application process is straightforward and user-friendly. While some individuals might utilize it for conducting online personal searches, our requirements are much simpler. We solely ask for essential contact information and assistance in assessing your specific needs. Rest assured, we aim to make the application process as smooth and accessible as possible, ensuring that your valuable time is used efficiently. By providing us with the necessary details and insights into your needs, you take the crucial step towards potentially benefiting from our program.',
        },
        {
        // color: '#418ccd',
        title: 'Stage 2',
        message: 'Create an independent endowment fund that will be used to give grants to SHS graduates. It shall continue to grow and give grants as long as there is a SHS. The larger the fund gets the more students we will be able to help. These grants shall be need based and given to the students whom the selection committee feels will most benefit from them. These grants need not be limited to four year institutions, but may include one and two year career prep institutions.',
        },
        {
        // color: '#418ccd',
        title: 'Stage 3',
        message: 'Prepare our students to succeed away from home. Our students need to know how to budget their time and money, and deal with class schedules, jobs, roommates, get tutoring help, etc. We can also connect them with present and past alumni of their institution to help mentor them. We can help them find career related summer jobs.',
        },
        {
        // color: '#418ccd',
        title: 'Stage 4',
        message: 'We are dedicated to building a robust network within the community, aimed at assisting our graduates in finding career-related job opportunities. Through this network, we connect them with local civic and professional organizations, creating valuable introductions that can pave the way for their future success. Our goal is to provide our graduates with a supportive community that nurtures their career aspirations and opens doors to a world of possibilities right within their reach.',
        },
        {
        // color: '#418ccd',
        title: 'Stage 5',
        message: "Our aspiration is to develop a versatile format that empowers our graduates to excel in any organization they become a part of in their future endeavors, regardless of where their lives and careers lead them. By fostering a culture of Dragons helping Dragons, we envision an unending chain of support and success among our alumni community. Together, we eagerly anticipate collaborating with our graduates and all members of our organization in pursuit of our shared objectives. Let's work hand in hand to create a powerful legacy of achievement and ensure that the spirit of cooperation and empowerment continues to thrive among all those associated with our institution.",
        },
    ];

export default function About() {
    const history = useHistory()
    
    const handleClick = (e) => {
        e.preventDefault();
        history.push('/donate')
    }
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabChange = (index) => {
        setActiveIndex(index);
    };

    return (
        <Page   kind="wide" >
            <PageContent  direction="column" align='center' >
                <Box style={{minWidth: '100%'}} width="xlarge" align='center' margin="large">
                
                <TitleHeader title="Building a Better Community" vert="xsmall"/>
                <Box pad="large"  >
                    <Tabs activeIndex={activeIndex} onActive={handleTabChange}>
                        {/* Who are We Tab */}
                        <Tab title={<Text size='large' color={activeIndex === 0 ? '#666666' : 'control'}>Who Are We?</Text>} >
                            <Box pad="medium" width="xlarge">
                                <Text textAlign="start" margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }}>
                                We are a dedicated and passionate group of Stranahan Alumni, parents, and staff who have been deeply impacted by the transformative experience at Stranahan High School (SHS) over the last three decades. We believe in paying forward this impactful experience to the next generation of Dragons. As a team, we have taken tangible action to shape a brighter and more promising future for Stranahan and its students.
                                </Text>
                                <Text textAlign="start"  margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }}>
                                Currently, in addition to providing scholarships, we are dedicated to enhancing the image of SHS while fostering greater student and community pride in our school. Our primary focus is to strengthen communication between students, the school, and the community, and this website marks the initial step towards achieving that. To further this endeavor, we have also launched a student-run monthly online newsletter.
                                </Text>
                                <Text textAlign="start"  margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }}>
                                Our plans include establishing a robust public relations channel with the local media, aiming to shed light on the numerous positive events and achievements at Stranahan that often go unnoticed and unreported. By working together, we are confident that we can make a significant impact in promoting a positive and supportive environment at our school and in the wider community. Your support and involvement in these initiatives are greatly appreciated. Let's collaborate to make a difference and celebrate the successes of Stranahan!
                                </Text>
                            </Box>
                
                        </Tab>
                        {/* Our Philosophy Tab */}
                        <Tab title={<Text size='large' color={activeIndex === 1 ? '#666666' : 'control'}>Our Philosophy</Text>}>
                            <Box pad="medium" width="xlarge">
                                <Text textAlign="start" margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }}>Every individual and organization must possess a solid core of fundamental concepts, beliefs, and ideals that serve as the bedrock and steer their actions. At SEEF, our ideas and values have been meticulously shaped by years of educational and work experiences, spanning over five decades of teaching, coaching, and collaborating with individuals like yourself.</Text>
                                <Text size="large" weight="bold" alignSelf='center'>Implementation</Text>
                                <Text textAlign="start" margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }}>The primary aim of the Foundation was initially to establish an independent endowment fund, generating resources for scholarships to support financially disadvantaged Stranahan students. However, once our group took shape, we realized that the students who would benefit most from such grants were often the ones least prepared to navigate success after high school. Providing monetary assistance alone wouldn't guarantee that these students would achieve their aspirations.
This realization led us to identify three crucial areas requiring non-financial support. Firstly, we believe in exposing all students to the vast universe of opportunities available in the world and guiding them in charting a path toward their dreams. Secondly, we are committed to providing unwavering support throughout their educational journey. Lastly, we are determined to bridge the gap between post-high school education and the workforce.
By addressing these critical aspects, we can create a continuous stream of empowered citizens who value education, becoming not only well-prepared parents but also active and influential members of the community. Our efforts aim to shape individuals who will make a positive impact as future leaders within society.</Text>
                            </Box>
                            
                        </Tab>
                        {/* Stages Tab */}
                        <Tab title={<Text size='large' color={activeIndex === 2 ? '#666666' : 'control'} >Stages</Text>}>
                            <Box pad="large" width="xlarge">
                                <Grid columns={{ count: 'fit', size: 'medium' }} gap="medium">
                                    {data.map((value, index) => (
                                        <Card key={index} elevation="small" height={{ min: 'auto' }} fill="horizontal">
                                            <CardBody pad="medium">
                                                <Text size="large" margin={{ bottom: 'small' }} weight="bold">
                                                    {value.title}
                                                </Text>
                                                    <Text textAlign="start" margin={{ bottom: 'small' }} style={{ lineHeight: '1.8rem' }}>
                                                        {value.message}
                                                    </Text>                                                
                                            </CardBody>
                                            
                                        </Card>
                                    ))}
                                </Grid>
                            </Box>
                        </Tab>
                        {/* Our Goals Tab */}
                        <Tab title={<Text size='large'  color={activeIndex === 3 ? '#666666' : 'control'}>Our Goals</Text>}>
                            <Box width="xlarge" direction='row' gap="large" justify='center' pad="large">
                                <Box direction='column' gap='medium' align='center' flex width="50%">
                                    <Text size="large" weight="bold"  >Short Term Goals</Text>
                                    <Text textAlign="start" margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }}>The Foundation provides scholarships to deserving SHS seniors. They have already given out their first two grants, and they aim to continue this support in the future, potentially increasing the number of scholarships.

The Foundation will keep raising funds to expand their assistance and help more students each year.

They also focus on promoting awareness and pride in the positive achievements at SHS, highlighting the success stories of their students, such as having students at prestigious institutions like MIT and boasting the highest number of undergrads at UF in the state.

Another goal is to motivate and engage SHS alumni in contributing to the betterment of all students. They encourage alums to donate their time and mentorship, as it can be just as rewarding, if not more, than monetary donations.</Text></Box>
                                    {/* Divider */}
                                    <Box
                                    direction='row'
                                    justify='center'
                                    align='center'
                                    alignSelf='stretch'
                                    pad={{ vertical: 'medium' }}
                                    border={{ side: 'vertical', size: '1px', color: 'brand' }}
                                    />
                                <Box direction='column' gap='medium' align="center" flex width="50%">
                                    <Text size="large" weight="bold">Long Term Goals</Text>
                                    <Text textAlign="start" margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }}>Aim to establish an endowment fund substantial enough to support every SHS graduate in achieving their post-high school career aspirations.

Aspire to create a fund that can provide financial assistance to SHS for special projects or essential equipment that may not be covered by the school budget.

Foster a network of "Dragons Helping Dragons" – dedicated adults who are willing to contribute their skills and support to guide and mentor students, ensuring they stay on the path to success.</Text>
                                </Box>
                                
                            </Box>
                        </Tab>
                        {/* Other Ways to Help tab */}
                        <Tab title={<Text size='large' color={activeIndex === 4 ? '#666666' : 'control'} >Other Ways to Help</Text>}>
                            <Box pad="large" width="xlarge" >
                                <Box gap="large" align="center">
                                <Text size="large" weight="bold">
                                    Ways to Help Young Dragons:
                                </Text>
                                <Box gap="medium" align='center'>
                                    <Text margin={{ bottom: 'small' }} style={{ lineHeight: '1.8rem' }} >
                                        1. Spread the Word: Share our mission with others and help us reach more people.
                                    </Text>
                                    <Text  margin={{ bottom: 'small' }} style={{ lineHeight: '1.8rem' }}>
                                        2. Stay Updated: Visit our website regularly to stay informed about our activities.
                                    </Text>
                                    <Text margin={{ bottom: 'small' }} style={{ lineHeight: '1.8rem' }}>
                                        3. Support Students: Take a minute to show interest in a student's journey by attending events or contests.
                                    </Text>
                                    <Text margin={{ bottom: 'small' }} style={{ lineHeight: '1.8rem' }}>
                                        4. Create a Scholarship: Start your own scholarship with our guidance and support from our donors.
                                    </Text>
                                    <Text  margin={{ bottom: 'small' }} style={{ lineHeight: '1.8rem' }}>
                                        5. Make a Donation: Easily contribute with two tax-deductible options for giving.
                                    </Text>
                                </Box>
                                </Box>
                            </Box>
                        </Tab>
                    </Tabs>
                </Box>
                </Box>
                

                {/* Donation button */}
                <Box align="center" gap='medium' pad="medium">
                    <Box gap='small'>
                        <Text size="large" alignSelf='center' weight="bold" >
                        Thank you for your support!
                        </Text>
                        <Text textAlign="center" margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }}>
                        Your donation helps us achieve our goals and make a positive impact in the community.
                        </Text>
                    </Box>
                    <Button margin={{bottom: "small"}} color='brand' pad="small" hoverIndicator="control"  primary  label={<Text weight="bold">Donate Now</Text>} onClick={handleClick}/>
                </Box>
                
            </PageContent>
        </Page>
    )
}
