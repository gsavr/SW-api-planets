import { Spinner } from "reactstrap";

const Loading = () => {
  return (
    <div>
      <p className="sw-font">Loading...</p>
      <Spinner color="dark" size="" type="grow">
        Loading...
      </Spinner>
      <Spinner color="warning" size="" type="grow">
        Loading...
      </Spinner>
      <Spinner color="dark" size="" type="grow">
        Loading...
      </Spinner>
    </div>
  );
};

export default Loading;
