import "./ModalForm.css";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import PropTypes from "prop-types";
import ModalSubmitted from "../ModalSubmitted";
import C3po from "../../assets/c3po.png";

const ModalForm = () => {
  //state that opens modal
  const [isOpen, setIsOpen] = useState(false);
  //this state opens child modal with success / warning message
  const [thankYou, setThankYou] = useState(false);

  // fileds to display when submitting a new planet--add more filels here if more are needed
  const formGroupFields = [
    { name: "name", type: "text", label: "Name" },
    { name: "rotation_period", type: "number", label: "Rotation Period" },
    { name: "orbital_period", type: "number", label: "Orbital Period" },
    { name: "diameter", type: "number", label: "Diameter" },
    { name: "climate", type: "text", label: "Climate" },
    { name: "gravity", type: "text", label: "Gravity" },
    {
      name: "terrain",
      type: "select",
      label: "Terrain",
      options: () => {
        displayTerrainOptions();
      },
    },
    { name: "surface_water", type: "number", label: "Surface Water" },
  ];

  //fn to render options for terrain dropdown
  const displayTerrainOptions = () => {
    return (
      <>
        <option></option>
        <option>desert</option>
        <option>grasslands</option>
        <option>mountains</option>
        <option>rainforests</option>
        <option>jungle</option>
      </>
    );
  };

  //fn to render input fields in the form
  const renderFormGroup = () => {
    return formGroupFields.map(({ name, type, label, options }) => {
      return (
        <FormGroup floating key={name}>
          <Input id={name} name="text" placeholder={label} type={type} required>
            {options && displayTerrainOptions()}
          </Input>
          <Label check for={name}>
            {label}
          </Label>
        </FormGroup>
      );
    });
  };

  //  OnSubmit Form Yellow Button
  const onSubmit = (event) => {
    event.preventDefault();
    setThankYou(!thankYou);
    setIsOpen(!isOpen);
  };
  // Open Initial Modal Form Red Button
  const onOpenForm = () => {
    setIsOpen(!isOpen);
    setThankYou(false);
  };

  return (
    <div>
      <span className="pg-bottm">
        <Button
          className="sw-font bttm-right"
          size="sm"
          color="danger"
          onClick={onOpenForm}
        >
          Add
        </Button>
      </span>
      {thankYou && <ModalSubmitted />}
      <Modal
        centered
        fullscreen="xl"
        size="lg"
        isOpen={isOpen}
        toggle={() => setIsOpen(!isOpen)}
      >
        <ModalHeader className="sw-font" toggle={() => setIsOpen(!isOpen)}>
          <img className="modal-img" src={C3po} alt="C3PO" /> Help us add a
          missing planet to our database
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit} inline>
            {renderFormGroup()}
            <ModalFooter>
              <Button type="submit" className="sw-font" color="warning">
                add
              </Button>{" "}
              <Button
                color="danger"
                className="sw-font"
                onClick={() => setIsOpen(!isOpen)}
              >
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

//assign prop types to each input field in the form to submit a new planet
ModalForm.propTypes = {
  name: PropTypes.string,
  rotation_period: PropTypes.number,
  orbital_period: PropTypes.number,
  diameter: PropTypes.number,
  climate: PropTypes.string,
  gravity: PropTypes.string,
  terrain: PropTypes.string,
  surface_water: PropTypes.number,
};

export default ModalForm;
