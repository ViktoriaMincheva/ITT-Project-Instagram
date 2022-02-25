import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./StoriesSection.css";
import { v4 as uuidv4 } from 'uuid';
import Story from "./Story";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Modal from "../../components/Modal";
import { Carousel } from "@trendyol-js/react-carousel";
import { newStoryAdded } from "../../redux/actions/allStoriesActions";



export default function StoriesSection() {

    const dispatch = useDispatch();

    const allStories = useSelector(state => state.allStories.stories);
    const loggedUser = useSelector(state => state.userData);

    const [story, setStory] = useState(null);
    const [show, setShow] = useState(false);
    const [storyError, setStoryError] = useState("");
    const [storyUpload, setStoryUpload] = useState(false);

    const handleStoryUpload = (e) => {
        setShow(true);
    }

    const handleFileChange = (e) => {
        const { files } = e.target;
        if (files[0].type === "image/png" || files[0].type === "image/jpeg" || files[0].type === "image/jpg") {
            const localImageUrl = URL.createObjectURL(files[0]);
            setStory(localImageUrl);
        } else {
            setStoryError("Please choose a valid file type.")
        }
    };

    const handleStoryAdded = e => {
        e.preventDefault();
        if (story !== null) {
            let storyObj = {
                id : uuidv4(),
                username: loggedUser.username,
                userID: loggedUser.id,
                icon: loggedUser.profilePhoto, 
                url: story
            };
            dispatch(newStoryAdded(storyObj));
            setShow(false);
            setStoryUpload(true);
        } else {
            setStoryError("You did not make any changes");
        }
    }


    return (
        <div className="stories-container">

                <div className="carousel">
                    <div className={storyUpload ? "story-upload add-space" : "story-upload"}>
                        <img onClick={handleStoryUpload} className="story-upload-img" src="../images/icons/insta-story.png"/>
                        <p>Add</p>
                    </div>
                    {
                        allStories.map(story => {
                            return (<Story
                                username={story.username}
                                icon={story.icon}
                                key={story.id}
                            />)
                        })
                    }
                </div>

         <Modal title="Add story" onClose={() => setShow(false)} show={show}>
            <div className="add-story-container">
            {storyError && <div>{storyError}</div>}
                <form onSubmit={e => handleStoryAdded(e)}> 
                    <input type="file" accept=".png, .jpg, .jpeg" onChange={e => handleFileChange(e)} />
                    <button type="submit">Add Story</button>
                </form>
            </div>
          </Modal>
        </div>

    )
}