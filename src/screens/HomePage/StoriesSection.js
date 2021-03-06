import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./StoriesSection.css";
import { v4 as uuidv4 } from 'uuid';
import Modal from "../../components/Modal";
import { newStoryAdded } from "../../redux/actions/allStoriesActions";
import StoryModal from "./StoryModal";
import Story from "./Story";
import Stories from "react-insta-stories";


export default function StoriesSection() {

    const dispatch = useDispatch();

    const allStories = useSelector(state => state.allStories.stories);
    const loggedUser = useSelector(state => state.userData);

    const [story, setStory] = useState(null);
    const [show, setShow] = useState(false);
    const [showOpenStory, setShowOpenStory] = useState(false);
    const [storyError, setStoryError] = useState("");
    const [openedStory, setOpenedStory] = useState("");
    const [storyUpload, setStoryUpload] = useState(false);
    const [uploadError, setUploadError] = useState(false);

    const handleStoryUpload = (e) => {
        setShow(true);
    }

    const handleFileChange = (e) => {
        const { files } = e.target;
        if (files[0].type === "image/png" || files[0].type === "image/jpeg" || files[0].type === "image/jpg") {
            const localImageUrl = URL.createObjectURL(files[0]);
            setStory(localImageUrl);
            setUploadError(false);
        } else {
            setUploadError(true);
            setStory(null);
            setStoryError("Please choose a valid file type.")
        }
    };

    let storyObj;
    let header ={};
    const handleStoryOpen = storyID => {
        storyObj = allStories.filter(story => story.id === storyID);
        setShowOpenStory(true);
        setOpenedStory(storyObj)
        header.heading = storyObj[0].username;
        header.profileImage = storyObj[0].icon;
    };

    const handleStoryAdded = e => {
        e.preventDefault();
        if (story !== null) {
            let storyObj = {
                id: uuidv4(),
                username: loggedUser.username,
                userID: loggedUser.id,
                icon: loggedUser.profilePhoto !== null ? loggedUser.profilePhoto : "../images/icons/profile.png",
                url: story
            };
            dispatch(newStoryAdded(storyObj));
            setStoryUpload(true);
            setShow(false);
        } else {
            setStoryError("You did not make any changes");
        }
    };


    return (
        <div className="stories-container">

            <div className="carousel">
            <div className={storyUpload ? "story-upload add-space" : "story-upload"}>
                    <img onClick={handleStoryUpload} className="story-upload-img" src="../images/icons/insta-story.png" />
                    <p>Add</p>
                </div>
                {
                    allStories.map(story => {
                        return (<Story
                            onClick={() => handleStoryOpen(story.id)}
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
                        <button className="storyUploadBtn" type="submit" disabled={uploadError ? true : false}>Add Story</button>
                    </form>
                </div>
            </Modal>

            <StoryModal
                title="storyyyy" onClose={() => setShowOpenStory(false)} show={showOpenStory}>

                <>
                    <Stories
                        stories={openedStory}
                        defaultInterval={1500}
                        loop={true}
                        header
                        onAllStoriesEnd={() => setShowOpenStory(false)}>
                    </Stories>
                </>


            </StoryModal>
        </div>

    )
}