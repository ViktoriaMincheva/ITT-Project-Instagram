import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <>
            <h2>Sorry, this page isn't available.</h2>
            <p>The link you followed may be broken, or the page may have been removed. <Link to="/">Go back to Instagram.</Link> </p>
        </>
    )
}