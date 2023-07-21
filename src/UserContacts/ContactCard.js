import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, deleteHandler }) => {
  const { id, name, email, phone } = contact;

  return (
    <div className="item">
      {/* <div className="image"> */}
      <AccountCircle className="ui avatar image" />
      {/* </div> */}

      <div className="content">
        <Link to={{ pathname: `/contact/${id}` }}>
          <div className="header">{name}</div>
          <div>{email} </div>
          <div>{phone} </div>
        </Link>
      </div>
      <div className="extra">
        <div className="ui right floated">
          <Link to={{ pathname: `/edit/${id}` }}>
            <i
              className=" edit alternate outline icon"
              style={{
                color: "blue",
                justifyItems: "flex-end",
                cursor: "pointer",
              }}
            ></i>
          </Link>
          <i
            className=" trash alternate outline icon"
            style={{
              color: "red",
              justifyItems: "flex-end",
              cursor: "pointer",
            }}
            onClick={() => deleteHandler(id)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
