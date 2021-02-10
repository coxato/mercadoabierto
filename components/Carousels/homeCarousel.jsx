import React from 'react';
import Link from 'next/link';
import { 
    CarouselProvider, 
    Slider, 
    Slide, 
    ButtonBack, 
    ButtonNext,
    DotGroup 
} from 'pure-react-carousel';
import { Icon } from 'semantic-ui-react';
// utils
import { getScreenData } from '../../utils/screen';
// style
import s from './homecarousel.module.css';


const BANNERS = [
    {
        desktop: '/images/desktop-laptops.png',
        tablet: '/images/mobile-laptops.png',
        smartphone: '/images/mobile-laptops.png',
        link: '/category/laptops'
    },
    {
        desktop: '/images/desktop-videogames.png',
        tablet: '/images/mobile-videogames.png',
        smartphone: '/images/mobile-videogames.png',
        link: '/category/videogames'
    },
    {
        desktop: '/images/desktop-smartphones.png',
        tablet: '/images/mobile-smartphones.png',
        smartphone: '/images/mobile-smartphones.png',
        link: '/category/smartphones'
    },
]

const getNaturalSizes = (currentDevice) => {
    const sizes = {
        desktop: { width: 1600, height: 340 },
        tablet: { width: 984, height: 450 },
        smartphone: { width: 984, height: 450 },
    }

    return sizes[currentDevice];
}


const HomeCarousel = () => {
    const { currentDevice } = getScreenData();
    const { width, height } = getNaturalSizes(currentDevice);

    return (
        <div className={s.container}>
            <CarouselProvider
                naturalSlideHeight={height}
                naturalSlideWidth={width}
                totalSlides={3}
                infinite={true}
                isPlaying
                interval={5000}
            >
                <Slider>
                    {
                        BANNERS.map( (banner, idx) => (
                            <Slide key={idx} index={idx}>
                                <Link href={banner.link}>
                                    <a>
                                        <img 
                                            src={banner[currentDevice]} 
                                            alt="mercadoabierto banner"
                                            style={{width: '100%'}} 
                                        />
                                    </a>
                                </Link>
                            </Slide>
                        ))
                    }
                </Slider>

                <ButtonBack className={`${s.btn} ${s.btnLeft}`}>
                    <Icon color="blue" size="big" name="chevron left" />
                </ButtonBack>

                <ButtonNext className={`${s.btn} ${s.btnRight}`}>
                    <Icon color="blue" size="big" name="chevron right" />
                </ButtonNext>

                <DotGroup className={s.dotContainer} />

            </CarouselProvider>
        </div>
    );
}
 
export default HomeCarousel;