import React, { useState } from 'react'
import { Button, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';


// CSS
import './Home.css'

// images
import img1 from '../images/circus1.jpg'
import img2 from '../images/1.png'
import img3 from '../images/2.png'
import img4 from '../images/3.png'

export default function Home() {

  const items = [
    {
      src: img2,
      altText: 'Circus party',
      caption: 'Choucroute party'
    },
    {
      src: img3,
      altText: 'Circus party',
      caption: 'Choucroute party'
    },
    {
      src: img4,
      altText: 'Circus party',
      caption: 'Choucroute party'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} />
      </CarouselItem>
    );
  });


  return (
    <div className="homeContainer">

      {/* _____________PART 1  _____________ */}

      <div className="part1">
        {/* <img className="img1" src={img1} /> */}
        <div className="titlePart1">
          <div className="welcomeTitle">Bienvenue sur le wild circus !</div>
        </div>
      </div>

      {/* _____________PART 2  _____________ */}

      <div className="part3">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </div>

      <div className="part2">
        <div className="getTickets">
          <Button color="success">Venez au prochain spectacle</Button>
          <Button color="success">Se connecter en tant qu'administrateur</Button>
        </div>
      </div>
      
    </div>
  )
}
