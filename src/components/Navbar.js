import React from 'react';
import { useState } from 'react';
import {
    Box,
    ResponsiveContext,
    Anchor,
    Image,
    Button,
    Header,
    DropButton,
    Text
} from 'grommet';
import { Menu as MenuIcon, Sun, Moon } from 'grommet-icons';
import { Link, useLocation } from 'react-router-dom';
import SEEFLogo from '../assets/SEEFLogo.png';
import { useHistory } from 'react-router-dom';

export default function Navbar({ routes, onThemeChange, themeMode }) {
    const location = useLocation();
    const [hoveredRoute, setHoveredRoute] = useState(null);

    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        history.push('/');
    };

    const [open, setOpen] = useState(false);
    const handleClickModal = (route) => {
        setOpen(false);
        // Perform any other actions you want when a link is clicked.
    };
    
    return (
        <>
            <ResponsiveContext.Consumer>
                {(size) =>
                size === 'small' || size === 'xsmall' || size === 'medium' ? (
                    
                    // In smaller screen sizes, show the menu button
                    <Header
                    background={themeMode === 'light' ? 'light-3' : 'dark-1'}
                    style={{ position: 'sticky', top: 0, zIndex: 1 }}
                    pad="medium"
                    height="xsmall"
                    >
                    <Button icon={<Image height="60px" src={SEEFLogo} />} onClick={handleClick} />
                    <Box justify="end">
                    <DropButton
                        open={open}
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        dropAlign={{ top: 'bottom', right: 'right' }}
                        dropContent={
                            <Box
                            background="light-3"
                            width="100vh" // Adjust the width as desired
                            height="400vh"
                            gap="large"
                            round="small"
                            elevation="medium"
                            justify="center"
                            align="center"
                            
                            >
                            {routes.map((route) => (
                                <Button
                                key={route.path}
                                as={Link}
                                to={route.path}
                                
                                label={
                                    <Text
                                    size="large"
                                    weight="bold"
                                    color={
                                        (themeMode === 'light' && hoveredRoute === route.path) || route.path === location.pathname
                                        ? 'control'
                                        : 'brand'
                                    }
                                    >
                                    {route.label}
                                    </Text>
                                }
                                plain
                                onClick={handleClickModal}
                                onMouseOver={() => setHoveredRoute(route.path)}
                                onMouseOut={() => setHoveredRoute(null)}
                                />
                            ))}
                            </Box>
                        }
                        >
                        <Box justify="center" align="center" pad="medium" background="brand" round="full" elevation="large">
                            <MenuIcon color="white" />
                        </Box>
                        </DropButton>
                    </Box>
                    </Header>
                ) : (
                    // In larger screen sizes, show the full header
                    <Header
                    background={themeMode === 'light' ? 'light-3' : 'dark-1'}
                    style={{ position: 'sticky', top: 0, zIndex: 1 }}
                    pad="medium"
                    height="xsmall"
                    >
                    <Button icon={<Image height="60px" src={SEEFLogo} />} onClick={handleClick} />
                    <Box justify="end" align="center" direction="row" gap="medium">
                        {routes.map((route) => (
                        <Anchor
                            key={route.path}
                            as={Link}
                            to={route.path}
                            label={route.label}
                            color={
                                themeMode === 'light'
                                ? hoveredRoute === route.path || route.path === location.pathname
                                    ? 'control' // Use the 'control' color for hover/active in light mode
                                    : 'brand' // Use the 'brand' color as the default color in light mode
                                : hoveredRoute === route.path || route.path === location.pathname
                                ? 'control' // Use the 'brand' color for hover/active in dark mode
                                : 'white' // Use white as the default color in dark mode
                            }
                            style={{
                            textDecoration: 'none',
                            cursor: 'pointer', // Add cursor pointer on hover
                            }}
                            onMouseOver={() => setHoveredRoute(route.path)}
                            onMouseOut={() => setHoveredRoute(null)}
                        />
                        ))}
                        <Button icon={themeMode === 'light' ? <Moon /> : <Sun />} onClick={onThemeChange} />
                    </Box>
                    </Header>
                )
                }
            </ResponsiveContext.Consumer>
        </>
    );
}
