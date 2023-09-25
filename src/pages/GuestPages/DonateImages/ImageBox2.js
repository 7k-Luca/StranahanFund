import { useState } from "react";
import { Box, Image } from "grommet";
import image2 from '../../../assets/2nd_Photo.jpg';
import backgroundStyles from "./BackgroundStyles";

const ImageBox2 = ({ hover, onMouseEnter, onMouseLeave }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <Box
        style={{ ...(hover && backgroundStyles.image2) }}
        background={{
            image: `url(${image2})`,
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
            src={image2}
            alt="Image 2"
            style={imageLoaded ? {} : { display: "none" }}
            onLoad={handleImageLoad}
            />
        </Box>
    );
};

export default ImageBox2;