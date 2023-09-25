import { useState } from "react";
import { Box, Image } from "grommet";
import image4 from '../../../assets/4th_Photo.jpg';
import backgroundStyles from "./BackgroundStyles";

const ImageBox4 = ({ hover, onMouseEnter, onMouseLeave }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };
    return (
        <Box
        style={{ ...(hover && backgroundStyles.image4) }}
        background={{
            image: `url(${image4})`,
        }}
        justify="center"
        overflow="hidden"
        width='450px' 
        height="auto"
        round
        hoverIndicator
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
            <Image
            src={image4}
            alt="Image 4"
            style={imageLoaded ? {} : { display: "none" }}
            onLoad={handleImageLoad}
            />
        </Box>
    );
};

export default ImageBox4;