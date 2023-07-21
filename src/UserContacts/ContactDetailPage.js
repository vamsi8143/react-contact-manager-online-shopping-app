import { AccountCircle } from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  // retriveContact,
  // retriveContacts,
  // storageHandler,
  api,
  deleteContact,
} from "../utils/localStorage.util";
import { useEffect, useState } from "react";
// import { LOCAL_STORAGE_KEY } from "../const";

const ContactDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState({});
  // const [state] = useState(retriveContact(id));

  const fetchContact = async () => {
    const response = await api.get(`/contacts/${id}`);
    setState(response.data);
    return response.data;
  };

  useEffect(() => {
    fetchContact();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log("state", state);

  const removeContactHandler = (id) => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // const contacts = retriveContacts().filter((contact) => {
    //   return contact.id !== id;
    // });
    // storageHandler(contacts);
    deleteContact(id);
    navigate("/");
  };

  return (
    <div className="ui main">
      {JSON.stringify(state) !== "{}" ? (
        <div className="ui card centered">
          <>
            <div>
              <AccountCircle className="ui medium centered image " />
            </div>

            <div className="content" data-id={state?.id}>
              <div className="header">{state?.name}</div>
              <div className="desc">{state?.email}</div>
              <div className="desc">{state?.phone}</div>
              <div className="ui floated right">
                <i
                  className=" trash alternate outline icon"
                  style={{
                    color: "red",
                    justifyItems: "flex-end",
                    cursor: "pointer",
                  }}
                  onClick={() => removeContactHandler(id)}
                ></i>
              </div>
            </div>
          </>
        </div>
      ) : (
        <div className="ui main centered">
          <p className="ui header center aligned">
            no contact found with this id!
          </p>
          <section className="ui header center aligned">
            <Link to={"/add"} className="ui button blue">
              add contacts
            </Link>
            <Link to={"/"} className="ui button blue">
              view all contacts
            </Link>
          </section>
        </div>
      )}
    </div>
  );
};

export default ContactDetailPage;
