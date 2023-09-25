import React, {useState} from 'react'
import { Box, Image } from "grommet";
import image1 from '../../../assets/1st_Photo.jpg';
import backgroundStyles from "./BackgroundStyles";

const ImageBox1 = ({ hover, onMouseEnter, onMouseLeave }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <Box
        style={{ ...(hover && backgroundStyles.image1) }}
        background={{
            image: `url(${image1})`,
            
        }}
        justify="center"
        pad=""
        overflow="hidden"
        width="250px"
        round
        height="auto"
        hoverIndicator
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
            <Image
            src={image1}
            alt="Image 1"
            style={imageLoaded ? {} : { display: "none" }}
            onLoad={handleImageLoad}
            />
        </Box>
    );
};

export default ImageBox1;