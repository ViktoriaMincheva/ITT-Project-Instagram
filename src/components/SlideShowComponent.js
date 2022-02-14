import { Fade } from 'react-slideshow-image';


export default function Slideshow() {

    const images = [
        "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg"
    ]

    return (
        <>
            <section className="slideshow-container">
                <img id="login-slideshow"
                    src="login-slideshow.png"
                    alt="login"
                />

                <div className="slide-container">
                    <Fade arrows={false} duration={500}>
                        <div className="each-fade">
                            <div className="image-container">
                                <img src={images[0]} alt="image1" />
                            </div>
                        </div>
                        <div className="each-fade">
                            <div className="image-container">
                                <img src={images[1]} alt="image2" />
                            </div>
                        </div>
                        <div className="each-fade">
                            <div className="image-container">
                                <img src={images[2]} alt="image3" />
                            </div>
                        </div>
                        <div className="each-fade">
                            <div className="image-container">
                                <img src={images[3]} alt="image4" />
                            </div>
                        </div>
                        <div className="each-fade">
                            <div className="image-container">
                                <img src={images[4]} alt="image5" />
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        </>
    )
}