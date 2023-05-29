import Image from 'next/image'
import React, { useState } from 'react'
import backgroundImage from "../public/images/background2.png"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import Fade from "react-reveal/Fade";
import Login from './Login';
import SignupPart1 from './SignupPart1';
import useStateContext from '../context/ContextProvider';
import { getCookie } from 'cookies-next';
import SignupPart2 from './SignupPart2';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const LangingPage = ({ CJS_KEY }) => {

    const { signupUser } = useStateContext();
    const signupUserInfo = getCookie("signupUser") ? JSON.parse(getCookie("signupUser")) : signupUser


    const [value, setValue] = useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='w-screen h-screen md:grid place-items-center relative' >
            <div className='fixed inset-0 w-screen h-screen z-[-1] bg-indigo-600' >
                <Image alt="landing-page-background-image" src={backgroundImage} className="object-cover w-full h-full opacity-90" />
            </div>
            <Fade duration={500} >
                <div className='w-screen h-screen md:w-[550px] md:h-fit bg-[rgba(255,255,255,0.7)] md:bg-white md:rounded-md shadow-2xl' >

                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                            variant="fullWidth"


                        >
                            <Tab
                                icon={<ForwardToInboxIcon />}
                                iconPosition="start"

                                label="Sign in"
                                {...a11yProps(0)}
                            />
                            <Tab
                                icon={<WhatsAppIcon />}
                                iconPosition="start"
                                label="Register"
                                {...a11yProps(1)}
                            />
                        </Tabs>
                    </Box>

                    <TabPanel value={value} index={0}>
                        <Fade duration={500} >
                            <Login />
                        </Fade>
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        <Fade duration={500} >
                            {signupUserInfo ?
                                <SignupPart2 CJS_KEY={CJS_KEY} />
                                :
                                <SignupPart1 CJS_KEY={CJS_KEY} />
                            }
                        </Fade>
                    </TabPanel>


                </div >
            </Fade>
        </div >
    )
}

export default LangingPage