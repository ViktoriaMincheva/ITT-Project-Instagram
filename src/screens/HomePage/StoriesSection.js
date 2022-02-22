import { Carousel } from "@trendyol-js/react-carousel"
import "./StoriesSection.css"
import Story from "./Story"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default function StoriesSection () {

    return (
        <Carousel infinite={false} leftArrow={<ArrowCircleLeftIcon color="action" />} rightArrow={<ArrowCircleRightIcon color="action" />} show={7} slide={3} swipeOn={false} className="stories-section">
            <Story username="krasi123" icon="https://i.ibb.co/NrQYQmv/krasi.png" />
            <Story username="vikiM" icon="https://i.ibb.co/DrQBF90/Pics-Art-02-26-01-36-47.jpg" />
            <Story username="galyaG" icon="https://i.ibb.co/K0JKxmZ/galya.png" />
            <Story username="kristiyanK" icon="https://i.ibb.co/Dt0MmXg/kristian.png" />
            <Story username="marianM" icon="https://i.ibb.co/Jn56fg3/marian.png" />
            <Story username="mirelaM" icon="https://i.ibb.co/28rX4dW/mirela.png" />
            <Story username="marielaM" icon="https://i.ibb.co/44vz09K/mp.png" />
            <Story username="nickM" icon="https://i.ibb.co/RDdRMM9/nick.png" />
            <Story username="pamD" icon="https://i.ibb.co/WkW92fK/pam.png" />
            <Story username="plamiM" icon="https://i.ibb.co/PFM08fp/plamena.png" />
            <Story username="vasilP" icon="https://i.ibb.co/mJvvJDP/vasil.png" />
            <Story username="vasilL" icon="https://i.ibb.co/HPDtKLV/vasilL.png" />
            <Story username="vikiS" icon="https://i.ibb.co/tC1vWVy/vikis.png" />
            <Story username="mitkoD" icon="https://i.ibb.co/ZWbzYF2/image.png" />
            <Story username="alexT" icon="https://images.gr-assets.com/users/1638468334p8/44510807.jpg" />
        </Carousel>
    )
}