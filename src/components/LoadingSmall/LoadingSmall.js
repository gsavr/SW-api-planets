import { Spinner } from "reactstrap";

const LoadingSmall = () => {
  return (
    <div>
      <Spinner color="dark" size="sm" type="grow">
        Loading...
      </Spinner>
      <Spinner color="warning" size="sm" type="grow">
        Loading...
      </Spinner>
      <Spinner color="dark" size="sm" type="grow">
        Loading...
      </Spinner>
    </div>
  );
};

export default LoadingSmall;
