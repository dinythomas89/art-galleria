import { useState } from "react";
import {
  ImageSliderComponent,
  SliderWrapper,
  SliderContentWrapper,
  SliderContent,
  PrevButton,
  NextButton,
  SliderTitle,
} from "../styles/imageSlider";
import ImageCard from "./ImageCard";

interface Slide {
  id: number;
  workImage: string;
  workLink: string;
}
interface SliderProps {
  slides: Slide[];
}
const ImageSlider = ({ slides }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const show = 3;

  const next = () => {
    if (currentIndex < slides.length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <ImageSliderComponent>
      <SliderTitle>Famous Works</SliderTitle>
      <SliderWrapper>
        {currentIndex > 0 && <PrevButton onClick={prev}>&#10094;</PrevButton>}
        <SliderContentWrapper>
          <SliderContent
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {slides.map((slide) => (
              <ImageCard key={slide.id} image={slide} />
            ))}
          </SliderContent>
        </SliderContentWrapper>
        {currentIndex < slides.length - show && (
          <NextButton onClick={next}>&#10095;</NextButton>
        )}
      </SliderWrapper>
    </ImageSliderComponent>
  );
};

export default ImageSlider;
