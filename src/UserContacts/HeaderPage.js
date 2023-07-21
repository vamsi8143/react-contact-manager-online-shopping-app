import { Link, useNavigate } from "react-router-dom";

const HeaderPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="ui segment">
      <div className="ui header center aligned">
        <h2>
          <button
            type="button"
            className="ui button left blue floated main menu"
            onClick={handleBack}
          >
            back
          </button>
          Contact Manager
          <Link className="ui button right blue floated main menu" to={"/"}>
            Contact List
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default HeaderPage;
