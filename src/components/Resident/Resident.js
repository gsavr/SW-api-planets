import { useFetchResidentByIdQuery } from "../../store/planetsApiSlice";
import LoadingSmall from "../LoadingSmall";

const Resident = ({ id }) => {
  //will call API to get resident info when component is rendered.
  const { data = [], isFetching } = useFetchResidentByIdQuery(id);
  const resident = data;

  //details to display for each resident
  const details = [
    { label: "Name", detail: resident.name },
    { label: "Height", detail: resident.height, unit: "cm" },
    { label: "Mass", detail: resident.mass, unit: "kg" },
    { label: "Birth Year", detail: resident.birth_year },
    { label: "Gender", detail: resident.gender },
  ];

  //fn to display details
  const displayDetails = () => {
    return details.map((detail) => {
      return (
        <span key={resident.name} className="details sw-font">
          {"— "}
          {detail.label}: {detail.detail} {!!detail.unit && detail.unit}
          {" —"}
        </span>
      );
    });
  };

  return (
    <div>
      {isFetching ? (
        <LoadingSmall />
      ) : (
        /*  */
        <p>{displayDetails()}</p>
      )}
    </div>
  );
};

export default Resident;
