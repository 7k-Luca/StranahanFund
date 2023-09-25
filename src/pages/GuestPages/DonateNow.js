import {useState} from 'react'
import {
  Box, Heading, Spinner
} from 'grommet'

export default function DonateNow() {
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <Box>
      {loading && (
        // Show the loading spinner here
        // You can replace this with any loading spinner component you prefer
        <Box 
          height="100vh"
          width="100%"
          display="flex"
          justify='center'
          align='center'
          direction="column"
        >
          <Spinner size="large"/>
          <Heading level="2" margin="medium">Loading...</Heading>
        </Box>
      )}
      <iframe  
        height="1500px" 
        src="https://secure.1stpaygateway.net/secure/custompayment/browardeducationfoundation2/15223/default.aspx?" 
        title="Broward Education Foundation Donation"
        frameBorder="0"
        onLoad={handleIframeLoad}
        style={{ display: loading ? 'none' : 'block'}}
      />
      
    </Box>
  )
}
