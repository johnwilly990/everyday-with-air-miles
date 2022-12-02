import "./Modal.scss";
import CloseIcon from "../../assets/icons/close.svg";
import AirmilesLogo from "../../assets/images/air-miles-logo.png";
import Barcode from "../../assets/images/barcode.png";

function Modal({ setOpenModal }) {
  return (
    <>
      <div
        className="modal__darkBG modal__centered "
        onClick={() => setOpenModal(false)}
      >
        <div className="modal">
          <div className="modal__container">
            <div className="modal__container-1">
              <img
                src={AirmilesLogo}
                className="modal__logo"
                alt="airmiles logo"
              />

              <h3 className="modal__text">My card</h3>
              <img className="modal__close" src={CloseIcon} alt="close icon" />
            </div>
            <h3 className="modal__text">Johnny</h3>
            <h3 className="modal__text">1234 567 8901</h3>
            <img className="modal__barcode" src={Barcode} alt="barcode" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
