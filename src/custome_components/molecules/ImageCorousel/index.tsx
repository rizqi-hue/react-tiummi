import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "@heroicons/react/solid";
import React from "react";
import "./_carousel.scss";

const carouselContainer = document.querySelector(".carousel-container");

// Data for carousel

interface CarouselLeftArrowProps {
  onClick?: (e: any) => void;
}

class CarouselLeftArrow extends React.Component<CarouselLeftArrowProps> {
  render() {
    return (
      <button
        className={` carousel__arrow carousel__arrow--left w-10 h-10 border-neutral-200 dark:border-neutral-6000 rounded-full flex items-center justify-center border-2`}
        onClick={this.props.onClick}
        title="Prev"
        data-glide-dir="<"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path
            d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5 12H3.67004"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  }
}

interface CarouselRightArrowProps {
  onClick?: (e: any) => void;
}

class CarouselRightArrow extends React.Component<CarouselRightArrowProps> {
  render() {
    return (
      <button
        className={` carousel__arrow carousel__arrow--right w-10 h-10 border-neutral-200 dark:border-neutral-6000 rounded-full flex items-center justify-center border-2`}
        onClick={this.props.onClick}
        title="Next"
        data-glide-dir=">"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path
            d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 12H20.33"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  }
}

interface CarouselIndicatorProps {
  onClick?: (e: any) => void;
  index?: number;
  activeIndex?: number;
  isActive?: boolean;
}

class CarouselIndicator extends React.Component<CarouselIndicatorProps> {
  render() {
    return (
      <li>
        <a
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__indicator carousel__indicator--active"
              : "carousel__indicator"
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

interface slideProps {
  content?: string;
  title?: string;
  author?: string;
  source?: string;
  image?: string;
}

interface CarouselSlideProps {
  onClick?: (e: any) => void;
  index?: number;
  activeIndex?: number;
  slide?: slideProps;
}

class CarouselSlide extends React.Component<CarouselSlideProps> {
  render() {
    return (
      <li
        className={
          this.props.index == this.props.activeIndex
            ? "carousel__slide carousel__slide--active w-full"
            : "carousel__slide w-full "
        }
      >
        <div className="flex w-full justify-center">
          <img
            className="rounded-xl w-full"
            src={`${process.env.REACT_APP_DATA_PROVIDER}/${this.props.slide?.image}`}
          />
        </div>
        <p className="carousel-slide__content text-lg font-bold text-gray-600">
          {this.props.slide?.title}
        </p>

        {/* <p>
          <strong className="carousel-slide__author">
            {this.props.slide?.author}
          </strong>
          ,{" "}
          <small className="carousel-slide__source">
            {this.props.slide?.source}
          </small>
        </p> */}
      </li>
    );
  }
}

// Carousel wrapper component
interface CarouselProps {
  slides: slideProps[];
}

interface CarouselState {
  activeIndex: number;
}

class Carousel extends React.Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0,
    };
  }

  goToSlide(index: number) {
    this.setState({
      activeIndex: index,
    });
  }

  goToPrevSlide(e: any) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index,
    });
  }

  goToNextSlide(e: any) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return (
      <div className="carousel w-full bg-primary-50 py-2 md:py-5">
        <CarouselLeftArrow onClick={(e) => this.goToPrevSlide(e)} />

        <ul className="carousel__slides w-full">
          {this.props.slides.map((slide, index) => (
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          ))}
        </ul>

        <CarouselRightArrow onClick={(e) => this.goToNextSlide(e)} />

        <ul className="carousel__indicators">
          {this.props.slides.map((slide, index) => (
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex == index}
              onClick={(e) => this.goToSlide(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Carousel;
// Render Carousel component
// render(<Carousel slides={carouselSlidesData} />, carouselContainer);
