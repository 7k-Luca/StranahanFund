
const theme = {
    global: {
        breakpoints: {
            xsmall: {
            value: 375,
            },
            small: {
            value: 568,
            edgeSize: {
                none: '0px',
                small: '6px',
                medium: '12px',
                large: '24px',
            },
            },
            medium: {
            value: 768,
            edgeSize: {
                none: '0px',
                small: '12px',
                medium: '24px',
                large: '48px',
            },
            },
            large: {
            value: 1024,
            edgeSize: {
                none: '0px',
                small: '12px',
                medium: '24px',
                large: '48px',
            },
            },
            xlarge: {
            value: 1366,
            edgeSize: {
                none: '0px',
                small: '12px',
                medium: '24px',
                large: '48px',
            },
            },
        },
        font: {
            family: "Roboto",
            size: "18px",
            height: "20px"
        },
        colors: {
            // Set the color for inactive tabs
            brand: '#13265c',
            // Set the color for active tabs
            control: '#418ccd',
            // default background color
            background: 'light-3',
        },
        text: {
            extend: { lineHeight:'2.2rem'},
        }
        },
    };
    
    export default theme;