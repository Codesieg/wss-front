import { useEffect, useState, useRef, useCallback } from 'react'

const useSlider = (slideImage, slideText, images, play = false) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const slideCounterRef = useRef(0);
    const intervalRef = useRef(null);

    // Initialize slider
    useEffect(() => {
        if (images && images.length > 0) {
            startSlider();
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [images]);

    // Handle auto-play
    useEffect(() => {
        if (play === true && images && images.length > 1) {
            intervalRef.current = setInterval(() => {
                goToNextSlide();
            }, 5000);
            
            return () => {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                }
            };
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
    }, [play, images]);

    const startSlider = useCallback(() => {
        if (!images || images.length === 0) return;
        
        slideCounterRef.current = 0;
        setCurrentSlide(0);
        setCurrentText(images[0].text || '');
        
        if (slideImage.current) {
            slideImage.current.style.backgroundImage = `linear-gradient(
                to right,
                rgba(34, 34, 34, 0.4),
                rgba(68, 68, 68, 0.4)
            ), url(${images[0].src})`;
        }
    }, [images, slideImage]);

    const handleSlide = useCallback((slideIndex) => {
        if (!images || !images[slideIndex] || !slideImage.current) return;
        
        slideImage.current.style.backgroundImage = `linear-gradient(
            to right,
            rgba(34, 34, 34, 0.4),
            rgba(68, 68, 68, 0.4)
        ), url(${images[slideIndex].src})`;
        
        setCurrentText(images[slideIndex].text || '');
        setCurrentSlide(slideIndex);
        animateSlide();
    }, [images, slideImage]);

    const animateSlide = useCallback(() => {
        if (!slideImage.current) return;
        
        slideImage.current.classList.add("fadeIn");
        setTimeout(() => {
            if (slideImage.current) {
                slideImage.current.classList.remove("fadeIn");
            }
        }, 1700);
    }, [slideImage]);

    const goToPreviousSlide = useCallback(() => {
        if (!images || images.length === 0) return;
        
        let newIndex;
        if (slideCounterRef.current === 0) {
            newIndex = images.length - 1;
            slideCounterRef.current = images.length - 1;
        } else {
            slideCounterRef.current--;
            newIndex = slideCounterRef.current;
        }
        
        handleSlide(newIndex);
    }, [images, handleSlide]);

    const goToNextSlide = useCallback(() => {
        if (!images || images.length === 0) return;
        
        let newIndex;
        if (slideCounterRef.current === images.length - 1) {
            newIndex = 0;
            slideCounterRef.current = 0;
        } else {
            slideCounterRef.current++;
            newIndex = slideCounterRef.current;
        }
        
        handleSlide(newIndex);
    }, [images, handleSlide]);

    const goToSlide = useCallback((index) => {
        if (!images || !images[index] || !slideImage.current) return;
        
        slideCounterRef.current = index;
        slideImage.current.style.backgroundImage = `linear-gradient(
            to right,
            rgba(34, 34, 34, 0.4),
            rgba(68, 68, 68, 0.4)
        ), url(${images[index].src})`;
        
        setCurrentText(images[index].text || '');
        setCurrentSlide(index);
        animateSlide();
    }, [images, slideImage, animateSlide]);

    // Update text content in slideText ref when currentText changes
    useEffect(() => {
        if (slideText.current && currentText !== undefined) {
            slideText.current.textContent = currentText;
        }
    }, [currentText, slideText]);

    return { 
        goToPreviousSlide, 
        goToNextSlide,
        goToSlide,
        currentSlide,
        currentText
    };
};

export default useSlider;


