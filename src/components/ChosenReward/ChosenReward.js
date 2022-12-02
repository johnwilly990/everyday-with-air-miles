import starbucks from "../../assets/images/starbucks.png";
import airplane from "../../assets/images/paper-airplane.png";
import secondCup from "../../assets/images/second-cup.png";
import darkhorse from "../../assets/images/darkhorse.png";
import "./ChosenReward.scss";

const ChosenReward = () => {
  return (
    <div className="main__container-chosen">
      <h1 className="main__chosen-title">Your Chosen Reward</h1>
      <div className="main__container-selected">
        <div className="main__container-coffees">
          <span className="main__coffee">☕</span>
        </div>
        <p className="main__reward-text">Small Coffee/Tea</p>
        <p className="main__reward-text">30 Cash Miles</p>
      </div>
      <div className="main__container-logos">
        <div className="main__container-logo">
          <img className="main__starbucks" alt="starbucks" src={starbucks} />
        </div>
        <div className="main__container-logo">
          <img className="main__airplane" alt="paper airplane" src={airplane} />
        </div>
        <div className="main__container-logo">
          <img className="main__second-cup" alt="second cup" src={secondCup} />
        </div>
        <div className="main__container-logo">
          <img
            className="main__darkhorse"
            alt="darkhorse coffee"
            src={darkhorse}
          />
        </div>
      </div>
    </div>
  );
};

export default ChosenReward;
