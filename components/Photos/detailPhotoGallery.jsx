import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import { 
    CarouselProvider, 
    Slider, 
    Slide, 
    ButtonBack, 
    ButtonNext, 
} from 'pure-react-carousel';
import ReactImageMagnify from 'react-image-magnify';
// components
import PhotosColumn from './photosColumn';
// style
import s from './detailPhotoGallery.module.css';


const DetailPhotoGallery = ({ photos }) => {

    const [ photoIndex, setPhotoIndex ] = useState(0);

    // handlers
    const handleNext = () => setPhotoIndex(photoIndex + 1);
    const handleBack = () => setPhotoIndex(photoIndex - 1);
    

    return (
        <div className={s.container}>
            
            {/* photos preview */}
            <div className={s.photosColumnContainer}>
                <PhotosColumn 
                    photos={photos} 
                    idx={photoIndex}
                    setPhotoIndex={setPhotoIndex}    
                />
            </div>

            <div id="enlargedContainer" />
            
            {/* photos carousel */}
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={90}
                totalSlides={photos.length}
                style={{width: '100%'}}
                currentSlide={photoIndex}
            >

                <div className={s.sliderContainer}>
                    <Slider>
                        {
                            photos.map( ({photo_url}, idx) => (
                                <Slide index={idx} key={idx}>
                                    <div className={s.sliderPhotoCont}>
                                        {/* <img src={photo_url} alt={photo_url} className={s.sliderPhoto} /> */}
                                        <ReactImageMagnify {...{
                                            smallImage: {
                                                alt: 'mercadoabierto photo',
                                                isFluidWidth: true,
                                                src: photo_url
                                            },
                                            largeImage: {
                                                src: photo_url,
                                                width: 600,
                                                height: 600
                                            },
                                            shouldUsePositiveSpaceLens: true,
                                            enlargedImagePortalId: 'enlargedContainer',
                                            enlargedImageContainerClassName: s.enlargedImageContainer,
                                        }} />
                                    </div>
                                </Slide>
                            ))
                        }
                    </Slider>
                    
                    <ButtonBack 
                        onClick={handleBack} 
                        className={s.buttonBack}>
                            <Icon size="big" color={ photoIndex === 0 ? "grey" : "blue" } name="chevron left" />
                    </ButtonBack>

                    <ButtonNext 
                        onClick={handleNext} 
                        className={s.buttonNext}>
                            <Icon size="big" color={ photoIndex === photos.length-1 ? "grey" : "blue" } name="chevron right" />
                    </ButtonNext>
                </div>
            </CarouselProvider>
        </div>
    );
}

export default DetailPhotoGallery;