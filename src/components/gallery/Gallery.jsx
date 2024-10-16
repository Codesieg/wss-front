import React, { useRef } from "react"
import useSlider from "../../hooks/useSlider"

import './gallery.css';

const Gallery = ({images}) => {
  // const [play, setPlay] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  // const handleShowModal = () => {
  //   setShowModal(!showModal);
  // };

  const slideImage = useRef(null)
  const slideText = useRef(null)
  const { goToPreviousSlide, goToNextSlide, goToSlide } = useSlider(
      slideImage,
      slideText,
      images,
      // play
    )
    
    // const autoSlide = () =>  {
    //     setPlay(!play);
    // }

  return (
  <>
    <div className="slider" ref={slideImage}>
          {/* <button onClick={autoSlide} className="slider__btn-left">
              <i className="fas fa-play" ></i>  
          </button> */}
          <div className="slider--content">
            <button onClick={ () => {goToPreviousSlide()}} className="slider__btn-left">
              <i className="fas fa-angle-left"></i>
            </button>
            <div className="slider--feature">
              <p ref={slideText} className="feature--text d-none"></p>
            </div>
            <button onClick={goToNextSlide} className="slider__btn-right">
              <i className="fas fa-angle-right"></i>
            </button>     
          </div>
      </div>
          <div className="slider--dot--content">
            {images.map((image, index) => (
                <img  key={index} onClick={() =>goToSlide(index)}  className="slider--dot" src={image.src} alt={image.texte} />              
            ))}
          </div>
    </>
  );
};

export default Gallery;
