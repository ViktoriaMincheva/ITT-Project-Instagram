
export default function UserInputField(props) {

    return(
        <input
        className={props.className}
        type={props.type}
        className={props.className}
        onInput={props.onInput}
        value={props.value}
        placeholder={props.placeholder}
        required
        />
    )
}