import { useState } from "react";
import { useSelector } from "react-redux";
import "./StoriesSection.css";
import Story from "./Story";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Modal from "../../components/Modal";
import ImageUpload from "../../components/ImageUpload";
import { Carousel } from "@trendyol-js/react-carousel"



export default function StoriesSection() {

    const allStories = useSelector(state => state.allStories.stories);
    const allUsers = useSelector(state => state.users.users);

    const [show, setShow] = useState(false);

    const handleCreate = (e) => {
        setShow(true);
    }



    return (
        <div className="stories-container">
            <div className="story-upload">
                <img className="story-upload-img" src="../images/icons/insta-story.png"/>
            </div>

            <Carousel infinite={false} leftArrow={<ArrowCircleLeftIcon color="action" />} rightArrow={<ArrowCircleRightIcon color="action" />} show={6} slide={3} swipeOn={false} className="stories-section">

                {
                    allStories.map(story => {
                        return (<Story
                            username={story.username}
                            icon={story.icon}
                            key={story.id}
                        />)
                    })
                }
            </Carousel>

         <Modal title="Create new post" onClose={() => setShow(false)} show={show}>
            <ImageUpload/>
          </Modal>
        </div>



    )
}