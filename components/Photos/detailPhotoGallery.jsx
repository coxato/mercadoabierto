import React, { useState } from 'react';
import { 
    CarouselProvider, 
    Slider, 
    Slide, 
    ButtonBack, 
    ButtonNext, 
} from 'pure-react-carousel';
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
                                        <img src={photo_url} alt={photo_url} className={s.sliderPhoto} />
                                    </div>
                                </Slide>
                            ))
                        }
                    </Slider>
                    
                    <ButtonBack 
                        onClick={handleBack} 
                        className={s.buttonBack}>
                            Back
                    </ButtonBack>

                    <ButtonNext 
                        onClick={handleNext} 
                        className={s.buttonNext}>
                            Next
                    </ButtonNext>
                </div>
            </CarouselProvider>
        </div>
    );
}

export default DetailPhotoGallery;