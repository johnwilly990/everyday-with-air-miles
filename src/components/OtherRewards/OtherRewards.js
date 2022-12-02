import "./OtherRewards.scss";

const OtherRewards = () => {
  return (
    <div>
      <h1 className="main__other-title">Other Rewards</h1>
      <div className="main__container-other">
        <div className="main__container-item">
          <span className="main__item">☕</span>
          <div className="main__container-quantity main__container-quantity--main">
            5
          </div>
          <div className="main__container-quantity main__container-quantity--coffee">
            3
          </div>
        </div>
        <div className="main__container-text">
          <p className="main__reward-text">Medium Coffee/Tea</p>
          <p className="main__reward-text">50 Cash Miles</p>
        </div>
      </div>
      <div className="main__container-other">
        <div className="main__container-item">
          <span className="main__item">🧋</span>
          <div className="main__container-quantity main__container-quantity--boba">
            2
          </div>
        </div>
        <div className="main__container-text">
          <p className="main__reward-text">Specialty Drink</p>
          <p className="main__reward-text">70 Cash Miles</p>
        </div>
      </div>
      <div className="main__container-other">
        <div className="main__container-item">
          <span className="main__item">🧉</span>
          <div className="main__container-quantity main__container-quantity--smoothie">
            1
          </div>
        </div>
        <div className="main__container-text">
          <p className="main__reward-text">Fruit Smoothie</p>
          <p className="main__reward-text">80 Cash Miles</p>
        </div>
      </div>
      <div className="main__container-other">
        <div className="main__container-item">
          <span className="main__item">🍹</span>
          <div className="main__container-quantity main__container-quantity--drink">
            1
          </div>
        </div>
        <div className="main__container-text">
          <p className="main__reward-text">Drink (Alcoholic)</p>
          <p className="main__reward-text">125 Cash Miles</p>
        </div>
      </div>
      <div className="main__container-other">
        <div className="main__container-item">
          <span className="main__item">🍔</span>
        </div>
        <div className="main__container-text">
          <p className="main__reward-text">Lunch</p>
          <p className="main__reward-text">200 Cash Miles</p>
        </div>
      </div>
    </div>
  );
};

//☕

export default OtherRewards;
