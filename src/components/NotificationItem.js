import styled from "@emotion/styled";
export default function NotificationItem(props) {

    const StyledContainer = styled.div`
        display: flex;
        justify-content: space-between;
        gap: 10px;
        align-items: center;
        padding: 0 16px;
        margin-bottom: 16px
    `
    const StyledMainContainer = styled.div`
        display:flex;
        align-items: center;
        gap: 10px;
    `
    const StyledUserImage = styled.img`
        width: 44px;
        height: 44px;
        border-radius: 50%;
    `
    const StyledPostImage = styled.img`
        width: 44px;
        height: 44px;
    `
    const StyledContent = styled.p`
        white-space: initial;
        font-size: 14px;
        margin: 0;
    `

    return (
        <StyledContainer>
            <StyledMainContainer>
                <StyledUserImage src={props.image} alt="user profile picture"/>
                <StyledContent><b>{props.username}</b> {props.notificationType}: {props.content} {props.time}</StyledContent>
            </StyledMainContainer>
            <StyledPostImage src={props.postImage} alt="post image"/>
        </StyledContainer>
    )
}