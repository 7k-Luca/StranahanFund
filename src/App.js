import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'
import { useState, useEffect } from 'react'


// styles
import theme from './theme'

// pages
import Home from './pages/GuestPages/Home'
import About from './pages/GuestPages/About'
import Scholarship from './pages/GuestPages/Scholarship'
import Login from './pages/GuestPages/Login'
import Contact from './pages/GuestPages/Contact'
import Donate from './pages/GuestPages/Donate'
import DonateNow from './pages/GuestPages/DonateNow';
import News from './pages/GuestPages/News'
import Newsletter from './pages/GuestPages/Newsletter'
import NotFound from './pages/NotFound'

// admin pages
import Dashboard from './pages/AdminPages/dashboard/Dashboard'
import CreateProject from './pages/AdminPages/dashboard/CreateProject'
import Project from './pages/AdminPages/dashboard/Project';
import EventAdminPage from './pages/AdminPages/events/Event'
import AdminContact from './pages/AdminPages/contacts/adminContact'
import AdminScholarship from './pages/AdminPages/scholarships/AdminScholarship'
import AdminNewsletter from './pages/AdminPages/newsletter/Newsletter';
import Signup from './pages/AdminPages/Signup'

// components
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

// grommet
import { Grommet, Box, Grid } from 'grommet';
import {Dashboard as Dash, Achievement, Contact as ContactIcon, Calendar, Article, Login as LoginIcon} from 'grommet-icons'




const routes = [
  { path: '/', label: 'home', component: Home },
  { path: '/about', label: 'about', component: About },
  { path: '/scholarship', label: 'scholarship', component: Scholarship },
  { path: '/donate', label: 'donate', component: Donate },
  { path: '/news', label: 'news', component: News },
  { path: '/contact', label: 'contact', component: Contact },
];

const adminRoutes = [
  { path: '/dashboard', label: 'Dashboard', icon: <Dash/> },
  { path: '/contact-management', label: 'Contact Management', icon: <ContactIcon/> },
  { path: '/scholarship-management', label: 'Scholarship Management', icon: <Achievement/> },
  { path: '/event-management', label: 'Event Management', icon: <Calendar/> },
  { path: '/newsletter', label: 'Newsletter', icon: <Article />},
  { path: '/signup', label: 'Sign Up', icon: <LoginIcon/> },
]

function App() {
  const { user, authIsReady } = useAuthContext()

  const [themeMode, setThemeMode] = useState('light');

  const handleThemeChange = () => {
    setThemeMode((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  function ScrollToTopOnMount() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  return (
    <Grommet background={themeMode === 'light' ? 'light-3' : 'dark-1'} theme={theme} themeMode={themeMode} >
      {authIsReady && (
        <Router>
          <ScrollToTopOnMount/>

          {/* !user */}
          {!user && (
                <d>
                  <Navbar themeMode={themeMode} onThemeChange={handleThemeChange} routes={routes} />
                  <Switch>
                    {/* Guest Pages */}
                    {routes.map(({ path, component }) => (
                      <Route key={path} exact path={path} component={component} />
                    ))}         
                    {/* Login Page */}
                    <Route exact path="/login" component={Login} />
                    {/* Newsletter */}
                    <Route exact path="/newsletter-signup" component={Newsletter}/>
                    {/* Donate Now */}
                    <Route exact path="/donate-now" component={DonateNow}/>
                    {/* 404 Page */}
                    <Route path="*" component={NotFound} />  
                  </Switch>
                  <Footer/>
                </d>
                )}

            {/* user */}
            {user &&  (
              <Grid fill columns={['250px', 'flex']}>
                <Sidebar  themeMode={themeMode} onThemeChange={handleThemeChange}  adminRoutes={adminRoutes}/>
                <Box>
                  <Switch>
                    {/* Admin Pages */}
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/create-project" component={CreateProject} />
                    <Route exact path="/projects/:id" component={Project}/>
                    <Route exact path="/scholarship-management" component={AdminScholarship} />
                    <Route exact path="/event-management" component={EventAdminPage} />
                    <Route exact path="/contact-management" component={AdminContact} />
                    <Route exact path="/newsletter" component={AdminNewsletter} />
                    <Route exact path="/signup" component={Signup} />
                    {/* 404 Page */}
                    <Route path="*" component={NotFound} /> 
                  </Switch>
                </Box>
              </Grid>
            )}
      </Router>
      )}
    </Grommet>
  );
}

export default App
