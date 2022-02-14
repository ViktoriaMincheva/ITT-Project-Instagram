import { Link } from "react-router-dom";

export default function AccountCheckBox(props) {

    return (
        <div className={props.className}>
            <p>{props.pTitle} <Link to={props.href}>{props.linkTitle}</Link> </p>
            
        </div>
    )
}