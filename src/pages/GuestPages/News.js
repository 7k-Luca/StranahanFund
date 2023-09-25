import React, {useState} from 'react';
import {
    Box,
    Heading,
    Text,
    Card,
    CardBody,
    Grid,
    Button,
    Page,
    PageContent,
    Layer,
    CardFooter,
    Tabs,
    Tab,
    CardHeader,
    Image,
    Anchor,
    Spinner,
    ResponsiveContext,
} from 'grommet';
import { useHistory } from 'react-router-dom'

// components
import SectionDivider from '../../components/SectionDivider';
import TitleHeader from '../../components/TitleHeader';

// firebae
import { useCollection } from '../../hooks/useCollection'

export default function News() {
    const history = useHistory()
    
    const handleClick = (e) => {
        e.preventDefault();
        history.push('/newsletter-signup')
    }

    const [showModal, setShowModal] = useState(false);
    const [selectedData, setSelectedData] = useState(null);    

    // Firestore hook for fetching events
    const { documents: events, loading } = useCollection('events')  
    const { documents: winners, loading: isLoading} = useCollection('scholarshipWinners')

    const handleCardClick = (value) => {
        setSelectedData(value);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    }

    // Sort events by creation date in descending order
    const sortedEvents = events && events.length > 0
    ? [...events].sort((a, b) =>  b.createdAt.toDate() - a.createdAt.toDate())
    : [];

    // Sort the winners array based on the year (ascending order)
    const sortedWinners = winners ? [...winners].sort((a, b) => b.year - a.year) : [];
    
    const uniqueYears = [...new Set(sortedWinners.map((winner) => winner.year))];

    return (
        <Page kind="wide"  >
            <PageContent direction="column" align='center' >
                <Box style={{minWidth: '100%'}}  align='center' margin="large">

                {/* Starting Title and Message */}
                    <Box alignSelf="center" margin={{bottom: 'medium'}} direction="column" gap="large" width="large">
                        <TitleHeader title="News and Events" />
                        <Text size="large" textAlign="center" margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }}>
                        Stay up-to-date with the latest news and events from our organization.
                        Check out the exciting happenings and get involved in our community.
                        </Text>
                    </Box>
                    
                    {/* Latest News Cards */}
                    <Box width={{ max: '100%', width: '100%', min: 'min-content' }}>
                        <SectionDivider title="Latest News Bulletin Board" />
                        {loading ? (
                            <Box align="center"  justify="center" fill>
                                <Spinner size="large" />
                            </Box>
                        ) : sortedEvents && sortedEvents.length > 0 ? (
                            <ResponsiveContext.Consumer>
                            {(size) => (
                            <Grid columns={{ count: 'fit', size: 'medium' }} gap="medium" justify='center'>
                            {sortedEvents.map((event, index) => (
                                <Card key={index} width="400px" elevation='small' height="auto" >
                                    <CardHeader pad="small" justify='center' height={{ min: 'auto' }} fill="horizontal" background="light-1">
                                        <Box height="200px" width="100%"  background={{
                                            backgroundSize:"cover",
                                            backgroundPosition:"center",
                                            round:"small",
                                            }}>
                                            <Image  src={event.featuredImage} fit="contain"/>
                                        </Box>
                                    </CardHeader>
                                    <CardBody pad={{ horizontal: 'small', bottom: 'small' }}>
                                        <Text size="medium" round="small" textAlign='center' weight="bold" margin={{ bottom: 'small' }} style={{ lineHeight: '1.8rem' }}>{event.headline}</Text>
                                        {event.date && (
                                        <Text size="medium" margin={{ bottom: 'small' }} color="dark-3" textAlign='center'>
                                        Date of event: {event.date}
                                        </Text>
                                        )}
                                        <Text size="medium" truncate={true} textAlign='center'>{event.message}</Text>
                                    </CardBody>
                                    <CardFooter margin={{bottom: "medium"}} alignSelf='center'>
                                        <Button hoverIndicator="brand" label={<Text weight="bold">Click for more information</Text>} onClick={() => handleCardClick(event)}/>
                                    </CardFooter>
                                </Card>
                            ))}
                            </Grid>
                            )}
                            </ResponsiveContext.Consumer>
                        ) : (
                            <Box align="center" >
                                <Text>No news available</Text>
                            </Box>
                        )}

                        {showModal && selectedData && (
                            <Layer position="center" onClickOutside={handleCloseModal} onEsc={handleCloseModal}>
                                <Card background="light-2" pad="medium" gap="small">
                                <Text size="xlarge" weight="bold" alignSelf="center">
                                    {selectedData.headline}
                                </Text>
                                {selectedData.date && (
                                    <Text size="medium" margin={{ bottom: 'small' }} color="dark-3" alignSelf="center">
                                    Date of event: {selectedData.date}
                                    </Text>
                                )}
                                <Text size="medium" textAlign="center">
                                    {selectedData.message}
                                </Text>
                                {selectedData.additionalLink && (
                                    <Box direction="row" align="center" pad="small" gap="xsmall" justify="center">
                                    <Text textAlign="center" weight="bold">
                                        Additional Links:
                                    </Text>
                                    <Anchor label={selectedData.additionalLink} href={selectedData.additionalLink} target="_blank" />
                                    </Box>
                                )}
                                <Box align="end">
                                    <Button hoverIndicator="status-critical" label="Close" color="red" onClick={handleCloseModal} />
                                </Box>
                                </Card>
                            </Layer>
                            )}{showModal && selectedData && (
                            <Layer position="center" onClickOutside={handleCloseModal} onEsc={handleCloseModal}>
                                <Card background="light-2" pad="large" gap="small">
                                <Text size="xlarge" weight="bold" alignSelf="center">
                                    {selectedData.headline}
                                </Text>
                                {selectedData.date && (
                                    <Text size="medium" margin={{ bottom: 'small' }} color="dark-3" alignSelf="center">
                                    Date of event: {selectedData.date}
                                    </Text>
                                )}
                                <Text size="medium" textAlign="center">
                                    {selectedData.message}
                                </Text>
                                {selectedData.additionalLink && (
                                    <Box direction="row" align="center" pad="small" gap="xsmall" justify="center">
                                    <Text textAlign="center" weight="bold">
                                        Additional Links:
                                    </Text>
                                    <Anchor label={selectedData.additionalLink} href={selectedData.additionalLink} target="_blank" />
                                    </Box>
                                )}
                                <Box align="end">
                                    <Button hoverIndicator="status-critical" label="Close" color="red" onClick={handleCloseModal} />
                                </Box>
                                </Card>
                            </Layer>
                        )}
                    </Box>
                    


                    {/* Scholarship Winners Section */}
                    <SectionDivider title="Scholarship Winners"/>
                    {isLoading && (
                        <Box align="center" pad="large">
                            <Spinner size="large"/>
                        </Box>
                    )}
                    {!isLoading && winners && winners.length > 0 && (
                        <Box pad="large">
                            <Tabs>
                            {uniqueYears.map((year) => (
                                <Tab key={year} title={year}>
                                    <Box pad="large">
                                        <Grid
                                        columns={{ count: 'fit', size: 'medium' }}
                                        align="center"
                                        alignSelf="center"
                                        gap="medium"
                                        >
                                            {sortedWinners.filter((winner) => winner.year === year).map((winner) => (
                                                <Card key={winner.id} elevation='small' height={{ min: 'auto'}} background="light-1" fill="horizontal">
                                                    <CardBody pad="medium">
                                                        <Text textAlign='center' margin={{ bottom: 'small' }} weight="bold">
                                                            {winner.winnerName}
                                                        </Text>
                                                        <Text textAlign='center'>{`Awarded the ${winner.scholarshipName}`}</Text>
                                                    </CardBody>
                                                </Card>                                                
                                            ))}
                                        </Grid>
                                    </Box>
                                </Tab>
                            ))}
                            </Tabs>
                        </Box>
                    )}
                    {!isLoading && (!winners || winners.length === 0) && (
                        <Box align="center" pad="large">
                            <Text>No scholarship winners available.</Text>
                        </Box>
                    )}
                    

                    {/* Stay Informed and Engaged */}
                    <Box pad="large" width="xlarge" gap="medium" direction="column" alignSelf="center">
                        <Box align="center">
                        <Heading level={3} textAlign="center">
                            Stay Informed and Engaged
                        </Heading>
                        <Text size="large" textAlign="center">
                            Be the first to know about upcoming events, news, and more!
                            Sign up for our newsletter to stay connected.
                        </Text>
                        </Box>

                        <Box alignSelf="center">
                        <Button
                            primary
                            color='brand'
                            hoverIndicator="control"
                            label={<Text weight="bold">Sign Up for Newsletter</Text>}
                            size="large"
                            onClick={handleClick}
                        />
                        </Box>
                    </Box>

            
        </Box>
        </PageContent>
        </Page>
    )
}
