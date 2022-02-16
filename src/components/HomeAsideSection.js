import HomeAsideHeader from "./HomeAsideHeader";
import ProfileSuggestion from "./ProfileSuggestion";
import styled from "@emotion/styled";
import Footer from "../components/Footer"
import styles from "../styles/home-aside-section.module.css"

export default function HomeAsideSection() {

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

    return (
        <section className={styles.wrapper}>
            <HomeAsideHeader icon={loggedUser.icon} username={loggedUser.username} name={loggedUser.name} />
            <div>
                <Heading>Suggestions for you</Heading>
                <ProfileSuggestion icon="https://play-lh.googleusercontent.com/8QnH9AhsRfhPott7REiFUXXJLRIxi8KMAP0mFAZpYgd44OTOCtScwXeb5oPe1E4eP4oF=s180-rw" username="the_goat" info="New to Instagram" />
                <ProfileSuggestion icon="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76e7d561-6238-40b4-9cab-d6963399326a/d29xj34-69c4ec0f-32d5-4cea-8dd4-b4fc07ed0c8d.jpg/v1/fill/w_900,h_675,q_75,strp/kangaroo_smile_by_votra_d29xj34-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njc1IiwicGF0aCI6IlwvZlwvNzZlN2Q1NjEtNjIzOC00MGI0LTljYWItZDY5NjMzOTkzMjZhXC9kMjl4ajM0LTY5YzRlYzBmLTMyZDUtNGNlYS04ZGQ0LWI0ZmMwN2VkMGM4ZC5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Ln5CfIcR24HQ6lznpDmLcaHc5uwFuiLr3xBztMqBycY" username="kenguruguru" info="New to Instagram" />
                <ProfileSuggestion icon="https://i.pinimg.com/736x/25/40/de/2540de1db897bbbc4972d348447f0bb8.jpg" username="mochimochi" info="Follows you" />
                <ProfileSuggestion icon="https://pbs.twimg.com/profile_images/962170088941019136/lgpCD8X4_400x400.jpg" username="smoggy_the_doggy" info="Suggested" />
                <ProfileSuggestion icon="https://i.pinimg.com/564x/f0/3a/34/f03a349219e07c262f961a9afefb9a66.jpg" username="lazyboy123" info="Suggested" />
            </div>
            <Footer className={styles.footer}/>
        </section>

    )



}