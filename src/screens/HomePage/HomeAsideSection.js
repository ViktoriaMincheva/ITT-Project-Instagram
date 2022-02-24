import styled from "@emotion/styled";
import HomeAsideHeader from "./HomeAsideHeader";
import ProfileSuggestion from "./ProfileSuggestion";
import Footer from "../../components/Footer"
import styles from "./HomeAsideSection.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { followUserAction, unfollowUserAction } from "../../redux/actions/userActions";

export default function HomeAsideSection() {
    
    const dispatch = useDispatch();

    const users = useSelector(state => state.users.users);
    const loggedUser = useSelector(state =>  state.userData);

    const handleFollowClick = userID => {
        if (loggedUser.following.some(id => id === userID)) {
            dispatch(unfollowUserAction(userID))
        } else {
            dispatch(followUserAction(userID))
        }
    }
    const Heading = styled.p`
    color: #8e8e8e;
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    `
    let allUsers = users.filter((u) => {
        return u.username !== loggedUser.username;
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
                     (<ProfileSuggestion 
                        key={suggestion.id}
                        onClick={() => handleFollowClick(suggestion.id)} 
                        icon={suggestion.profilePhoto} 
                        username={suggestion.username} 
                        info="Suggested" 
                        followed={loggedUser.following.some(id => id === suggestion.id)} 
                    />)
                    )
                }

            </div>
            <Footer className={styles.footer}/>
        </section>

    )



}