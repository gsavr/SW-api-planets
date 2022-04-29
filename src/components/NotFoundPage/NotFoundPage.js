import Bg from "../../assets/space.jpg";
import Dv from "../../assets/burned_v_light.png";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-page" style={{ backgroundImage: `url(${Bg})` }}>
      <img src={Dv} alt="burned-vader" />
      <p>You have reached the Dark Side</p>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
};

export default NotFoundPage;
