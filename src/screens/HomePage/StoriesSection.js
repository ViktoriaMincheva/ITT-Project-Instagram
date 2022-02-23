import { Carousel } from "@trendyol-js/react-carousel"
import "./StoriesSection.css"
import Story from "./Story"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useSelector } from "react-redux";
import { useState } from "react";


export default function StoriesSection() {

    const allStories = useSelector(state => state.allStories.stories);
    const allUsers = useSelector(state => state.users.users);


    return (
        <Carousel infinite={false} leftArrow={<ArrowCircleLeftIcon color="action" />} rightArrow={<ArrowCircleRightIcon color="action" />} show={7} slide={3} swipeOn={false} className="stories-section">

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
    )
}