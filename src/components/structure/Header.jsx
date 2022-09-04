import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';


const NavDiv = styled.div`  
display: flex;
width: 100wh;
`

const Header = (props) => {

    return (

        <>
            <NavDiv>
                <Box sx={{ flexGrow: 1 }} >
                    <AppBar position="static" >
                        <Toolbar>
                            <Button component={NavLink} to='/' color="inherit">Home</Button>
                            <Button component={NavLink} to='/listings' color="inherit">Now Showing</Button>
                            <Button component={NavLink} to='/newReleases' color="inherit">New Releases</Button>
                            <Button component={NavLink} to='/bookNow' color="inherit">Book Now</Button>
                            <Button component={NavLink} to='/payForTickets' color="inherit">Tickets</Button>
                            <Button component={NavLink} to='/classifications' color="inherit">Movie Classifications</Button>
                            <Button component={NavLink} to='/placesToGo' color="inherit">Places To Go</Button>
                            <Button component={NavLink} to='/discussionBoard' color="inherit">Discussion</Button>
                            <Button component={NavLink} to='/screens' color="inherit">Screens</Button>
                            <Button component={NavLink} to='/contact' color="inherit">Contact Us</Button>
                            <Button component={NavLink} to='/openingTimes' color="inherit">Openings</Button>
                            <Button component={NavLink} to='/travelPage' color="inherit">Travel</Button>
                            <Button component={NavLink} to='/aboutPage' color="inherit">About</Button>
                            {/* <SearchBar setSearchResult={props.setSearchResult} /> */}
                        </Toolbar>
                    </AppBar>
                </Box>
            </NavDiv>

        </>

        // <div className="header">
        //     <div className="logo"><Link to='/'><img alt="Logo" src="https://cdn.discordapp.com/attachments/768054278933184533/1014837355909226497/qa-cinemas-logo-transp.png" width={70} height={45}/></Link></div>
        //     <div className="nav">
        //         <div className="navLinks">
        //             <Link to='/newReleases'>New Releases</Link>
        //             <Link to='/bookNow'>Book Now</Link>
        //             <Link to='/payForTickets'>Pay For Tickets</Link>
        //             <Link to='/classifications'>Movie Classifications</Link>
        //             <Link to='/placesToGo'>Places To Go</Link>
        //             <Link to='/discussionBoard'>Discussion Board</Link>
        //             <Link to='/screens'>Screens</Link>
        //             <Link to='/contact'>Contact Us</Link>
        //             <Link to='/openingTimes'>Opening Times</Link>
        //             <Link to='/travelPage'>Travel Page</Link>
        //             <Link to='/aboutPage'>About Page</Link>
        //         </div>
        //         <SearchBar setSearchResult={props.setSearchResult} />
        //     </div>
        // </div>
    );

};

export default Header;
