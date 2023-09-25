import { useContext } from "react"
import {
    Box,
    Page,
    PageContent,
    Heading,
    Paragraph,
    Grid,
    Card,
    CardBody,
    Text,
    ResponsiveContext,
    Button,
    CardHeader,
    Image
} from "grommet"
import { useHistory } from "react-router-dom"


// images

import Graduate from '../../assets/Graduate.png'
import Career from '../../assets/career.png'
import Community from  '../../assets/Community.png'
import Official_Background from '../../assets/Official_Background.JPG'

const data = [
    {
        title: 'Alumni-Powered Education Initiative',
        message: 'Enriching the next generation with the support of dedicated alumni, opening pathways to transformative educational journeys for Stranahan students.',
        image: Community
    },
    {
        title: 'Fostering Excellence through In-House Scholarships',
        message: 'Cultivating local talent through internal scholarships, cultivating a culture of advancement and distinction, propelling Stranahan students toward their academic aspirations.',
        image: Graduate
    },
    {
        title: 'Embracing Growth Opportunities for Lifelong Achievement',
        message: 'Harnessing limitless avenues for personal and professional growth, Stranahan students embrace their untapped potential, embarking on a lifelong voyage of learning and accomplishment.',
        image: Career
    },
]

export default function Home() {
    const size = useContext(ResponsiveContext);

    const isMobile = size === 'small' || size ==="xsmall";
    const isTablet = size === 'medium';

    const history = useHistory()
    
    const handleClickDonate = (e) => {
        e.preventDefault();
        history.push('/donate')
    }

    const handleClickScholarship = (e) => {
        e.preventDefault();
        history.push('/scholarship')
    }

// Aspect ratio of the original image (2592 x 1424 pixels)
const originalAspectRatio = 2592 / 1424;
// Calculate the adjusted width and height to maintain the aspect ratio
const calculateImageSize = () => {
    if (isMobile) {
        const maxWidth = window.innerWidth * 0.8; // Adjust this value as needed
        const maxHeight = maxWidth / originalAspectRatio;
        return {
            width: `${maxWidth}px`,
            height: `${maxHeight}px`,
        };
    } else if (isTablet) {
    const width = 300;
    const height = width / originalAspectRatio;
    return {
        width: `${width}px`,
        height: `${height}px`,
    };
    } else {
    const width = 700;
    const height = width / originalAspectRatio;
    return {
        width: `${width}px`,
        height: `${height}px`,
    };
    }
};
const imageSize = calculateImageSize();

    return (
        <Page>
            <PageContent height="80vh" flex="grow" align="center" justify="between"> 
                {/* Home Opener  */}
                <Box
                    margin={{top: "large"}}
                    direction={isMobile ? "column" : "row"} // Change direction for mobile screens
                    align="center"
                    gap="large"
                    pad={{ vertical: 'xlarge', horizontal: 'large' }}
                    responsive
                    >
                    {/* Text */}
                    <Box
                        pad="medium"
                        
                        direction="column"
                        gap="xsmall"
                        flex={{ shrink: 0 }}
                        width={isMobile ? '100%' : '50%'}
                        style={{
                        }}
                    >
                        <Heading level={2} textAlign="center" alignSelf="center"> 
                        Welcome to Stranahan Education Endowment Fund
                        </Heading>
                        <Box
                        width="50%"
                        height="4px"
                        background="brand"
                        alignSelf="center"
                        margin={{ top: 'small' }}
                        />
                        <Paragraph size="xlarge" textAlign="center" alignSelf="center">
                        Once a Dragon, Always a Dragon
                        </Paragraph>
                    </Box>

                    {/* Image */}
                    <Box
                        pad="medium"
                        alignSelf="center"
                        flex={{ grow: 1 }}
                        elevation="large"
                        border={{size: 'large', color: 'brand'}}
                        background={{
                            image: `url(${Official_Background})`,
                            size: 'cover',
                            position: 'center',
                        }}
                        {...imageSize}
                        style={{
                            maxWidth: isMobile ? '100%' : '48%', // Adjust the width for mobile screens
                            border: '2px solid #418ccd', // Add a border with a cool color
                            borderRadius: '10px', // Add rounded corners for a sleek look
                            padding: '20px', // Add some padding for spacing
                            boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)', // Ad
                        }}
                        
                    />

                </Box>
                </PageContent>
                
                    {/* Large Divider */}
                    <Box
                    background="brand" // Color of the divider (change to your preferred color)
                    height="100px" // Height of the divider
                    
                    margin={{ top: "xsmall" }} // Adjust the margin as needed
                    />

                {/* Mid Page */}
                <Box gap="xlarge"  direction="column" pad="large" align="center">
                        <Box>
                            <Heading textAlign="center">Be The Difference</Heading>
                        </Box>
                        
                        <Box>
                            <Grid columns={{ count: 'fit', size: 'medium' }} gap="medium">
                                    {data.map((value, index) => (
                                            <Card key={index} height={{ min: 'auto' }} fill="horizontal">
                                                <CardHeader justify="center" pad="small" background="light-1">
                                                    <Box
                                                    height="200px" // Adjust the height as needed for the header area
                                                    background={{
                                                        backgroundSize:"cover",
                                                        backgroundPosition:"center",
                                                        round:"small",
                                                    }}
                                                    >  
                                                        <Image src={value.image}  fit="contain"/>
                                                    </Box>
                                                </CardHeader>
                                                <CardBody pad="medium" >
                                                    <Text size="medium" round="small" textAlign="center" weight="bold">
                                                        {value.title}
                                                    </Text>
                                                    <Box
                                                width="100px"
                                                height="4px"
                                                background="brand"
                                                alignSelf="center"
                                                margin={{ top: 'small' }}
                                                />
                                                    <Text margin={{top: 'small'}} textAlign="center">
                                                        {value.message}
                                                    </Text>                                                
                                            </CardBody>
                                        
                                        </Card>
                                ))}
                            </Grid>
                        </Box>
                        <Box width="xlarge">
                            <Text textAlign="center" weight="bold" size="large" alignSelf="center">At Stranahan Education Endowment Fund (SEEF), we believe in the power of education to transform lives. With your support, we can make a significant difference in the lives of Stranahan High School students.</Text>
                        </Box>
                </Box>

                {/* Ending && Buttons */}
                <Card pad="large" background="light-1" width="large" alignSelf="center" margin={{bottom: 'xlarge', top: 'medium'}}>
                <CardBody alignSelf="center" align="center" direction="row-responsive" gap="medium">
                <Box align="center" gap="small">
                    <Heading level={4} textAlign="center">
                    Wanting to Change Our Future Generations?
                    </Heading>
                    <Button color='brand' pad="small" hoverIndicator="control" onClick={handleClickDonate} label={<Text weight="bold">Donate</Text>} primary />
                </Box>
                <Box align="center" gap="small">
                    <Heading level={4} textAlign="center" >
                    Need Help Setting Up For Your Future?
                    </Heading>
                    <Box>
                    <Button color='brand' pad="small" hoverIndicator="control" onClick={handleClickScholarship} label={<Text weight="bold">Apply for Scholarships</Text>} primary />
                    </Box>
                </Box>
                </CardBody>
                </Card>
                
                {/* Any Events? */}
                <Box>
                    <Text size="medium"  textAlign="center" margin={{ bottom: 'medium' }} style={{ lineHeight: '2.2rem' }}>If you have any events that you want to be posted contact us on the contact page.</Text>
                </Box>
        </Page>
    )
}

