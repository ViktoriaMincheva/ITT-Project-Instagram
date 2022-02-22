import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from "../styles/Header.module.css";
import stylesNotifications from "../styles/NotificationMenu.module.css";
import NotificationItem from './NotificationItem';
import { useState } from "react";

export default function NotificationMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [imageSrc, setImageSrc] = useState("../images/icons/heart.png");
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setImageSrc("../images/icons/heart-notifications.png");
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setImageSrc("../images/icons/heart.png");
        setAnchorEl(null);
    };

    return (
        <>
            <div onClick={handleClick}>
                <img src={imageSrc} alt="notifications" className={styles.headerIcon}/>
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
                        width: 500,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10
                    },
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
                        mt: 1.2,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1
                        },
                        '& .MuiList-root': {
                            padding: 0
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 7,
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
            <p className={stylesNotifications.Title}>Earlier</p>
            <NotificationItem 
                image="https://i.pinimg.com/736x/25/40/de/2540de1db897bbbc4972d348447f0bb8.jpg"
                username="mochimochi"
                notificationType="liked your photo"
                content=""
                time="1 w"
                postImage="https://exploringbits.com/wp-content/uploads/2022/01/animal-pfp-12.jpg?ezimgfmt=rs:352x352/rscb3/ng:webp/ngcb3"
            />
            <NotificationItem 
                image="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                username="catLover123"
                notificationType="liked your comment"
                content="I need those glasses 😻😻😻!"
                time="11 w"
                postImage="https://ae01.alicdn.com/kf/H0ce36e01460d4c31ad2c2ae2d71b2428C/Pet-Products-Lovely-Vintage-Round-Cat-Sunglasses-Reflection-Eye-wear-glasses-For-Small-Dog-Cat-Pet.jpg_Q90.jpg_.webp"
            />
            <NotificationItem 
                image="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                username="catLover123"
                notificationType="mentioned you in a comment"
                content="look at this @AVInstaPr"
                time="11 w"
                postImage="https://ae01.alicdn.com/kf/H0ce36e01460d4c31ad2c2ae2d71b2428C/Pet-Products-Lovely-Vintage-Round-Cat-Sunglasses-Reflection-Eye-wear-glasses-For-Small-Dog-Cat-Pet.jpg_Q90.jpg_.webp"
            />
            <NotificationItem 
                image="https://yt3.ggpht.com/ytc/AKedOLTrlJfCzZbtiudpATHfnWZmQp49sLqn0jj3mRbK4g=s900-c-k-c0x00ffffff-no-rj"
                username="memecat"
                notificationType="liked your comment"
                content="omg, you look great here... 😍"
                time="18 w"
                postImage="https://yt3.ggpht.com/ytc/AKedOLTrlJfCzZbtiudpATHfnWZmQp49sLqn0jj3mRbK4g=s900-c-k-c0x00ffffff-no-rj"
            />
            <NotificationItem 
                image="https://64.media.tumblr.com/86ed36645103aa3e0c8637844bacd9e3/tumblr_pd23k0wZbj1ri87b4o1_1280.jpg"
                username="thegrumpycat"
                notificationType="started following you"
                content=""
                time="23 w"
                postImage="images/icons/profile.png"
            />
                
            </Menu>
        </>
    )
}