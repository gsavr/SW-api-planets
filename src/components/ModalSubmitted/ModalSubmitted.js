import "./ModalSubmitted.css";
import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import R2d2 from "../../assets/r2d2.png";
import StormT from "../../assets/storm_t.png";

const ModalSubmitted = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [success, setSuccess] = useState(true);

  //set random success or failure message
  useEffect(() => {
    setSuccess(!Math.round(Math.random()));
  }, []);

  return (
    <div>
      <Modal
        centered
        fullscreen="lg"
        size="sm"
        isOpen={isOpen}
        toggle={() => setIsOpen(false)}
      >
        <ModalHeader className="sw-font" toggle={() => setIsOpen(false)}>
          {success ? (
            <div>
              {" "}
              <img className="modal-img" src={R2d2} alt="C3PO" /> success!
            </div>
          ) : (
            <div>
              {" "}
              <img
                className="modal-img"
                src={StormT}
                alt="Stoem Trooper"
              />{" "}
              failure!
            </div>
          )}
        </ModalHeader>
        {success ? (
          <ModalBody>
            <p className="sw-font">
              Thank you for your help with the Galactic Census
            </p>
          </ModalBody>
        ) : (
          <ModalBody>
            {" "}
            <p className="sw-font">
              {" "}
              Your information was intercepted by the Galactic Empire.
            </p>{" "}
            <p className="sw-font">Please try again</p>
          </ModalBody>
        )}
        <ModalFooter>
          <Button
            color="dark"
            className="sw-font"
            onClick={() => setIsOpen(false)}
          >
            close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalSubmitted;
