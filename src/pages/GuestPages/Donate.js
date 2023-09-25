import { useState, useEffect } from "react"
import {
    Box,
    Heading,
    Text,
    Spinner,
    Button
} from "grommet"

import { useHistory } from "react-router-dom"

// dividers & headers
import SectionDivider from "../../components/SectionDivider"
import Divider from "../../components/Divider"

// Image Boxes
import ImageBox1 from "./DonateImages/ImageBox1"
import ImageBox2 from "./DonateImages/ImageBox2"
import ImageBox3 from "./DonateImages/ImageBox3"
import ImageBox4 from "./DonateImages/ImageBox4"

// styles
import BackgroundStyles from "./DonateImages/BackgroundStyles"

export default function Donate() {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);
    const [loadingImages, setLoadingImages] = useState(true);
    const [loadingHeading, setLoadingHeading] = useState(true);

    // Function to handle image loading
    const handleImageLoad = () => {
        setLoadingImages(false);
    };

    useEffect(() => {
        // Get all the images that need to be loaded
        const imagesToLoad = document.querySelectorAll("img");

        // Check if all the images have loaded
        const imageLoadPromises = Array.from(imagesToLoad).map((image) => {
        return new Promise((resolve, reject) => {
            if (image.complete) {
            resolve();
            } else {
            image.addEventListener("load", resolve);
            image.addEventListener("error", reject);
            }
        });
        });

        // Set the loading state to false when all the images are loaded
        Promise.all(imageLoadPromises)
        .then(() => setLoadingImages(false))
        .catch((error) => console.error("Error loading images:", error));
    }, []);

    useEffect(() => {
        // Check if the heading is loaded
        if (document.readyState === "complete") {
        setLoadingHeading(false);
        } else {
        // Wait for the document to finish loading to show the heading
        const handleLoad = () => {
            setLoadingHeading(false);
        };

        window.addEventListener("load", handleLoad);
        return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    const history = useHistory()

    const handleClick = (e) => {
        e.preventDefault();
        history.push('/donate-now')
    }

    return (
        <Box   >
            {/* Loading Spinner */}
            {loadingImages && (
                <Box
                    pad="medium"
                    round="medium"
                    align="center"
                    gap="small"
                    background={{image: `linear-gradient(90deg, #292929 0%, #333333 99%)`}}
                    style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                >
                    <Spinner size="large" color="brand" />
                </Box>
            )}

                    {/* Background and Stars  */}
                <Box 
                    background={{
                        image: `linear-gradient(90deg, #292929 0%, #333333 99%)`,
						repeat: "no-repeat",
						size: "cover",
						}}
                    justify='center'
                    pad="medium"
                    overflow="hidden"
                >
                
                        
                    <Box direction="row-responsive" gap='200px' alignSelf="center">
                        {/* image1 */}
                        <ImageBox1 
                            hover={hover1}
                            onMouseEnter={() => setHover1(true)}
                            onMouseLeave={() => setHover1(false)}
                            onLoad={handleImageLoad}
                            style={{ visibility: loadingImages ? "hidden" : "visible" }}
                        />

                        {/* image2 */}
                        <ImageBox2
                            hover={hover2}
                            onMouseEnter={() => setHover2(true)}
                            onMouseLeave={() => setHover2(false)}
                            onLoad={handleImageLoad}
                            style={{ visibility: loadingImages ? "hidden" : "visible" }}
                        />
                    </Box>

                    {/* Heading text */}
                    {!loadingHeading && (
                        <Box align='center' pad={{top: "50px", bottom: "50px"}}>
                            <Heading textAlign='center' style={{...BackgroundStyles.textShadow}} >Make A Donation Today</Heading>
                            <Heading textAlign='center' style={{...BackgroundStyles.textShadow}} >Be The Change in a Students Future</Heading>
                        </Box>
                    )}
                    
                    
                
                    <Box direction="row-responsive" gap='200px' alignSelf='center'>
                        {/* image3 */}
                        <ImageBox3
                            hover={hover3}
                            onMouseEnter={() => setHover3(true)}
                            onMouseLeave={() => setHover3(false)}
                            onLoad={handleImageLoad}
                            style={{ visibility: loadingImages ? "hidden" : "visible" }}
                        />
                        
                        {/* image4 */}
                        <ImageBox4
                            hover={hover4}
                            onMouseEnter={() => setHover4(true)}
                            onMouseLeave={() => setHover4(false)}
                            onLoad={handleImageLoad}
                            style={{ visibility: loadingImages ? "hidden" : "visible" }}
                        />
                    </Box>

                </Box>
                
                
                <Box pad="large" align="center">
                    <SectionDivider title="Make a Difference" vert="large"/>
                    <Box direction="column" width="xlarge" gap="medium">
                    <Text size="large" textAlign="center"  alignSelf="center" margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }}>
                        We all hope you will couple your gift of money with a gift of time by getting involved with some of the young
                        people in your community. Here is another short fable to help explain our mission…
                    </Text>
                    <Text size="large" textAlign="center" alignSelf="center" margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }}>
                        As I traveled down a long, hot, dusty road, I met a very elderly man planting trees by the roadside. I paused on
                        my journey to ask him why he was planting trees when at his advanced age he would not live the 20 to 30 years to
                        see them mature. "I do not plant them for me," he replied, "but for those who come after me. The leaves of the
                        trees will give them shade in which to rest and refresh themselves, and the fruits and nuts they bear will help
                        nourish them on their arduous trips."
                    </Text>
                    <Text size="large" textAlign="center" alignSelf="center" margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }}>
                        "We want our youth to be our saplings, and our scholarships, attention, and encouragement, acting as fertilizer
                        and water. Our students will mature into strong healthy trees. These trees will provide the seeds and shade to
                        shelter the endless generations to follow."
                    </Text>
                    <Text weight="bold" size="large" textAlign="center" alignSelf="center" margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }}>
                    Would you like to have your own scholarship?
                    </Text>
                    <Text size="large" textAlign="center" alignSelf="center" margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }}>
                    
We can facilitate your wishes through SEEF. You can stipulate the name, money, and qualifications you would like. If you would like to talk about this contact me at the contact page or send me an email at kjfrancis@fronteir.com.
                    </Text>
                    <Text size="large" textAlign="center"  alignSelf="center" margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }}>
                        Thanks again for your contributions; it helps keep the tradition of DRAGONS HELPING DRAGONS alive and well.
                    </Text>
                    </Box>
                </Box>

                {/* Donate By Check */}
                <Box align="center" pad="large">
                    <Divider/>
                    <Box pad="medium" width="xlarge">
                        <Text textAlign="center" size="large" alignSelf='center' weight="bold" >Donate By Check</Text>
                        <Box
                        width="100px"
                        height="4px"
                        background="brand"
                        alignSelf="center"
                        margin={{ top: 'small' }}
                        />
                    </Box>
                    <Box width="xlarge" align="center">
                    <Text textAlign="center" size="large" margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }}>
                        If you would like to donate by check simply fill out your check to the Broward Education Foundation.
                        Make sure you write SEEF or Stranahan Education Endowment Fund at the bottom of the check where it says memo, for, or subpayee.
                        Otherwise, your check will be deposited in the BEF account instead of our Stranahan account.
                    </Text>
                    <Text weight="bold" margin={{ top: 'medium' }}>You can send checks to:</Text>
                    <Text size="large" textAlign="center" margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }}>
                        Claudette Lavoie<br />
                        Broward Education Foundation<br />
                        600 SE 3rd Ave<br />
                        First Floor<br />
                        Fort Lauderdale, Florida 33301
                    </Text>
                    </Box>
                </Box>

                {/* Donate Online */}
                <Box alignSelf="center" align="center" pad={{bottom: "large"}} width="xlarge">
                <Box pad="medium">
                    <Text textAlign="center" size="large" alignSelf='center' weight="bold" >Donate Online</Text>
                    <Box
                        width="100px"
                        height="4px"
                        background="brand"
                        alignSelf="center"
                        margin={{ top: 'small' }}
                        />
                </Box>
                    <Text textAlign="center" size="large" margin={{ bottom: 'small' }} style={{ lineHeight: '2.2rem' }}>
                        By donating online you are able to pay via Paypal or credit and debit card payments. To contribute, simply click the "Donate Now" button below. Your generosity will make a meaningful impact on our mission. Thank you for your support!
                    </Text>
                    <Box pad={{top: "large"}}>
                        <Button color='brand' pad="small" hoverIndicator="control" primary onClick={handleClick} label={<Text  weight="bold">Donate Now</Text>}/>
                    </Box>
                    
                </Box>
            </Box>
    )
}
