import { useState } from "react";
import { Box, Image } from "grommet";
import image3 from '../../../assets/3rd_Photo.jpg';
import backgroundStyles from "./BackgroundStyles";

const ImageBox3 = ({ hover, onMouseEnter, onMouseLeave}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <Box
        style={{ ...(hover && backgroundStyles.image3) }}
        background={{
            image: `url(${image3})`,
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
            src={image3}
            alt="Image 3"
            style={imageLoaded ? {} : { display: "none" }}
            onLoad={handleImageLoad}
            />
        </Box>
    );
};

export default ImageBox3;