import styled from "@emotion/styled"
import { Link } from "react-router-dom"

export function GetTheApp() {

    const StyledContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 350px;
        box-sizing: border-box;
    `
    const StyledImgContainer = styled.div`
        display: flex;
        flex-direction: row;

    `
    const StyledParagraph = styled.p`
        color: #262626;
        font-size: 14px;
    `
    return (
        <StyledContainer>
            <p>Get the app</p>
            <StyledImgContainer>
                <Link to="https://apps.apple.com/app/instagram/id389801252?vt=lo">
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                        alt="AppStore"
                        height="40px"
                        width="136px" />
                </Link>
                <Link to="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D811845C8-FB29-49A8-827B-63CDCDA73DD2%26utm_content%3Dlo%26utm_medium%3Dbadge">
                    <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                        alt="GoogleStore"
                        height="40px"
                        width="136px" />
                </Link>

            </StyledImgContainer>
        </StyledContainer>
    )
}