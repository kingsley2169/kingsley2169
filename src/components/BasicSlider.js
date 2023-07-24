import React, { useState } from "react";
import HeroSlider, {Slide} from 'hero-slider';

const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";



const App = () => {
    const[isHovering, setIsHovering] = useState(false);
    return (
        <div
            onMouseOver={() => {
                setIsHovering(true)
            }}
            onMouseOut={() =>{
                setIsHovering(false)
            }}
            style={{
                pointerEvents: "none"
            }}
        >

            <HeroSlider height={"100vh"}
                autoplay ={
                    {
                        autoplayDuration: 3000
                    }
                }

                controller={{
                initialSlide: 1,
                slidingDuration: 100,
                slidingDelay: 100,
                onSliding: (nextSlide) =>
                    console.debug("onSliding(nextSlide): ", nextSlide),
                onBeforeSliding: (previousSlide, nextSlide) =>
                    console.debug(
                    "onBeforeSliding(previousSlide, nextSlide): ",
                    previousSlide,
                    nextSlide
                ),
                onAfterSliding: (nextSlide) =>
                    console.debug("onAfterSliding(nextSlide): ", nextSlide)
                }}
            >
                
                <Slide
                    background={{
                        backgroundImageSrc: bogliasco,
                        backgroundAttachment: "fixed"
                    }}
                />
                <Slide
                    background={{
                        backgroundImageSrc: countyClare,
                        backgroundAttachment: "fixed"
                    }}
                />
                <Slide
                    background={{
                        backgroundImageSrc: craterRock,
                        backgroundAttachment: "fixed"
                    }}
                />
                <Slide
                    background={{
                        backgroundImageSrc: giauPass,
                        backgroundAttachment: "fixed"
                    }}
                />
            </HeroSlider>
        </div>
    )
}

export default App;