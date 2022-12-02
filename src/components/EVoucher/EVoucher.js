import spotify from "../../assets/images/spotify.png";
import shell from "../../assets/images/shell.png";
import uberEats from "../../assets/images/uber-eats.png";
import doordash from "../../assets/images/door-dash.png";
import "./EVoucher.scss";

const eVoucher = () => {
  return (
    <div className="main-evoucher__container">
      <div className="main-evoucher__container-text">
        <h1 className="main-evoucher__title">eVouchers</h1>
        <p className="main-evoucher__text">View All (18)</p>
      </div>
      <div className="main-evoucher__container-logos">
        <div className="main-evoucher__container-logo">
          <img src={spotify} alt="spotify" className="main-evoucher__spotify" />
        </div>
        <div className="main-evoucher__container-logo">
          <img src={shell} alt="shell" className="main-evoucher__shell" />
        </div>
        <div className="main-evoucher__container-logo">
          <img
            src={uberEats}
            alt="uberEats"
            className="main-evoucher__uber-eats"
          />
        </div>
        <div className="main-evoucher__container-logo">
          <img
            src={doordash}
            alt="doordash"
            className="main-evoucher__doordash"
          />
        </div>
      </div>
    </div>
  );
};

export default eVoucher;
