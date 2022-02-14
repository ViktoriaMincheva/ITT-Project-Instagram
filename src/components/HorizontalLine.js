import styled from "@emotion/styled"

export default function Line() {
    const StyledLine = styled.div`
    display: flex;
    margin-top: 25px;
    justify-content: center;
    align-items: center;
    width: 294px;
`

    const StyledText = styled.div`
    font-size: 13px;
    font-weight: 600;
    line-height: 15px;
    margin: 6px 18px;
    text-transform: uppercase;
    color: #8e8e8e;
`
    const StyledHr = styled.div`
    top: 0.45em;
    height: 1px;
    background-color: #dbdbdb;
    width: 50%;
`

    return (
        <StyledLine>
            <StyledHr />
            <StyledText> or </StyledText>
            <StyledHr />
        </StyledLine>
    )
}