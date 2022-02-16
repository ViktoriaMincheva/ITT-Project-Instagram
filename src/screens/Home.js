import { useEffect } from "react";
import DashboardPost from "../components/DashboardPostCard";
import HomeAsideSection from "../components/HomeAsideSection";
import StoriesSection from "../components/StoriesSection";
import styles from "../styles/homepage.module.css"

export default function Home() {

    // const fetchPosts = () => {
    //     fetch("../server/instagram-data.json")
    //     .then(resp => resp.json())
    //     .then(data => console.log(data))
    // }

    // useEffect(() => {
    //     fetchPosts();
    // }, [])


    const posts = [{
        "id": "g7QGbPEyIf",
        "username": "ny_photos",
        "icon": "https://i.pinimg.com/280x280_RS/4d/99/0e/4d990ec0ce2312f614dd4bdc59dcc387.jpg",
        "url": "https://i.pinimg.com/564x/e7/4c/ce/e74ccecdc8406f360645d6d707c4f4bd.jpg",
        "likes": "369",
        "timestamp": "1 day ago",
        "caption": "New York Nights!",
        "comments": [
            {
                "id": "NlSSH2LZRT",
                "username": "mmari",
                "icon": "https://i.pinimg.com/280x280_RS/29/e0/88/29e08837c138f2ec9589cd85cebe36be.jpg",
                "comment": "beautiful",
                "timestamp": "1d"
            },
            {
                "id": "Jdv-buHdtF",
                "username": "travel",
                "icon": "https://i.pinimg.com/280x280_RS/ad/51/bf/ad51bf38a2efa5c31fa3da3647d32b13.jpg",
                "comment": "great photo!",
                "timestamp": "16h"
            }
        ]
    },
    {
        "id": "vwnQ3h5sJp",
        "username": "space",
        "icon": "https://i.pinimg.com/280x280_RS/4d/99/0e/4d990ec0ce2312f614dd4bdc59dcc387.jpg",
        "url": "https://i.pinimg.com/564x/a6/2e/32/a62e32f55f9a3f293ca63362ff1de851.jpg",
        "likes": "246",
        "timestamp": "1 day ago",
        "caption": "whirling",
        "comments": [
            {
                "id": "eXd-AsrcUG",
                "username": "lou",
                "icon": "https://yt3.ggpht.com/ytc/AKedOLQehJ4auqTWu4mVXYos7mtNRmEmB_SzvqLgJ4vauw=s88-c-k-c0x00ffffff-no-rj",
                "comment": "woooooow",
                "timestamp": "2h"
            },
            {
                "id": "Ff-Z_PYZXg",
                "username": "darwin",
                "icon": "https://yt3.ggpht.com/sgGgBtsQUF2sUHh6t1R9XFVkomc0ki9WRT2yB0tA01BbhA9UJnNORsLK0meMLwK9NjpJgyeBzA=s88-c-k-c0x00ffffff-no-rj",
                "comment": "space is great!",
                "timestamp": "14h"
            }
        ]
    },
    {
        "id": "YGOM85VHiK",
        "username": "space",
        "icon": "https://i.pinimg.com/280x280_RS/4d/99/0e/4d990ec0ce2312f614dd4bdc59dcc387.jpg",
        "url": "https://i.pinimg.com/1200x/db/0d/af/db0dafd8f1701c2ce583559f84d38c18.jpg",
        "likes": "481",
        "timestamp": "2 days ago",
        "caption": "Solar System",
        "comments": [
            {
                "id": "eXd-AsrcUG",
                "username": "lou",
                "icon": "https://yt3.ggpht.com/ytc/AKedOLQehJ4auqTWu4mVXYos7mtNRmEmB_SzvqLgJ4vauw=s88-c-k-c0x00ffffff-no-rj",
                "comment": "woooooow",
                "timestamp": "2h"
            },
            {
                "id": "nrt0ktj4p5",
                "username": "darwin",
                "icon": "https://yt3.ggpht.com/sgGgBtsQUF2sUHh6t1R9XFVkomc0ki9WRT2yB0tA01BbhA9UJnNORsLK0meMLwK9NjpJgyeBzA=s88-c-k-c0x00ffffff-no-rj",
                "comment": "space is great!",
                "timestamp": "14h"
            },
            {
                "id": "I-Kv2-xnqd",
                "username": "travel",
                "icon": "https://i.pinimg.com/280x280_RS/ad/51/bf/ad51bf38a2efa5c31fa3da3647d32b13.jpg",
                "comment": "great photo!",
                "timestamp": "16h"
            },
            {
                "id": "0TT25WAg2z",
                "username": "mmari",
                "icon": "https://i.pinimg.com/280x280_RS/29/e0/88/29e08837c138f2ec9589cd85cebe36be.jpg",
                "comment": "beautiful",
                "timestamp": "1d"
            }
        ]
    },
    {
        "id": "l1OElkXkB9",
        "username": "ny_photos",
        "icon": "https://i.pinimg.com/280x280_RS/4d/99/0e/4d990ec0ce2312f614dd4bdc59dcc387.jpg",
        "url": "https://i.pinimg.com/564x/17/6e/80/176e80989f107b259632d8524565c9ba.jpg",
        "likes": "769",
        "time-posted": "2 days ago",
        "caption": "Central park!",
        "comments": [
            {
                "id": "pyyqwbmugP",
                "username": "mmari",
                "icon": "https://i.pinimg.com/280x280_RS/29/e0/88/29e08837c138f2ec9589cd85cebe36be.jpg",
                "comment": "i love it",
                "timestamp": "1d"
            },
            {
                "id": "Mk7qavdHLH",
                "username": "travel",
                "icon": "https://i.pinimg.com/280x280_RS/ad/51/bf/ad51bf38a2efa5c31fa3da3647d32b13.jpg",
                "comment": "best place!",
                "timestamp": "16h"
            },
            {
                "id": "Dv4epNCe5J",
                "username": "lou",
                "icon": "https://yt3.ggpht.com/ytc/AKedOLQehJ4auqTWu4mVXYos7mtNRmEmB_SzvqLgJ4vauw=s88-c-k-c0x00ffffff-no-rj",
                "comment": "i love spending time here",
                "timestamp": "2h"
            }
        ]
    },
    {
        "id": "qMXWEcooKh",
        "username": "travel",
        "icon": "https://i.pinimg.com/280x280_RS/ad/51/bf/ad51bf38a2efa5c31fa3da3647d32b13.jpg",
        "url": "https://i.pinimg.com/564x/97/8d/96/978d96bd9f583965fa51b3b095bb5e38.jpg",
        "likes": "588",
        "time-posted": "2 days ago",
        "caption": "Sunset",
        "comments": [
            {
                "id": "0-gLXZCSdh",
                "username": "lou",
                "icon": "https://yt3.ggpht.com/ytc/AKedOLQehJ4auqTWu4mVXYos7mtNRmEmB_SzvqLgJ4vauw=s88-c-k-c0x00ffffff-no-rj",
                "comment": "that's a great photo",
                "timestamp": "2h"
            },
            {
                "id": "05W6QouzgG",
                "username": "darwin",
                "icon": "https://yt3.ggpht.com/sgGgBtsQUF2sUHh6t1R9XFVkomc0ki9WRT2yB0tA01BbhA9UJnNORsLK0meMLwK9NjpJgyeBzA=s88-c-k-c0x00ffffff-no-rj",
                "comment": "pretty colors",
                "timestamp": "14h"
            },
            {
                "id": "pDWTUIp3J9",
                "username": "mmari",
                "icon": "https://i.pinimg.com/280x280_RS/29/e0/88/29e08837c138f2ec9589cd85cebe36be.jpg",
                "comment": "amazing!",
                "timestamp": "1d"
            }
        ]
    },
    {
        "id": "qMXWEcooKh",
        "username": "mmari",
        "icon": "https://i.pinimg.com/280x280_RS/29/e0/88/29e08837c138f2ec9589cd85cebe36be.jpg",
        "url": "https://i.pinimg.com/564x/d1/c4/01/d1c40195db164cc8c0d254c2dc35e2a1.jpg",
        "likes": "688",
        "timestamp": "3 days ago",
        "caption": "My view",
        "comments": [
            {
                "id": "0-gLXZCSdh",
                "username": "lou",
                "icon": "https://yt3.ggpht.com/ytc/AKedOLQehJ4auqTWu4mVXYos7mtNRmEmB_SzvqLgJ4vauw=s88-c-k-c0x00ffffff-no-rj",
                "comment": "that's a great photo",
                "timestamp": "2h"
            },
            {
                "id": "I-Kv2-xnqd",
                "username": "travel",
                "icon": "https://i.pinimg.com/280x280_RS/ad/51/bf/ad51bf38a2efa5c31fa3da3647d32b13.jpg",
                "comment": "great photo!",
                "timestamp": "16h"
            },
            {
                "id": "pDWTUIp3J9",
                "username": "mmari",
                "icon": "https://i.pinimg.com/280x280_RS/29/e0/88/29e08837c138f2ec9589cd85cebe36be.jpg",
                "comment": "amazing!",
                "timestamp": "1d"
            }
        ]
    },
    {
        "id": "8dSilYujaF",
        "username": "space",
        "icon": "https://i.pinimg.com/280x280_RS/4d/99/0e/4d990ec0ce2312f614dd4bdc59dcc387.jpg",
        "url": "https://www.satellitetoday.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-13-at-5.50.12-PM-800x490.png",
        "likes": "881",
        "timestamp": "3 days ago",
        "caption": "Earth",
        "comments": [
            {
                "id": "4BsPPPec6-",
                "username": "lou",
                "icon": "https://yt3.ggpht.com/ytc/AKedOLQehJ4auqTWu4mVXYos7mtNRmEmB_SzvqLgJ4vauw=s88-c-k-c0x00ffffff-no-rj",
                "comment": "woooooow",
                "timestamp": "2h"
            },
            {
                "id": "6_gHiiJiAC",
                "username": "darwin",
                "icon": "https://yt3.ggpht.com/sgGgBtsQUF2sUHh6t1R9XFVkomc0ki9WRT2yB0tA01BbhA9UJnNORsLK0meMLwK9NjpJgyeBzA=s88-c-k-c0x00ffffff-no-rj",
                "comment": "space is great!",
                "timestamp": "14h"
            },
            {
                "id": "CXDn2-_x3s",
                "username": "travel",
                "icon": "https://i.pinimg.com/280x280_RS/ad/51/bf/ad51bf38a2efa5c31fa3da3647d32b13.jpg",
                "comment": "great photo!",
                "timestamp": "16h"
            }
        ]
    }];

    return (
        <main className={styles.main}>

            <section className={styles.leftSection}>
                <StoriesSection />
                <DashboardPost
                    username="alexxxx"
                    icon="https://images.gr-assets.com/users/1638468334p6/44510807.jpg"
                    postUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.holidayguru.nl%2Fwp-content%2Fuploads%2F2018%2F05%2FManhattanhenge-iStock_42105234_XLARGE-2.jpg&f=1&nofb=1"
                    likes="32"
                    caption="wish i was here"
                    timestamp="2 days ago" />
            </section>

            <HomeAsideSection />

        </main>
    )
}