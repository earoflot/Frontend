import React from "react";
import { useState } from "react";
import "./Modal.css";
import { useSelector } from "react-redux";

function Modal() {
  const { modalValue, modalTitle } = useSelector((store) => store.modal);

  const [modalStatus, setModal] = useState(false);
  return (
    <div>
      <button className="en" onClick={() => setModal(true)}>
        Enquire Now
      </button>

      <div
        onClick={() => setModal(false)}
        className={`modalOverLay ${modalStatus ? "modalShow" : ""}`}
      ></div>
      <div className={`ModalDiv ${modalStatus ? "showModal" : ""}`}>
        <h1>
          {modalValue}

          <button onClick={() => setModal(false)}>X</button>
        </h1>
      </div>
    </div>
  );
}

export default Modal;
