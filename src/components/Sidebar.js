import { Box, Button, Text, Image, Spinner, Layer } from 'grommet'; // Import Layer for logout confirmation
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { Link, useLocation } from 'react-router-dom';
import SEEFLogo from '../assets/SEEFLogo.png';
import { Sun, Moon } from 'grommet-icons';

const Sidebar = ({ adminRoutes, onThemeChange, themeMode }) => {
    const { logout, isPending } = useLogout();
    const { user } = useAuthContext();
    const location = useLocation();

    return (
        <Box
            width={{ min: '200px', max: '250px' }}
            background="dark-2"
            elevation="medium"
            style={{ position: 'sticky', top: '0px', height: '100vh', overflowY: 'auto' }}
        >
            <Box align="center" alignSelf="center" margin={{ bottom: 'large' }}>
                <Box margin={{ top: 'large' }}>
                    <Button
                        as={Link}
                        to="/dashboard"
                        icon={<Image height="60px" src={SEEFLogo} />}
                        plain
                    />
                </Box>

                <Box overflow="hidden" align="center" direction="row" gap="medium" >
                    <Text weight="bold">Hello, {user?.displayName || 'Guest'}</Text>
                    <Button icon={themeMode === 'light' ? <Moon /> : <Sun />} onClick={onThemeChange} />
                </Box>

                <Box direction="column" gap="small" align="center">
                    {adminRoutes.map((route) => (
                        <Box key={route.path} width="100%">
                        <Button
                            as={Link}
                            to={route.path}
                            label={route.label}
                            icon={route.icon}
                            color="control"
                            plain
                            hoverIndicator="brand"
                            style={{
                                padding: '12px',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                textTransform: 'capitalize',
                                background: location.pathname === route.path ? 'rgba(0, 120, 255, 0.2)' : 'transparent',
                                border: `2px solid transparent`,
                            }}
                        />
                    </Box>
                    ))}
                </Box>

                <Box>
                <Button
                                    
                                    alignSelf="center"
                                    color="brand"
                                    pad={{ vertical: 'small', horizontal: 'medium' }}
                                    
                                    hoverIndicator="control"
                                    onClick={logout}
                                    label={isPending ? <Spinner size="small" /> : <Text weight="bold">Logout</Text>}
                                />
                </Box>
               
            </Box>
        </Box>
    );
};

export default Sidebar;
