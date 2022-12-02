import "./Carousel.scss";

const Carousel = () => {
  return (
    <div className="main__container-carousel">
      <div className="main__container-image main__container-image--carousel"></div>
      <p className="main__carousel-text main__carousel-text--highlight">
        You could have prizes waiting!
      </p>
      <p className="main__carousel-text">
        Check the prizes you unpacked and claim the ones you can by Dec 1/22.
      </p>
    </div>
  );
};

export default Carousel;
