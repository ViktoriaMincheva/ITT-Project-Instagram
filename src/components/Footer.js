import styled from "@emotion/styled"

export default function Footer(props) {

    const StyledLink = styled.a`
        text-decoration: none;
        color: #8e8e8e;
        margin: 4px;
        font-size: small;
        cursor: pointer;
    `

    const StyledP = styled.p`
        color: #8e8e8e;
        font-size: small;
    `
    return(
        <footer className={props.className}>
            <div>
                <StyledLink href="https://about.facebook.com/meta">Meta</StyledLink>
                <StyledLink href="https://about.instagram.com/">About</StyledLink>
                <StyledLink href="https://about.instagram.com/blog/">Blog</StyledLink>
                <StyledLink href="https://www.instagram.com/about/jobs/">Jobs</StyledLink>
                <StyledLink href="https://help.instagram.com/">Help</StyledLink>
                <StyledLink href="https://developers.facebook.com/docs/instagram">API</StyledLink>
                <StyledLink href="https://www.instagram.com/legal/privacy/">Privacy</StyledLink>
                <StyledLink href="https://www.instagram.com/legal/terms/">Terms</StyledLink>
                <StyledLink href="https://www.instagram.com/directory/profiles/">Top accounts</StyledLink>
                <StyledLink href="https://www.instagram.com/directory/hashtags/">Hashtags</StyledLink>
                <StyledLink href="https://www.instagram.com/explore/locations/">Locations</StyledLink>
                <StyledLink href="https://www.instagram.com/web/lite/">Instagram Lite</StyledLink>
            </div>

            <StyledP> &copy; 2022 Instagram from Meta </StyledP>
        </footer>
    )
}