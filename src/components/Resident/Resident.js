import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchResident } from "../../actions";

const Film = ({ fetchResident, id, resident }) => {
  //will call API to get planet info when component is rendered.
  useEffect(() => {
    fetchResident(id);
  }, []);

  const details = [
    { label: "Resident Name", detail: resident.name },
    { label: "Height", detail: resident.height, unit: "cm" },
    { label: "Mass", detail: resident.mass, unit: "kg" },
    { label: "Birth Year", detail: resident.birth_year },
    { label: "Gender", detail: resident.gender },
  ];

  const displayDetails = () => {
    return details.map((detail) => {
      return (
        <span className="details sw-font">
          {"- "}
          {detail.label}: {detail.detail} {!!detail.unit && detail.unit}
          {" -"}
        </span>
      );
    });
  };

  return (
    <div id={resident.name} className="sw-font">
      <p>{displayDetails()}</p>
    </div>
  );
};

//will map API call from redux to state prop in component
const mapStateToProps = (state) => {
  return { resident: state.resident };
};

export default connect(mapStateToProps, { fetchResident })(Film);
