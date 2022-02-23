import styled from "@emotion/styled";
import HomeAsideHeader from "./HomeAsideHeader";
import ProfileSuggestion from "./ProfileSuggestion";
import Footer from "../../components/Footer"
import styles from "./HomeAsideSection.module.css"
import { useSelector } from 'react-redux';

export default function HomeAsideSection() {

    const users = useSelector(state => state.users.users);
    const user = useSelector(state =>  state.userData);

    let loggedUser = {
        icon: "https://www.meme-arsenal.com/memes/d2d23ade47c65dcf4c00c14746e27928.jpg",
        username: "AVInstaPr",
        name: "AV Project"
    }

    const Heading = styled.p`
    color: #8e8e8e;
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    `
    let allUsers = users.filter((u) => {
        return u.username !== user.username;
    })
    const shuffled = allUsers.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 5);


    return (
        <section className={styles.wrapper}>
            <HomeAsideHeader icon={loggedUser.icon} username={loggedUser.username} name={loggedUser.name} />
            <div>
                <Heading>Suggestions for you</Heading>
                {
                    selected.map((suggestion) => 
                     (<ProfileSuggestion icon={suggestion.profilePhoto} username={suggestion.username} info="Suggested"/>)
                    )
                }

            </div>
            <Footer className={styles.footer}/>
        </section>

    )



}