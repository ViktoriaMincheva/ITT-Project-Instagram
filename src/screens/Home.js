import DashboardPost from "../components/DashboardPostCard";
import StoriesSection from "../components/StoriesSection";

export default function Home() {

    return (
        <main>

        <StoriesSection />
            <DashboardPost
                username="alexxxx"
                icon="https://images.gr-assets.com/users/1638468334p6/44510807.jpg"
                postUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.holidayguru.nl%2Fwp-content%2Fuploads%2F2018%2F05%2FManhattanhenge-iStock_42105234_XLARGE-2.jpg&f=1&nofb=1"
                likes="32"
                caption="wish i was here"
                timestamp="2 days ago" />
        </main>
    )
}