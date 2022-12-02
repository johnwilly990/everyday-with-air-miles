import { Link } from "react-router-dom";
import "./RewardTracker.scss";

const RewardTracker = () => {
  return (
    <div className="main__container-tracker">
      <h1 className="main__title">Reward Tracker</h1>
      <p className="main__text">You have 5 small coffees available!</p>
      <div className="main__container-coffee">
        <div className="main__container-images">
          <div className="main__container-full ">
            <span className="main__coffee">☕</span>
          </div>
          <div className="main__container-full">
            <span className="main__coffee">☕</span>
          </div>
          <div className="main__container-full">
            <span className="main__coffee">☕</span>
          </div>
          <div className="main__container-full">
            <span className="main__coffee">☕</span>
          </div>
          <div className="main__container-full ">
            <span className="main__coffee">☕</span>
          </div>
        </div>
        <div className="main__container-images">
          <div className="main__container-half">
            <span className="main__coffee-opacity">☕</span>
          </div>
          <div className="main__container-empty">
            <span className="main__coffee-opacity">☕</span>
          </div>
          <div className="main__container-empty">
            <span className="main__coffee-opacity">☕</span>
          </div>
          <div className="main__container-empty">
            <span className="main__coffee-opacity">☕</span>
          </div>
          <div className="main__container-empty">
            <span className="main__coffee-opacity">☕</span>
          </div>
        </div>
      </div>
      <p className="main__text">15 Cash Miles to your next coffee!</p>
      <Link to="/rewards" className="main__link">
        See more details
      </Link>
    </div>
  );
};

export default RewardTracker;
