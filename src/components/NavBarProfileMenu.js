import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import styles from "../styles/Header.module.css";
import stylesMenu from "../styles/NavBarProfileMenu.module.css";
import { Link } from 'react-router-dom';

export default function NavBarProfileMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div onClick={handleClick}>
                <img src="images/icons/profile.png" alt="profile pic" className={styles.headerIcon} />
            </div>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    style: {
                        width: 230,
                        display: 'flex',
                        flexDirection: 'column'
                    },
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
                        mt: 1.2,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 15
                        },
                        '& .MuiList-root': {
                            padding: 0
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 10,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0
                        },
                        
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Link to="/my-profile" style={{ textDecoration: 'none' }}>
                    <MenuItem className={stylesMenu.MenuItem}>
                    <img src="images/icons/profile-2.png" alt="profile icon" className={stylesMenu.menuIcons}/> <p className={stylesMenu.MenuTitle}>Profile</p>
                    </MenuItem>
                </Link>
                {/* TODO: change links */}
                <Link to="/my-profile" style={{ textDecoration: 'none' }}>
                    <MenuItem className={stylesMenu.MenuItem}>
                        <img src="images/icons/non-saved.png" alt="saved icon" className={stylesMenu.menuIcons}/> <p className={stylesMenu.MenuTitle}>Saved</p>
                    </MenuItem>
                </Link>
                <Link to="/my-profile" style={{ textDecoration: 'none' }}>
                    <MenuItem className={stylesMenu.MenuItem}>
                        <img src="images/icons/settings.png" alt=" icon" className={stylesMenu.menuIcons}/> <p className={stylesMenu.MenuTitle}>Settings</p>
                    </MenuItem>
                </Link>
                <Link to="/my-profile" style={{ textDecoration: 'none' }}>
                    <MenuItem className={stylesMenu.MenuItem}>
                        <img src="images/icons/switch.png" alt=" icon" className={stylesMenu.menuIcons}/> <p className={stylesMenu.MenuTitle}>Switch accounts</p>
                    </MenuItem>
                </Link>
                <Divider sx={{ borderBottomWidth: 1.5}} />
                <Link to="/my-profile" style={{ textDecoration: 'none' }}>
                    <MenuItem className={stylesMenu.MenuItem}>
                        <p className={stylesMenu.MenuTitle}>Log out</p>
                    </MenuItem>
                </Link>
                
            </Menu>
        </>
    )
}