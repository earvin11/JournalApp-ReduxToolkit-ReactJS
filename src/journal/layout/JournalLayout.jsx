import { Box } from '@mui/system';
import { NavBar, SideBar } from '../components';

export const JournalLayout = ({ children }) => {

    const drawerWidth = 240;

    return(
        <Box sx={{ display: 'flex' }}>

            {/* Navbar */}
            <NavBar drawerWidth={ drawerWidth } />

            {/* Sidebar */}
            <SideBar drawerWidth={ drawerWidth } />

            <Box 
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >

                {/* Toolbar */}

                { children }

            </Box>

        </Box>
    )
}